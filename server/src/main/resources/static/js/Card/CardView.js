(function (ctx) {
        var Classes = ctx.Classes || (ctx.Classes   = {});
        var Card    = Classes.Card || (Classes.Card = {});

        const templateName   = "cardTemplate";
        const cardDDtemplate = "cardMenuDropDown";

        function createCard() {
                var temp            = document.getElementById(templateName);
                var content         = temp.content;
                var cloneFragment   = content.cloneNode(true);
                return cloneFragment.querySelector(".card");
        }

        function createCardDialog(stackID) {
                const dom   = createCard();
                const title           = dom.querySelector(".card_title");
                title.contentEditable   = true;
                setTimeout(()=>{title.focus()}, 100);
                title.addEventListener("keydown", (ev) => {
                        if(ev.keyCode == 13){
                                const boardID = App.State.getActiveBoardID();

                                App.Card.createCard(boardID, stackID, {
                                        title : title.textContent
                                }).then((card)=>{
                                        console.log("card create : :",card);
                                        App.Parse.Card.create(boardID, stackID, card);
                                        dom.remove();
                                });
                        }

                        if(ev.keyCode == 27){
                                dom.remove();
                        }
                });
                return dom;
        }

        function createDropDown(stackID, cardModel, deleteCallback) {
                const dom = App.Utility.getTemplate(cardDDtemplate);
                dom.querySelector(".delete").addEventListener("click", ()=>{
                        const boardID = App.State.getActiveBoardID();
                        App.Card.deleteCard(boardID, stackID, cardModel.getID()).then((resp)=>{
                                App.Parse.Card.delete(boardID, stackID, cardModel.getID());
                                deleteCallback();
                        });
                });
                return dom;
        }

        function addListener(cardView, stackID, cardModel) {
                cardView.getDom().addEventListener("dblclick", () => {
                        const expandedCard = new Classes.Card.ExpandedCard(stackID, cardModel);
                        expandedCard.open();
                });
                cardView.menu.addEventListener("click", () => {
                        // let di   = new Classes.Dialog.NormalDialog(left, top, width, height);
                        const rect = cardView.menu.getBoundingClientRect();
                        const dialog = new Classes.Dialog.NormalDialog(rect.x, rect.y + rect.height, 150, 100);
                        const dropdown = createDropDown(stackID, cardModel, () => {
                                dialog.remove();''
                        });
                        dialog.append(dropdown);
                });
        }

        class CardView {
                constructor(stackID, cardModel){
                        this.dom                     = createCard();
                        this.menu                    = this.dom.querySelector(".card_menu");
                        this.title                   = this.dom.querySelector(".card_title");
                        this.title.textContent       = cardModel.getTitle();

                        this.description             = this.dom.querySelector(".card_description");
                        this.description.textContent = cardModel.getDescription();
                        addListener(this, stackID, cardModel);
                }

                getDom(){
                        return this.dom;
                }
                
                setTitle(title){
                        this.title.textContent = title;
                }
                setDescription(description){
                        this.description.textContent = description;
                }

                remove(){
                        this.dom.remove();
                }
        }

        Card.View = CardView;
        Card.View.createCard = createCardDialog;
})(this);