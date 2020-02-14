(function (ctx) {
        const App       = ctx.App || (ctx.App = {});
        const domain    = window.location.origin;
        const boardsUrl = "/boards";
        const Board = {
                getAllBoards : () => {
                        return new Promise(function (resolve, reject) {
                                axios.get(domain+boardsUrl).then((response) => {
                                        console.log("response : ", response);
                                        resolve(response.data);
                                });
                        });
                }
        }
        App.Board = Board;
})(this);
// Board.