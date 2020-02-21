(function (ctx) {
        const App       = ctx.App || (ctx.App = {});
        const Response  = App.Response || (App.Response = {});

        const BoardList = {
                load : (list) =>{
                        App.Parse.BoardList.load(list);
                }
        }
        
        Response.BoardList = BoardList;
})(this);