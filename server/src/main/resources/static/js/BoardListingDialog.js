(function (ctx) {
        const container = "boardListing";
        const item      = "boardItem";
        function openBoardListing() {
                console.log("Open Board Listing ");
                let width   = 400;
                let height  = 450;
                let x       = (window.innerWidth / 2) - (width / 2);
                let y       = (window.innerHeight / 2) - (height / 2);
                var dialog  = new Classes.Dialog.NormalDialog(x, y, width, height, true);

                App.Board.getAllBoards().then((list)=>{
                        let fragment = App.Utility.getTemplate(container);
                        let ul = fragment.querySelector(".board_list");
                        list.forEach( board => {
                                let li            = App.Utility.getTemplate(item).querySelector(".board_item");
                                li.textContent    = board.name;
                                ul.appendChild(li);
                        });
                        let listContainer = fragment.querySelector(".board_list_container");
                        dialog.append(listContainer);
                        dialog.open();
                });
                // dialog.append(dom);
        }

        ctx.openBoardListing = openBoardListing;
})(this);