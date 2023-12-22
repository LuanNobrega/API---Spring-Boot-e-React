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

//Para testar coloca essa linha de baio dentro da div
//<p>{JSON.stringify(objProduto)}</p>

// Cadastrar produto
const cadastrar = () => {
  fetch('http://localhost:8080/cadastrar',{
    method:'post',
    body:JSON.stringify(objProduto),
    headers:{
      'Content-type':'application/json',
      'Accept':'application/json'
    }
  })
  .then(retorno => retorno.json())
  .then(retorno_convertido => {
    
    if(retorno_convertido.mensagem !== undefined){
      alert(retorno_convertido.mensagem);
    }else{
      setProdutos([...produtos, retorno_convertido]);
      alert('Produto cadastrado com sucesso!');
      limparFormulario();
    }
    
  })
}

// Alterar
const alterar = () => {
  fetch('http://localhost:8080/alterar',{
    method:'put',
    body:JSON.stringify(objProduto),
    headers:{
      'Content-type':'application/json',
      'Accept':'application/json'
    }
  })
  .then(retorno => retorno.json())
  .then(retorno_convertido => {
    
    if(retorno_convertido.mensagem !== undefined){
      alert(retorno_convertido.mensagem);
    }else{      
      alert('Produto alterado com sucesso!');
        //Copia do vetor de produtos
      let vetorTemp = [...produtos];

      //indice
      let indice = vetorTemp.findIndex((p) => {
        return p.codigo === objProduto.codigo;
      })

      //Alterar produto do vetorTempo
      vetorTemp[indice] = objProduto;

      //Atualizar o vetor de produtos
      setProdutos(vetorTemp);
      limparFormulario();
    }
    
  })
}

// Remover produto
const remover = () => {
  fetch('http://localhost:8080/remover/'+objProduto.codigo,{
    method:'delete',
    body:JSON.stringify(objProduto),
    headers:{
      'Content-type':'application/json',
      'Accept':'application/json'
    }
  })
  .then(retorno => retorno.json())
  .then(retorno_convertido => {
    
    alert(retorno_convertido.mensagem);
    
    //Copia do vetor de produtos
    let vetorTemp = [...produtos];

    //indice
    let indice = vetorTemp.findIndex((p) => {
      return p.codigo === objProduto.codigo;
    })

    //Remover produto do vetorTempo
    vetorTemp.splice(indice, 1);

    //Atualizar o vetor de produtos
    setProdutos(vetorTemp);

    //Limpar formulário
    limparFormulario();
  })
}

//Limpar formulário
const limparFormulario = () => {
  setObjProduto(produto);
  setBtnCadastrar(true);
}

// Selecionar produtos
const selecionarProduto = (indice) => {
  setObjProduto(produtos[indice]);
  setBtnCadastrar(false);
}


// Retorno
return (
  <div>
    <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objProduto} cancelar={limparFormulario} remover={remover} alterar={alterar}/> 
      <Tabela vetor={produtos} selecionar={selecionarProduto}/>
    </div>
  );
}

export default App;
