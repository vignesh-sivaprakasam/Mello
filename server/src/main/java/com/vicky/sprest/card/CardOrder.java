package com.vicky.sprest.card;

import java.util.LinkedList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import org.json.JSONArray;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mysql.cj.xdevapi.JsonArray;
import com.vicky.sprest.stack.Stack;

@Entity
public class CardOrder {
	
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	@JsonIgnore
	@OneToOne
	private Stack stack;
	private String cardOrder;
	
	public CardOrder() {
		super();
	}
	
	public CardOrder(Stack stack, String cardOrder) {
		super();
		this.stack = stack;
		this.cardOrder = cardOrder;
	}
	
	public Stack getStack() {
		return stack;
	}
	public void setStack(Stack stack) {
		this.stack = stack;
	}
	public String getCardOrder() {
		return cardOrder;
	}
	public void setCardOrder(String cardOrder) {
		this.cardOrder = cardOrder;
	}
	
	public void addCard(long cardID) {
		JSONArray jsonArr = new JSONArray(this.cardOrder);
		jsonArr.put(cardID);
		this.cardOrder = jsonArr.toString();
	}
	
	public void deleteCard(long cardID) {
		JSONArray jsonArr = new JSONArray(this.cardOrder);
		int index = 0;
		for(int i = 0 ; i < jsonArr.length(); i++) {
			if(jsonArr.getLong(i) == cardID) {
				index = i;
				break;
			}
		}
		jsonArr.remove(index);
		this.cardOrder = jsonArr.toString();
	}
	
	
	public static void main(String[] args) {
		
		List<Long> arr = new LinkedList();
		arr.add(1l);
		arr.add(2l);
		System.out.println(" "+arr.toString());
	}
	
}
