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
                        this.addStackDom    = this.dom.querySelector(".addStack");
                        this.stacks         = new Map();
                }

                getDom(){
                        return this.dom;
                }

                getStackHolder(){
                        return this.stackHolder;
                }

                addStack(stackID, stackView){
                        this.stacks.set(stackID, stackView);
                        this.stackHolder.appendChild(stackView.getDom());
                }
                deleteStack(stackID){
                        let stackView = this.stacks.get(stackID);
                        stackView.remove();
                        this.stacks.delete(id);
                }
        }

        Board.View = BoardView;
})(this);