package com.vicky.sprest.stack;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.vicky.sprest.board.Board;

@Entity
public class Stack {

	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	private String name;
	private String color;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JsonIgnore
	private Board board;
	

	public Stack() {
		super();
	}

	public Stack(long id, String name, String color) {
		super();
		this.id = id;
		this.name = name;
		this.color = color;
	}
	

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}

	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	
	public Board getBoard() {
		return board;
	}
	
	public void setBoard(Board board) {
		this.board = board;
	}
	
	
}
