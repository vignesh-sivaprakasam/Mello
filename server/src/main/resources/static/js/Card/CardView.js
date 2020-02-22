(function (ctx) {
        var Classes = ctx.Classes || (ctx.Classes   = {});
        var Card    = Classes.Card || (Classes.Card = {});

        const templateName = "cardTemplate";

        function createCard() {
                var temp            = document.getElementById(templateName);
                var content         = temp.content;
                var cloneFragment   = content.cloneNode(true);
                return cloneFragment.querySelector(".card");
        }

        class CardView {
                constructor(cardModel){
                        this.dom                     = createCard();
                        this.title                   = this.dom.querySelector(".card_title");
                        this.title.textContent       = cardModel.getTitle();

                        this.description             = this.dom.querySelector(".card_description");
                        this.description.textContent = cardModel.getDescription();
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
})(this);