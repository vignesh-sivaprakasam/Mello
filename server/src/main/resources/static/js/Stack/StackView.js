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

        function createEditDialog() {
                const template = document.getElementById("stackEditDialog");
                const fragment = template.content.cloneNode(true);
                return fragment.querySelector(".stack_edit_container");
        }

        // function openEditDialog(editStackDom, stackView, stackModel) {
        //         let dom       = createEditDialog();

        //         const rect    = editStackDom.getBoundingClientRect();
        //         const dialog  = new Classes.Dialog.NormalDialog(rect.x, rect.y, 400, 500);
        //         dialog.append(dom);

        //         const name          = dom.querySelector(".stack_name_value");
        //         name.textContent    = stackModel.getName();

        //         const color         = dom.querySelector(".stack_color_value");
        //         let colorComp       = new Classes.ColorComponent();
        //         colorComp.setActive(stackModel.getColor());
        //         color.appendChild(colorComp.getDom());

        //         const save = dom.querySelector(".save");
        //         save.addEventListener("click", ()=>{
        //                 let boardID = App.State.getActiveBoardID();
        //                 let stackValue    = {};
        //                 stackValue.name   = name.textContent;
        //                 stackValue.color  = colorComp.getActive();
        //                 App.Stack.updateStack(boardID, stackModel.getID(), stackValue).then((resp)=>{
        //                         stackView.setColor(stackValue.color);
        //                 });
        //                 dialog.remove();
        //         });

        //         const cancel = dom.querySelector(".cancel");
        //         cancel.addEventListener("click", ()=>{
        //                 dialog.remove();
        //         });
        // }

        function openDialog(x, y, width, height, colorActiveCallback, onSaveCallback) {
                let dom         = createEditDialog();
                const dialog    = new Classes.Dialog.NormalDialog(x, y, width, height);
                dialog.append(dom);
                const name          = dom.querySelector(".stack_name_value");

                const color         = dom.querySelector(".stack_color_value");
                let colorComp       = new Classes.ColorComponent();
                colorActiveCallback(colorComp)
                color.appendChild(colorComp.getDom());

                const save = dom.querySelector(".save");
                save.addEventListener("click", ()=>{
                        let stackValue    = {};
                        stackValue.name   = name.textContent;
                        stackValue.color  = colorComp.getActive();
                        onSaveCallback(stackValue);
                        dialog.remove();
                });

                const cancel = dom.querySelector(".cancel");
                cancel.addEventListener("click", ()=>{
                        dialog.remove();
                });
                return dom;
        }

        function createStackEditDialog(editStack, stackView, stackModel) {
                const rect = editStack.getBoundingClientRect();
                const colorCompCallback = (colorComp)=>{
                        colorComp.setActive(stackModel.getColor());
                }

                let dom = openDialog(rect.x, rect.y, 400, 500, colorCompCallback,  (stackValue)=>{
                        let boardID = App.State.getActiveBoardID();
                        App.Stack.updateStack(boardID, stackModel.getID(), stackValue).then((resp)=>{
                                stackView.setColor(stackValue.color);
                        });
                });

                dom.querySelector(".stack_name_value").textContent = stackModel.getName();
        }

        function createStackCreateDialog(x, y, width, height) {
                
                const colorCompCallback = (colorComp)=>{
                }

                let dom = openDialog(x, y, width, height, colorCompCallback,  (stackValue)=>{
                        let boardID = App.State.getActiveBoardID();
                        App.Stack.createStack(boardID, stackValue).then((resp)=>{
                                // stackView.setColor(stackValue.color);
                        });
                });
                dom.querySelector(".edit_header > .text_center").textContent = "Stack Create Dialog";
                dom.querySelector(".save").textContent = "Create";
        }

        ctx.createStackCreateDialog = createStackCreateDialog;

        function createDropDown(left, top, stackView, stackModel) {
                var dom   = createStackMenu();
                let di    = new Classes.Dialog.NormalDialog(left, top, 150, 100);
                di.append(dom);
                const deleteStack = dom.querySelector(".delete");
                deleteStack.addEventListener("click", () => {
                        let boardID = App.State.getActiveBoardID();
                        App.Stack.deleteStack(boardID, stackModel.getID());
                        di.remove();
                });

                const editStack = dom.querySelector(".edit");
                editStack.addEventListener("click", (ev) => {
                        console.log("edit stack click");
                        createStackEditDialog(editStack, stackView, stackModel);
                        di.remove();
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
                        createDropDown(rect.x, rect.y + rect.height, stackView, stackModel);
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