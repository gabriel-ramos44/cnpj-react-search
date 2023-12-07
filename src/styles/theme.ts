import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
        light: '#1999F9',
        main: '#2196F3',
        dark: '#0A3463',
        contrastText: '#000',
      },
      secondary: {
        light: '#2480FF',
        main: '#2480FF',
        dark: '#4C91C4',
        contrastText: '#fff',
      },
      background: {
        default: '#0a3463',
      },
  },
})

export default theme
