import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;

        &::-webkit-scrollbar {
  width: 10px; /* Largura da barra de rolagem */
  background-color: #F0F0F0; /* Cor do fundo da barra */
}

&::-webkit-scrollbar-thumb {
  background-color: #808080; /* Cor do polegar da barra */
  border-radius: 5px; /* Arredondamento do polegar */
}

&::-webkit-scrollbar-track {
  background-color: #E0E0E0; /* Cor da trilha da barra */
}
    }
`