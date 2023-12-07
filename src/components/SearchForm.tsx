import React, { useState } from 'react'
import { Button, TextField, Box } from '@mui/material'
import { TextFieldMask } from './MaskedTextField'

interface SearchFormProps {
  onSearch: (cnpj: string) => void
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [cnpj, setCnpj] = useState<string>('')

  const handleSearch = () => {
    onSearch(cnpj)
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxWidth="400px"
      width="100%"
      p={2}
      borderRadius={8}
      boxShadow={20}
      bgcolor="background.paper"
    >
      <TextField
        label="CNPJ"
        value={cnpj}
        onChange={(event) => setCnpj(event.target.value)}
        margin="normal"
        variant="filled"
        InputProps={{
          inputComponent: TextFieldMask as any,
          inputProps: {
            mask: [
              /\d/, /\d/, '.', /\d/, /\d/,
              /\d/, '.', /\d/, /\d/, /\d/,
              '/', /\d/, /\d/, /\d/, /\d/,
              '-', /\d/, /\d/,
            ],
          },
        }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        disabled={!cnpj}
        style={{ marginTop: '16px' }}
      >
        Pesquisar
      </Button>
    </Box>
  )
}

export default SearchForm
