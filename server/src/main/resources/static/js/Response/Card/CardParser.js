(function (ctx) {
        const Parse = App.Parse || (App.Parse = {});

        const Card = {
                load : (boardID, stackID, cards) => {
                        cards.forEach( (card) => {
                                Card.create(boardID, stackID, card);
                        });
                },
                create : (boardID, stackID, card) => {
                        const boardModel = App.Data.getBoard(boardID);
                        const stackModel = boardModel.getStack(stackID);

                        const cardModel  = new Classes.Card.Model(card.id, card.title, card.description);
                        stackModel.addCard(card.id, cardModel);


                        const boardView = App.View.getBoard(boardID);
                        const stackView = boardView.getStack(stackID);

                        const cardView  = new Classes.Card.View(stackID, cardModel);
                        stackView.addCard(card.id, cardView);
                },
                update : (boardID, stackID, cardID, card) => {
                        const boardModel = App.Data.getBoard(boardID);
                        const stackModel = boardModel.getStack(stackID);
                        const cardModel  = stackModel.getCard(cardID);

                        cardModel.setTitle(card.title);
                        cardModel.setDescription(card.description);

                        const boardView = App.View.getBoard(boardID);
                        const stackView = boardView.getStack(stackID);
                        const cardView  = stackView.getCard(cardID);

                        cardView.setTitle(card.title);
                        cardView.setDescription(card.description);
                },
                delete : function (boardID, stackID, cardID) {
                        const boardModel = App.Data.getBoard(boardID);
                        const stackModel = boardModel.getStack(stackID);
                        stackModel.deleteCard(cardID);

                        const boardView = App.View.getBoard(boardID);
                        const stackView = boardView.getStack(stackID);
                        stackView.deleteCard(cardID);
                }
        }

        Parse.Card = Card;
})(this);