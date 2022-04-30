/*Para poder utilizar o styled componentes, é necessario instalar esse componenete, https://styled-components.com/ npm install --save styled-components*/

import React from 'react';
import { useColorScheme } from 'react-native'; //Vai detectar em qual tema o dispositivo esta sendo utilizado.
import Home from './src/telas/Home';
import tema from './src/telas/Tema';
import {ThemeProvider} from 'styled-components';

export default function App() {
  //O 'deviceTheme' pode devolver: dark, light, null, undenifed;
  const deviceTheme = useColorScheme();
  const theme = tema[deviceTheme] || theme.dark

  return(
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );
}
