package br.com.triade.entrevista;

import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "entrevistas")
public class Entrevista {

	@Id
	private String id;

	@NotNull
	private String nome;

	public String getNome() {
		return nome;
	}

	public void setNome(final String nome) {
		this.nome = nome;
	}
}
