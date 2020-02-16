(function (ctx) {
        const container = "boardListing";
        function openBoardListing() {
                console.log("Open Board Listing ");
                let width   = 400;
                let height  = 450;
                let x       = (window.innerWidth / 2) - (width / 2);
                let y       = (window.innerHeight / 2) - (height / 2);
                var dialog  = new Classes.Dialog.NormalDialog(x, y, width, height, true);

                let callback = (id)=>{
                        dialog.remove();
                        loadBoard(id);
                }
                App.Board.getAllBoards().then((list)=>{
                        let listDom         = createListDom(list, callback);
                        dialog.append(listDom);
                        dialog.open();
                });
        }

        function createListDom(list, callback) {
                let fragment        = App.Utility.getTemplate(container);
                let listContainer   = fragment.querySelector(".board_list_container");
                let divC            = fragment.querySelector(".board_list");
                list.forEach( board => {
                        let div = createItem(board, callback);
                        divC.appendChild(div);
                });
                const createBoard = fragment.querySelector(".create_board");
                createBoard.addEventListener("click", ()=>{
                        openBoardCreateDialog();
                });
                return listContainer;
        }

        function createItem(board, callback) {
                let boardItem = new Classes.BoardList.BoardItem(board);
                boardItem.bindClickCallback(callback);
                return boardItem.getDom();
        }

        ctx.openBoardListing = openBoardListing;
})(this);