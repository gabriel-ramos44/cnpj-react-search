import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from './components/pages/homePage/HomePage'
import HistoryPage from './components/pages/historyPage/HistoryPage'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CONSULTA CNPJ
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Buscar CNPJ
            </Button>
            <Button color="inherit" component={Link} to="/historico">
              Histórico
            </Button>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/historico" element={<HistoryPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
