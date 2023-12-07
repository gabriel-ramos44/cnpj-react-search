export interface ICidade{
    nome: string
}

export interface IEstabelecimento{
    situacao_cadastral: string
    data_inicio_atividade: string
    cnpj: string
    cidade: ICidade
}

export interface getCnpjInfoApiResponse {
    razao_social: string
    inscricao_suframa: string
    ativo: string
    estabelecimento: IEstabelecimento
}