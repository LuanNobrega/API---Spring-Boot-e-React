function Tabela({vetor, selecionar}){
    //"vetor" para fazer com que 
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Selecionar</th>
                </tr>
            </thead>
            
            <tbody>
                {
                    //Criar um loop para mostrar as informações cadastradas
                    vetor.map((obj, indice) => (
                        //key é uma boa prática do react, especifica a caracteristica da linha, caracteristica única
                        <tr key={indice}>
                            <td>{indice +1}</td>
                            <td>{obj.nome}</td>
                            <td>{obj.marca}</td>
                            <td><button onClick={() => {selecionar(indice)}} className="btn btn-success">Selecionar</button></td>
                        </tr>  
                    ))
                }
            </tbody>
        </table>
    )
}
export default Tabela;