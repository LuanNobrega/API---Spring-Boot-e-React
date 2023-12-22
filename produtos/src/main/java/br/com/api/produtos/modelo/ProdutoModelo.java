package br.com.api.produtos.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name= "produtos")
@Getter //Com isso o LOMBOK vai gerar por debaixo dos panos os get dos atributos da classe;
@Setter //Com isso o LOMBOK vai gerar por debaixo dos panos os set dos atributos da classe;
public class ProdutoModelo {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codigo;
    private String nome;
    private String marca;

}
