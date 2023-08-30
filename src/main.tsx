import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query';
import theme from './theme.ts'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { Router } from './Router/Router.tsx';

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient} >
        <RouterProvider router={Router} />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
