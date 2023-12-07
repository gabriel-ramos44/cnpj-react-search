import React from 'react'
import { Typography, Card, CardContent, Grid, Divider } from '@mui/material'
import { format } from 'date-fns'

interface CnpjInfoCardProps {
  cnpjInfo: {
    cnpj: string
    razaoSocial: string
    cidade: string
    situacaoCadastral: string
    dataDeCadastro: string
  }
}

const CnpjInfoCard: React.FC<CnpjInfoCardProps> = ({ cnpjInfo }) => {

  const formattedDate = format(new Date(cnpjInfo.dataDeCadastro), 'dd/MM/yyyy')

  return (
    <Card elevation={3} style={{ height: '100%'}}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" color="primary">
              Informações da Empresa
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" color="primary">CNPJ:</Typography>
            <Typography variant="body1">{cnpjInfo.cnpj}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" color="primary">Razão Social:</Typography>
            <Typography variant="body1">{cnpjInfo.razaoSocial}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" color="primary">Cidade:</Typography>
            <Typography variant="body1">{cnpjInfo.cidade}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" color="primary">Situação Cadastral:</Typography>
            <Typography variant="body1">{cnpjInfo.situacaoCadastral}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" color="primary">Data de Cadastro:</Typography>
            <Typography variant="body1">{formattedDate}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CnpjInfoCard
