import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {

//Objeto produto
const produto = {
  codigo : 0,
  nome : '',
  marca : ''
}

//UseState
/*Para deixar apenas o botão de cadastrar ativo quando for inicialmente para cadastrar*/ 
const[btnCadastrar, setBtnCadastrar] = useState(true);
const [produtos, setProdutos] = useState([]);
const [objProduto, setObjProduto] = useState(produto);

//useEffect (Executado quando o nosso componente é montado, quando o formulário e a tabela estiverem construidas, o "useEffect" entra em ação)
//Requisição com o back-end
useEffect(() => {
  fetch("http://localhost:8080/listar")
  .then(retorno => retorno.json())
  .then(retorno_convertido => setProdutos(retorno_convertido))
}, []);

//Obtendo os dados do formulário
const aoDigitar = (e) => {
  //Pegar o valor que está sendo digitado no campo nome e marca do formulário
  setObjProduto({...objProduto, [e.target.name]:e.target.value })
}

  return (
    <div>
      <p>{JSON.stringify(objProduto)}</p>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar}/>
      <Tabela vetor={produtos}/>
    </div>
  );
}

export default App;
