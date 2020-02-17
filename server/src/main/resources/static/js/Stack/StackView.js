(function (ctx) {
        var Classes   = ctx.Classes || (ctx.Classes = {});
        var Stack     = Classes.Stack || (Classes.Stack = {});

        const templateName = "stackViewTemplate";

        function createStack() {
                let fragment = App.Utility.getTemplate(templateName);
                return fragment.querySelector(".stack");
        }
        
        class StackView {
                constructor(){
                        this.dom            = createStack();
                        this.stackHeader    = this.dom.querySelector(".stack_header");
                        this.stackName      = this.dom.querySelector(".stack_name");
                        this.stackMenu      = this.dom.querySelector(".stack_menu");
                        this.addCardDom     = this.dom.querySelector(".createCard");
                }
                getDom(){
                        return this.dom;
                }

                setName(name){
                        this.stackName.textContent = name;
                }

                setColor(color){
                        this.stackHeader.style.backgroundColor = color;
                }

                remove(){
                        this.dom.remove();
                }
        }

        Stack.View = StackView;
})(this);