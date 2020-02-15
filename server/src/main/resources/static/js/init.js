
function loadBoard(id) {
        App.Board.getBoard(id).then(boardDetails => {
                console.log("loadBoard : ",boardDetails);
                boardName.textContent = boardDetails.name;
                parseBoardResponse(boardDetails);
        });
}
openBoardListing(loadBoard);

const boardName = document.querySelector(".boardName");

App.Data = {};
var Data = App.Data;

function parseBoardResponse(boardDetails) {
        Data[boardDetails.id] = new Classes.Board.Model(boardDetails.id, boardDetails.name, boardDetails.color);
}