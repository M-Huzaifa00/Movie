import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query';
import theme from './theme.ts'
import App from './App.tsx'
import './index.css'

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient} >
        <App />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
