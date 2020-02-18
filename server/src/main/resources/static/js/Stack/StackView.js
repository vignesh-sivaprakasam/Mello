(function (ctx) {
        var Classes   = ctx.Classes || (ctx.Classes = {});
        var Stack     = Classes.Stack || (Classes.Stack = {});

        const templateName = "stackViewTemplate";

        function createStack() {
                let fragment = App.Utility.getTemplate(templateName);
                return fragment.querySelector(".stack");
        }

        function createStackMenu() {
                const template = document.getElementById("stackMenuDropDown");
                const fragment = template.content.cloneNode(true);
                return fragment.querySelector(".menu_dd");
        }

        function createDropDown(left, top, stackView) {
                var dom   = createStackMenu();
                let di    = new Classes.Dialog.NormalDialog(left, top, 150, 100);
                di.append(dom);
                const deleteStack = dom.querySelector(".delete");
                deleteStack.addEventListener("click", () => {
                        // expandedCard.deleteCardCallback(cardModel.getID());
                        di.remove();
                        console.log(stackView.stackID);
                });
        }

        function addListener(stackView, stackModel) {
                let name = stackView.stackName;
                name.addEventListener("keydown", (ev)=>{
                        if(ev.keyCode == 13){
                                ev.preventDefault();
                                let boardID = App.State.getActiveBoardID();
                                name.blur();
                                App.Stack.updateStack(boardID, stackModel.getID(), {
                                        name    : name.textContent,
                                        color   : stackModel.getColor()
                                });
                        }
                        if(ev.keyCode == 27){
                                name.textContent = prevName;
                                name.blur();
                        }
                });

                let menu = stackView.stackMenu;
                menu.addEventListener("click", ()=>{
                        const rect = stackView.stackMenu.getBoundingClientRect();
                        createDropDown(rect.x, rect.y + rect.height, stackView);
                });
        }
        
        class StackView {
                constructor(stackModel){
                        this.dom            = createStack();
                        this.stackHeader    = this.dom.querySelector(".stack_header");
                        this.stackName      = this.dom.querySelector(".stack_name");
                        this.stackMenu      = this.dom.querySelector(".stack_menu");
                        this.addCardDom     = this.dom.querySelector(".createCard");
                        addListener(this, stackModel);
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