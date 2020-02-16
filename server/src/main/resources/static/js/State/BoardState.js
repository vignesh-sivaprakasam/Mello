(function (ctx) {
        let Classes = ctx.Classes || (ctx.Classes = {});
        let State   = Classes.State || (Classes.State);

        class BoardState{
                constructor(){
                        this.map            = new Map();
                        this.activeStack    = null;
                }

                getActiveStackState(){
                        return this.map.get(this.activeStack);
                }

                getStackState(stackID){
                        return this.map.get(stackID);
                }
                setStackState(stackID, stackState){
                        this.map.set(stackID, stackState);
                }

                getActiveStack(){
                        return this.activeStack
                }
                setActiveStack(stackID){
                        this.activeStack = stackID;
                }
        }

        State.BoardState = BoardState;
})(this);