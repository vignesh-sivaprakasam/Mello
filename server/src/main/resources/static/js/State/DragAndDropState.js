(function (ctx) {
        let Classes = ctx.Classes || (ctx.Classes = {});
        let State   = Classes.State || (Classes.State);
        
        class DragAndDropState {
                constructor(){
                        this.dragStackID = null;
                        this.dragCardID  = null;
                        this.dropStackID = null;
                        this.dropCardID  = null;
                        this.position    = null;

                        this.direction   = null;
                }

                getDragCardID(){
                        return this.dragCardID;
                }
                setDragCardID(cardID){
                        this.dragCardID = cardID;
                }

                getDragStackID(){
                        return this.dragStackID;
                }
                setDragStackID(stackID){
                        this.dragStackID = stackID;
                }

                getDropCardID(){
                        return this.dropCardID;
                }
                setDropCardID(cardID){
                        this.cardID = cardID;
                }

                getDropStackID(){
                        return this.dropStackID;
                }
                setDropStackID(stackID){
                        this.dropStackID = stackID;
                }

                getPosition(){
                        return this.position;
                }

                setPosition(position){
                        this.position = position;
                }

                getDirection(){
                        return this.direction;
                }
                setDirection(direction){
                        this.direction = direction
                }

                reset(){
                        this.dragStackID = null;
                        this.dragCardID  = null;
                        this.dropStackID = null;
                        this.dropCardID  = null;
                        this.position    = null;

                        this.direction   = null;
                }

        }

        State.DragAndDropState = DragAndDropState;
})(this);