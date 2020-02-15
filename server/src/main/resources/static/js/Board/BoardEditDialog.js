(function (ctx) {
        const editDialogTemplate = "boardEditDialog";
        function openBoardEditDialog(board) {
                console.log(board);
                const width   = 400;
                const height  = 450;
                const x       = (window.innerWidth / 2) - (width / 2);
                const y       = (window.innerHeight / 2) - (height / 2);
                let dialog    = new Classes.Dialog.NormalDialog(x, y, width, height, true);
                let container = createDialog(board);
                dialog.append(container);
        }

        function createDialog(board) {
                let fragment        = App.Utility.getTemplate(editDialogTemplate);
                const name          = fragment.querySelector(".board_name_value");
                name.textContent    = board.name;
                const desc          = fragment.querySelector(".board_description_value");
                console.log("");
                desc.textContent    = board.description;
                return fragment.querySelector(".board_edit_container");
        }

        ctx.openBoardEditDialog = openBoardEditDialog;
})(this);