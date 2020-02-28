package com.vicky.sprest.card;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CardService {
	
	@Autowired
	private CardRepository cardRepo;
	
	@Autowired
	private CardOrderRepository cardOrderRepo;
	
	public List<Card> getAllCards(long stackID){
		return cardRepo.findByStackId(stackID);
	}
	
	public Card createCard(Card card) {
		Card cardRes = cardRepo.save(card);
		CardOrder cardOrder = cardOrderRepo.findById(card.getStack().getId()).get();
		cardOrder.addCard(cardRes.getId());
		cardOrderRepo.save(cardOrder);
		return cardRes;
	}

	public Card getCard(long cardID) {
		return cardRepo.findById(cardID).get();
	}

	public void deleteCard(long stackID, long cardID) {
		CardOrder cardOrder = cardOrderRepo.findByStackId(stackID);
		cardOrder.deleteCard(cardID);
		
		cardOrderRepo.save(cardOrder);
		cardRepo.deleteById(cardID);
	}
	
	public Card updateCard(Card card) {
		return cardRepo.save(card);
	}
}
