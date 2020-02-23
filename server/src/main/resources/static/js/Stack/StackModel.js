(function (ctx) {
        var Classes   = ctx.Classes || (ctx.Classes = {});
        var Stack     = Classes.Stack || (Classes.Stack = {});

        class StackModel {
                constructor(id, name, color){
                        this.id       = id;
                        this.name     = name;
                        this.color    = color;
                        this.cards    = new Map();
                }

                getID(){
                        return this.id;
                }

                getName(){
                        return this.name;
                }
                setName(name){
                        this.name = name;
                }

                getColor(){
                        return this.color;
                }
                setColor(color){
                        this.color = color;
                }

                addCard(cardID, card){
                        this.cards.set(cardID, card);
                }

                deleteCard(cardID){
                        this.cards.delete(cardID);
                }
                getCard(cardID){
                        return this.cards.get(cardID);
                }
        }

        Stack.Model = StackModel;
})(this);