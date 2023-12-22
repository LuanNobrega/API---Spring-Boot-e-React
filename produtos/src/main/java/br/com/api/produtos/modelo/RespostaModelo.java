package br.com.api.produtos.modelo;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Component //Com ela podemos utilizar a injeção de dependencias, deixar por conta do spring a criação de objetos daquela classe.
@Getter
@Setter
public class RespostaModelo {
    
    private String mensagem;
    
}
