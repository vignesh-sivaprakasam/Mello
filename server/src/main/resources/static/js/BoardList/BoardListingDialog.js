(function (ctx) {
        const container = "boardListing";
        function openBoardListing() {
                console.log("Open Board Listing ");
                let width   = 400;
                let height  = 450;
                let x       = (window.innerWidth / 2) - (width / 2);
                let y       = (window.innerHeight / 2) - (height / 2);
                var dialog  = new Classes.Dialog.NormalDialog(x, y, width, height, true);

                App.Board.getAllBoards().then((list)=>{
                        let listDom         = createListDom(list);
                        dialog.append(listDom);
                        dialog.open();
                });
        }

        function createListDom(list) {
                let fragment        = App.Utility.getTemplate(container);
                let listContainer   = fragment.querySelector(".board_list_container");
                let divC            = fragment.querySelector(".board_list");
                list.forEach( board => {
                        let div = createItem(board);
                        divC.appendChild(div);
                });
                const createBoard = fragment.querySelector(".create_board");
                createBoard.addEventListener("click", ()=>{
                        openBoardCreateDialog();
                });
                return listContainer;
        }

        function createItem(board) {
                let boardItem = new Classes.BoardList.BoardItem(board);
                return boardItem.getDom();
        }

        ctx.openBoardListing = openBoardListing;
})(this);