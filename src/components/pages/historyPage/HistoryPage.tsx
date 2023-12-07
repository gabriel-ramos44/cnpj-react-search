import React, { useState } from 'react'
import { Typography, Grid, Pagination, PaginationItem, Box } from '@mui/material'
import { ThemeProvider } from 'styled-components'
import theme from '../../../styles/theme'
import CnpjInfoCard from '../../CnpjInfoCard'
import { getCnpjHistory } from '../../../services/CnpjService'

const ITEMS_PER_PAGE = 6

const HistoryPage: React.FC = () => {
  const cnpjHistory = getCnpjHistory()
  const [currentPage, setCurrentPage] = useState<number>(0)

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value - 1)
  }

  const offset = currentPage * ITEMS_PER_PAGE
  const currentPageData = cnpjHistory.slice(offset, offset + ITEMS_PER_PAGE)

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: theme.palette.background.default, minHeight: '100vh', padding: '20px 3% 20px' }}>
        <Typography variant="h4" color="white" gutterBottom>
          Histórico de Pesquisas
        </Typography>
        {cnpjHistory.length > 0 ? (
          <Grid container spacing={2}>
            {currentPageData.map((cnpjInfo, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <CnpjInfoCard
                  cnpjInfo={{
                    cnpj: cnpjInfo.estabelecimento.cnpj,
                    razaoSocial: cnpjInfo.razao_social,
                    cidade: cnpjInfo.estabelecimento.cidade.nome,
                    situacaoCadastral: cnpjInfo.estabelecimento.situacao_cadastral,
                    dataDeCadastro: cnpjInfo.estabelecimento.data_inicio_atividade,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="h5" color="textSecondary" gutterBottom>
            Você ainda não realizou nenhuma pesquisa
          </Typography>
        )}
        {cnpjHistory.length > ITEMS_PER_PAGE && (
          <Grid container spacing={1} style={{ marginTop: '5px' }}>
            <Grid item xs={6} md={1} lg={1}>
              <Typography variant="h6" color="white" gutterBottom>
                Páginas
              </Typography>
            </Grid>
            <Grid item xs={6} md={2} lg={2}>
              <Box sx={{ backgroundColor: 'white', borderRadius: '12px', display: 'flex', justifyContent: 'center' }}>
                <Pagination
                  count={Math.ceil(cnpjHistory.length / ITEMS_PER_PAGE)}
                  page={currentPage + 1}
                  onChange={handlePageChange}
                  color="primary"
                  renderItem={(item) => <PaginationItem component="div" {...item} />}
                />
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>
    </ThemeProvider>
  )
}

export default HistoryPage
