import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head';
import theme from '../src/theme';
import GlobalStyle from '../src/theme/GlobalStyle';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portifólio Roberto Horst</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" /> 
      </Head>

      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
