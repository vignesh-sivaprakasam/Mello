(function (ctx) {
        var Classes   = ctx.Classes || (ctx.Classes = {});
        var Board     = Classes.Board || (Classes.Board = {});

        const templateName = "boardViewTemplate";
        function createView() {
                let fragment    = App.Utility.getTemplate(templateName);
                let container   = fragment.querySelector(".boardView");
                return container;
        }

        class BoardView {
                constructor(){
                        this.dom            = createView();
                        this.stackHolder    = this.dom.querySelector(".stackHolder");
                        this.addStack       = this.dom.querySelector(".addStack");
                }

                getDom(){
                        return this.dom;
                }
        }

        Board.View = BoardView;
})(this);