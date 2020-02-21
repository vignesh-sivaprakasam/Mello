(function (ctx) {
        
        const Parse = App.Parse || (App.Parse = {});
        App.Data              = App.Data || (App.Data = {});
        App.Data.List         = App.Data.List || (App.Data.List = {});
        App.Data.List.order   = [];
        App.Data.List.getBoard = (id) => {
                return App.Data.List[id];
        }

        App.View        = App.View || (App.View = {});
        App.View.List   = App.View.List || (App.View.List = {});
        App.View.List.getBoard = (id) => {
                return App.View.List[id];
        }

        const IBoardListParser = (function () {
                let parseLoad = (response) => {
                        let boards = response;
                        boards.forEach((board)=>{
                                create(board.id, board.name, board.color);
                        });
                } 
                let create = (id, name, color) => {
                        let boardListModel    = new Classes.BoardList.Model(id, name, color);
                        App.Data.List[id]     = boardListModel;
                        App.Data.List.order.push(id);

                        let boardListView     = new Classes.BoardList.View(boardListModel);
                        boardListView.setName(name);
                        App.View.List[id] = boardListView;
                }

                return {
                        load : parseLoad
                }
        })();
                
        

        Parse.BoardList = IBoardListParser;
})(this);