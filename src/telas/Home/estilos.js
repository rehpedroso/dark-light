/*Para poder utilizar o styled componentes, é necessario instalar esse componenete, https://styled-components.com/ npm install --save styled-components*/

import styled from "styled-components/native"; //Utiliza os estilos do CSS.

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.background};
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 30px;
    color: ${props => props.theme.color};
`;

export const Description = styled.Text`
    margin-top: 12px;
    font-style: italic;
    color: #FFF;
    background-color: #C71585;
    padding: 8px 20px;
`;