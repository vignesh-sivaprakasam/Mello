(function (ctx) {
        let App = ctx.App || (ctx.App = {});
        let Utility = App.Utility || (App.Utility = {});

        Utility.getTemplate = (id) => {
                let fragment = document.getElementById(id);
                return fragment.content.cloneNode(true);
        }
        
})(this);