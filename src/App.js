import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import {Footer, Header} from 'components';
import{HomePage} from 'pages';
import './index.css';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import { QueryClient, QueryClientProvider } from 'react-query';
import{ReactQueryDevtools} from 'react-query/devtools';

const queryClient=new QueryClient();
function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
      <Header/>
      <HomePage/>
      <Footer/>
      <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
