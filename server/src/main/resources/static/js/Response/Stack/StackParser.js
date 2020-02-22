(function (ctx) {
        const Parse = App.Parse || (App.Parse = {});

        const Stack = {
                load : (boardID, stacks) => {
                        stacks.forEach((stack)=>{
                                Stack.create(boardID, stack.id, stack);
                        });
                },
                create : (boardID, stackID, stack) => {
                        const boardModel = App.Data.getBoard(boardID);
                        const stackModel = new Classes.Stack.Model(stack.id, stack.name, stack.color);
                        boardModel.addStack(stack.id, stack);

                        const boardView = App.View.getBoard(boardID);
                        const stackView = new Classes.Stack.View(stackModel);
                        stackView.setName(stackModel.getName());
                        stackView.setColor(stackModel.getColor());
                        
                        boardView.addStack(stack.id, stackView);
                        
                },
                update : (boardID, stackID, stack)=>{

                }
        }

        Parse.Stack = Stack;
})(this);