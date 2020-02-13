package com.vicky.sprest.board;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardService {

	@Autowired
	private BoardRepository boardRepo;
	
	public List<Board> getAllBoards(){
		List<Board> list = new ArrayList<>();
		boardRepo.findAll().forEach(board -> {
			list.add(board);
		});
		return list;
	}
	
	public Board getBoard(long id) {
		return boardRepo.findById(id).get();
	}
	
	public void createBoard(Board board) {
		boardRepo.save(board);
	}
	
	public void updateBoard(long id, Board board) {
		board.setId(id);
		boardRepo.save(board);
	}
	
	public void deleteBoard(long id) {
		boardRepo.deleteById(id);
	}
	
	public void updateName(long id, Board board) {
		boardRepo.updateName(board.getName());
	}
}
