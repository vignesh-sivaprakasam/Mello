(function (ctx) {
        const domain    = window.location.origin;
        const boardsUrl = "/boards";
        const stacksUrl = "/stacks";
        const cardsUrl  = "/cards";

        function buildCardUrl(boardID, stackID, cardID) {
                return domain + boardsUrl + "/" + boardID + stacksUrl + "/" + stackID + cardsUrl + "/" + cardID;
        }

        function buildCardsUrl(boardID, stackID) {
                return domain + boardsUrl + "/" + boardID + stacksUrl + "/" + stackID + cardsUrl;
        }

        const Card = {
                getAllCards : (boardID, stackID) => {
                        return new Promise((resolve, reject)=>{
                                axios.get(buildCardsUrl(boardID, stackID)).then((response)=>{
                                        console.log("GetAll Cards : ",response);
                                });
                        });
                },
                getCard : (boardID, stackID, cardID) => {
                        return new Promise((resolve, reject) => {
                                axios.get(buildCardUrl(boardID, stackID, cardID)).then((response)=>{
                                        console.log("Get Card Response :", response);
                                });
                        });
                },
                createCard : (boardID, stackID, card)=> {
                        return new Promise((resolve, reject) => {
                                axios.post(buildCardsUrl(boardID, stackID), card).then((response) => {
                                        console.log("Create Card :", response);
                                });
                        });
                },
                updateCard : (boardID, stackID, cardID, card)=>{
                        return new Promise((resolve, reject) => {
                                axios.put(buildCardUrl(boardID, stackID, cardID), card).then((response) => {
                                        console.log("Update Card Response :", response);
                                });
                        });
                },
                deleteCard(boardID, stackID, cardID){
                        return new Promise((resolve, reject)=>{
                                axios.delete(buildCardUrl(boardID, stackID, cardID)).then(response => {
                                        console.log("Delete Card response : ", response);
                                });
                        });
                }
        }

        App.Card = Card;
})(this);