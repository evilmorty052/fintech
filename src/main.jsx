import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Approuter'
import Approuter from './Approuter';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import AuthContextProvider from './contexts/AuthContext'
import { ChakraProvider } from '@chakra-ui/react'
import 'antd/dist/antd.css';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      
    <QueryClientProvider client={queryClient}>  
    <AuthContextProvider   >
        <Router>
            <Approuter/>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
    </AuthContextProvider> 
    </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
