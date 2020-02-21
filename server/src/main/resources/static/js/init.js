
function loadBoard(id) {
        App.Board.getBoard(id).then(boardDetails => {
                updateBoardState(boardDetails.id);
                boardName.textContent = boardDetails.name;
                parseBoardResponse(boardDetails);
        });
}
openBoardListing(loadBoard);

const boardName = document.querySelector(".boardName");

App.View    = App.View || (App.View = {});
var View    = App.View;
App.View.getBoard = (id) => {
        return App.View[id];
}
App.Data = App.Data || (App.Data = {});
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

        const stacks = boardDetails.stacks;
        stacks.forEach((stack)=>{
                parseStackResponse(boardDetails.id, stack);
        });
}

function parseStackResponse(boardID, stack) {
        console.log("boardID : ", boardID, " stack :", stack);
        let boardModel = App.Data.getBoard(boardID);
        let stackModel = new Classes.Stack.Model(stack.id, stack.name, stack.color);
        boardModel.addStack(stack.id, stack);

        let boardView = App.View.getBoard(boardID);
        let stackView = new Classes.Stack.View(stackModel);
        stackView.setName(stackModel.getName());
        stackView.setColor(stackModel.getColor());
        
        boardView.addStack(stack.id, stackView);

}