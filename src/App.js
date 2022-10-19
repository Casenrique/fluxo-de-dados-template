import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import  FormularioCadastro  from "./components/FormularioCadastro/FormularioCadastro";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [urlFoto, setUrlFoto] = useState("")
  const [descricao, setDescricao] = useState("")
  const [titulo, setTitulo] = useState("")
  
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header />
          <FormularioCadastro 
          urlFoto={urlFoto} 
          setUrlFoto={setUrlFoto}
          titulo={titulo} 
          descricao={descricao} 
          setDescricao={setDescricao}
          setTitulo={setTitulo} />
        </aside>
        <TelaDaPostagem
        titulo={titulo} 
        urlFoto={urlFoto} 
        descricao={descricao} 
        />
      
      </Container>
    </>
  );
}

export default App;
