//Responsável por disponibilizar ações de banco de dados, como cadastro, seleção, alterações, entre outros

package br.com.api.produtos.repositorio;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.api.produtos.modelo.ProdutoModelo;

@Repository //Para indicar que será um repositório e tambem pode urilizar a injeção de dependencias
public interface ProdutoRepositorio extends CrudRepository<ProdutoModelo, Long>{
    
}
