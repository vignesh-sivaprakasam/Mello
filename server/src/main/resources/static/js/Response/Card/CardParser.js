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

                        const cardView  = new Classes.Card.View(cardModel);
                        stackView.addCard(card.id, cardView);
                }
        }

        Parse.Card = Card;
})(this);