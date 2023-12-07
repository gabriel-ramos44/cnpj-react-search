import { OutlinedTextFieldProps, TextField } from '@mui/material'
import React from 'react'
import MaskedInput from 'react-text-mask'

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
  mask: (string | RegExp)[]
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function TextFieldMask({
  mask,
  value,
  onChange,
  ...props
}: TextFieldMaskProps) {
  return (
    <MaskedInput
      mask={mask}
      value={value}
      onChange={onChange}
      render={(ref, props) => (
        <TextField
          {...props}
          inputRef={ref}
          variant="outlined"
          fullWidth
          color="secondary"
        />
      )}
    />
  )
}
