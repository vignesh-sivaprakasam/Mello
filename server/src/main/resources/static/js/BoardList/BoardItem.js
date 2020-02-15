(function (ctx) {

        var Classes 	= ctx.Classes || (ctx.Classes = {});
        var BoardList	= Classes.BoardList || (Classes.BoardList = {});
        const item      = "boardItem";

        function addListener(boardItem, board) {
                boardItem.div.addEventListener("click", (ev) => {
                        console.log("clicked");
                });
                
                boardItem.edit.addEventListener("click", (ev) => {
                        console.log("edit Click");
                        ev.stopPropagation();
                });
                
                boardItem.boardDelete.addEventListener("click", (ev) => {
                        console.log("delete Click");
                        ev.stopPropagation();
                });
        }
        
        class BoardItem {
                constructor(board){
                        this.div                = App.Utility.getTemplate(item).querySelector(".board_item");
                        this.name               = this.div.querySelector(".board_name");
                        this.edit               = this.div.querySelector(".board_edit");
                        this.boardDelete        = this.div.querySelector(".board_delete");
                        this.name.textContent   = board.name;
                        addListener(this, board);
                }

                getDom(){
                        return this.div;
                }
        }

        BoardList.BoardItem = BoardItem;
})(this);