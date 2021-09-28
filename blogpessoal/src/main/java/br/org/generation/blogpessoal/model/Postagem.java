package br.org.generation.blogpessoal.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity //gera tabela
@Table(name = "tb_postagens") //definir nome da tabela
public class Postagem {

	@Id //chave primaria
	@GeneratedValue(strategy = GenerationType.IDENTITY) //auto_incremento
	private long id;
	
	@NotNull(message = "O atributo é obrigatorio!")
	@Size(min = 5, max = 100, message ="O atibuto deve ter no minimo 5 caracteres e no maximo 100 caracteres")
	private String titulo;
	
	@NotNull(message = "O atributo é obrigatorio!")
	@Size(min = 5, max = 255, message ="O atibuto deve ter no minimo 5 caracteres e no maximo 255 caracteres")
	private String texto;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date data = new java.sql.Date(System.currentTimeMillis());
	
	@ManyToOne		//dia 28/09
	@JsonIgnoreProperties("postagem")	
	private Tema tema;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getTexto() {
		return texto;
	}
	public void setTexto(String texto) {
		this.texto = texto;
	}
	public Date getData() {
		return data;
	}
	public void setData(Date data) {
		this.data = data;
	}
	public Tema getTema() {      //dia 28/09
		return tema;
	}
	public void setTema(Tema tema) {
		this.tema = tema;
	}
	
	
}
