
function loadBoard(id) {
        App.Board.getBoard(id).then(boardDetails => {
                updateBoardState(boardDetails.id);
                boardName.textContent = boardDetails.name;
                App.Parse.Board.load(boardDetails.id, boardDetails);
                // parseBoardResponse(boardDetails);
        });
}
openBoardListing(loadBoard);

const boardName = document.querySelector(".boardName"); 
App.State = new Classes.State.State();