
function loadBoard(id) {
        App.Board.getBoard(id).then(boardDetails => {
                updateBoardState(boardDetails.id);
                boardName.textContent = boardDetails.name;
                parseBoardResponse(boardDetails);
        });
}
openBoardListing(loadBoard);

const boardName = document.querySelector(".boardName");

App.View = {};
var View = App.View;
App.Data = {};
var Data = App.Data;
App.Data.getBoard = (id) =>{
        return App.Data[id];
}

App.State = new Classes.State.State();
const boardContainer = document.querySelector(".boardContainer");
function parseBoardResponse(boardDetails) {
        Data[boardDetails.id] = new Classes.Board.Model(boardDetails.id, boardDetails.name, boardDetails.color);
        View[boardDetails.id] = new Classes.Board.View();
        let boardView         = View[boardDetails.id];
        let boardData         = Data[boardDetails.id];
        boardContainer.appendChild(boardView.getDom());
}