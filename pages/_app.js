import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'


const light = {
  colors: {
    primary: '#0070f3',
    secondary: '#ff4081',
  },
}

const dark = {
  colors: {
    primary: '#0070f3',
    secondary: '#ff4081',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
