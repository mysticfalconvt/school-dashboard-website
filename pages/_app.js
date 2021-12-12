import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import useThemes from '../util/useThemes'
import { useEffect } from 'react'


export default function App({ Component, pageProps }) {
  const { theme, themesList, setThemeByName, ThemeButtons } = useThemes()




  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
        <ThemeButtons />
      </ThemeProvider>
    </>
  )
}
