import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Header from './components/header';

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#262626",
      },
    }),
  },
  colors: {
    black: 
    {
      50: '#f8f0f2',
      100: '#d9d9d9',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#262626',
      900: '#120b0d',
    },
    purple:
    {
      50: '#f7e6ff',
      100: '#e0b7fa',
      200: '#cb88f5',
      300: '#b759f1',
      400: '#a22bed',
      500: '#8916d4',
      600: '#6a10a5',
      700: '#4d0a76',
      800: '#2e0548',
      900: '#11011b',
    }
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
