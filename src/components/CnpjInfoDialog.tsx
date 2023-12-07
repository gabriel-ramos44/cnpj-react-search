import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material'
import CnpjInfoCard from './CnpjInfoCard'

interface CnpjInfoDialogProps {
  open: boolean
  onClose: () => void
  cnpjInfo: {
    cnpj: string
    razaoSocial: string
    cidade: string
    situacaoCadastral: string
    dataDeCadastro: string
  }
}

const CnpjInfoDialog: React.FC<CnpjInfoDialogProps> = ({ open, onClose, cnpjInfo }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle color="primary">Resultado da Pesquisa</DialogTitle>
      <DialogContent>
        <CnpjInfoCard cnpjInfo={cnpjInfo} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained" color="primary">
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CnpjInfoDialog
