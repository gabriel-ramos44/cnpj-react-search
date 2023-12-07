import React, { useState } from 'react'
import { ThemeProvider, Typography, Box, Snackbar, Alert } from '@mui/material'
import theme from '../../../styles/theme'
import SearchForm from '../../SearchForm'
import { getCnpjInfo } from '../../../services/CnpjService'
import styles from './styles'
import CnpjInfoDialog from '../../CnpjInfoDialog'

const HomePage: React.FC = () => {
  const [cnpjInfo, setCnpjInfo] = useState<any | null>(null)
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)

  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false)
  const [snackbarMessage, setSnackbarMessage] = useState<string>('')

  const handleSearch = async (cnpj: string) => {
    try {
      const info = await getCnpjInfo(cnpj)
      setCnpjInfo(info)
      setDialogOpen(true)
    } catch (error: any) {
      if(error.message){
        setSnackbarMessage(error.message)
        setSnackbarOpen(true)
      }
    }
  }

  const handleDialogClose = () => {
    setDialogOpen(false)
  }

  const handleSnackbarClose = () => {
    setSnackbarOpen(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <Box  style={styles.container} sx={{ backgroundColor: theme.palette.background.default }}>
        <Typography variant="h4" color="white" gutterBottom>
          Buscar CNPJ
        </Typography>
        <SearchForm onSearch={handleSearch} />
        {cnpjInfo && (
            <CnpjInfoDialog
              open={dialogOpen}
              onClose={handleDialogClose}
              cnpjInfo={{
                cnpj: cnpjInfo.estabelecimento.cnpj,
                razaoSocial: cnpjInfo.razao_social,
                cidade: cnpjInfo.estabelecimento.cidade.nome,
                situacaoCadastral: cnpjInfo.estabelecimento.situacao_cadastral,
                dataDeCadastro: cnpjInfo.estabelecimento.data_inicio_atividade,
              }}
            />
        )}
      </Box>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="error" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

    </ThemeProvider>
  )
}

export default HomePage
