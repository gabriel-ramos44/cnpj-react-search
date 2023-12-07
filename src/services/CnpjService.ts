import axios, { AxiosResponse } from 'axios'
import { getCnpjInfoApiResponse } from './interfaces/apiResponse'

const apiBaseUrl = process.env.REACT_APP_CNPJ_API_URL

const formatCnpj = (cnpj: string): string => {
    return cnpj.replace(/[^\d]/g, '') // Remove caracteres não numéricos
  }

  export const getCnpjInfo = async (cnpj: string): Promise<getCnpjInfoApiResponse | null> => {
    try {
      const formattedCnpj = formatCnpj(cnpj)
      const response: AxiosResponse<getCnpjInfoApiResponse> = await axios.get(`${apiBaseUrl}/${formattedCnpj}`)

      if (response.data?.razao_social) {
        const storedData = JSON.parse(localStorage.getItem('cnpjHistory') || '[]')
        storedData.push(response.data)
        localStorage.setItem('cnpjHistory', JSON.stringify(storedData))
      }

      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status

        if (status === 400) {
          throw new Error('CNPJ inválido')
        } else if (status === 429) {
          throw new Error('Limite excedido, tente novamente em 3 minutos')
        }
      }

      console.error('Erro na requisição CNPJ:', error)
      throw error
    }
  }
export const getCnpjHistory = (): getCnpjInfoApiResponse[] => {
  const storedData = JSON.parse(localStorage.getItem('cnpjHistory') || '[]')
  return storedData
}