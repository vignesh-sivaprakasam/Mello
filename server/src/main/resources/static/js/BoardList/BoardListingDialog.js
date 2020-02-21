(function (ctx) {
        const container = "boardListing";
        function openBoardListing() {
                console.log("Open Board Listing ");
                let width   = 400;
                let height  = 450;
                let x       = (window.innerWidth / 2) - (width / 2);
                let y       = (window.innerHeight / 2) - (height / 2);
                var dialog  = new Classes.Dialog.NormalDialog(x, y, width, height, true);

                let clickCallback = (id)=>{
                        dialog.remove();
                        loadBoard(id);
                }

                let editCallback = (id) => {
                        App.Board.getBoard(id).then((board)=>{
                                let blView = App.View.List.getBoard(id);
                                blView.setName(board.name);
                                blView.setColor(board.color);
                        });
                }
                App.Board.getAllBoards().then((list)=>{
                        App.Response.BoardList.load(list);
                        let listDom         = createListDom(clickCallback, editCallback);
                        dialog.append(listDom);
                        dialog.open();
                });
        }

        function createListDom(clickCallback, editCallback) {
                let fragment        = App.Utility.getTemplate(container);
                let listContainer   = fragment.querySelector(".board_list_container");
                let divC            = fragment.querySelector(".board_list");

                let order = App.Data.List.order;
                order.forEach((id)=>{
                        let blView = App.View.List.getBoard(id);
                        blView.bindClickCallback(clickCallback);
                        blView.bindEditCallback(editCallback);
                        divC.appendChild(blView.getDom());
                });

                const createBoard = fragment.querySelector(".create_board");
                createBoard.addEventListener("click", ()=>{
                        openBoardCreateDialog();
                });
                return listContainer;
        }

        ctx.openBoardListing = openBoardListing;
})(this);