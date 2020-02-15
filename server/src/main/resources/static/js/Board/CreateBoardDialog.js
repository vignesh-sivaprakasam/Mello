(function (ctx) {
        const editDialogTemplate = "boardEditDialog";

        function openBoardCreateDialog() {
                const width   = 400;
                const height  = 450;
                const x       = (window.innerWidth / 2) - (width / 2);
                const y       = (window.innerHeight / 2) - (height / 2);
                let dialog    = new Classes.Dialog.NormalDialog(x, y, width, height, true);
                let container = createDialog(dialog);
                dialog.append(container);
        }

        function createDialog(dialog) {
                let fragment        = App.Utility.getTemplate(editDialogTemplate);
                const name          = fragment.querySelector(".board_name_value");
                // name.textContent    = board.name;
                
                const color         = fragment.querySelector(".board_color_value");

                let colorComp       = new Classes.ColorComponent();
                // colorComp.setActive(board.color);
                color.appendChild(colorComp.getDom());

                const save = fragment.querySelector(".save");
                save.textContent = "Create";
                save.addEventListener("click", ()=>{
                        console.log("Request : :");
                        let boardValue    = {};
                        boardValue.name   = name.textContent;
                        boardValue.color  = colorComp.getActive();
                        App.Board.createBoard(boardValue).then(response => {
                                dialog.remove();
                        });
                        // App.Board.updateBoard(board.id, boardValue);
                });

                const cancel = fragment.querySelector(".cancel");
                cancel.addEventListener("click", () => {
                        dialog.remove();
                });
                return fragment.querySelector(".board_edit_container");
        }

        ctx.openBoardCreateDialog = openBoardCreateDialog;
})(this);