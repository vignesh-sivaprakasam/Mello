package com.vicky.sprest.card;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CardService {
	
	@Autowired
	private CardRepository cardRepo;
	
	public List<Card> getAllCards(long stackID){
		return cardRepo.findByStackId(stackID);
	}
	
	public Card createCard(Card card) {
		return cardRepo.save(card);
	}

	public Card getCard(long cardID) {
		return cardRepo.findById(cardID).get();
	}

	public void deleteCard(long cardID) {
		cardRepo.deleteById(cardID);
	}
	
	public Card updateCard(Card card) {
		return cardRepo.save(card);
	}
}
