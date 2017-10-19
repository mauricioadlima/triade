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

	private String dataNascimento;

	private String genero;

	private String naturalidade;

	private String nacionalidade;

	private String estadoCivil;

	private String escolaridade;

	private String nomePai;

	private String nomeMae;

	private String logradouro;

	private String numero;

	private String cep;

	private String estado;

	private String bairro;

	private String cidade;

	private String telefoneResidencial;

	private String telefoneComercial;

	private String email;

	private String trabalha;

	private String nomeEmpresa;

	private String tempoServico;

	private String motivoCnh;

	private String temProblemaSaude;

	private String senteFadiga;

	private String trabalhaNoturno;

	private String bebidaAlcoolica;

	public String getNome() {
		return nome;
	}

	public void setNome(final String nome) {
		this.nome = nome;
	}
}
