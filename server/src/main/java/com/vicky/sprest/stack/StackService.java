package com.vicky.sprest.stack;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StackService {

	@Autowired
	private StackRepository stackRepo;
	
	public List<Stack> getAllStacks(long boardID){
		return stackRepo.findByBoardId(boardID); // variable name in Stack class
	}
	
	public Stack createStack(Stack stack) {
		return stackRepo.save(stack);
	}
	
	public Stack getStack(long stackID) {
		return stackRepo.findById(stackID).get();
	}
	
	public void deleteStack(long stackID) {
		stackRepo.deleteById(stackID);
	}

	public Stack updateStack(Stack stack) {
		return stackRepo.save(stack);
	}
}
