<!DOCTYPE html>
        <head>
                <title>
                        Meister Task
                </title>
                <link rel="stylesheet" href="/css/Common.css">
                <link rel="stylesheet" href="/css/Kanban.css">
                <link rel="stylesheet" href="/css/Board.css">
                <link rel="stylesheet" href="/css/Stack.css">
                <link rel="stylesheet" href="/css/Menu.css">
                <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

                <script src="js/GetTemplate.js"></script>
                <script src="js/ColorComponent.js"></script>

                <%@ include file="./State.jspf" %>

                <script src="js/Request/BoardRequest.js"></script>
                <script src="js/Request/StackRequest.js"></script>
                <script src="js/Request/CardRequest.js"></script>

                
                <script src="js/Response/BoardList/BoardListParser.js"></script>
                <script src="js/Response/Board/BoardParser.js"></script>
                <script src="js/Response/Stack/StackParser.js"></script>

                <script src="js/Dialog/Container.js"></script>
                <script src="js/Dialog/NormalDialog.js"></script>

                <script src="js/Board/BoardEditDialog.js"></script>
                <script src="js/Board/CreateBoardDialog.js"></script>

                <script src="js/BoardList/BoardListModel.js"></script>
                <script src="js/BoardList/BoardListView.js"></script>

                <script src="js/Board/BoardModel.js"></script>
                <script src="js/Board/BoardView.js"></script>

                <script src="js/Stack/StackDialog.js"></script>
                <script src="js/Stack/StackView.js"></script>
                <script src="js/Stack/StackModel.js"></script>

        </head>
        <body class="flex flex_column">
                <%@ include file="../html/TopBar.html" %>
                <%@ include file="../html/MiddleBar.html" %>
                <%@ include file="../html/BoardList.html" %>
                <%@ include file="../html/Board/BoardEdit.html" %>
                <%@ include file="../html/Board/BoardView.html" %>
                <%@ include file="../html/Stack/StackEdit.html" %>
                <%@ include file="../html/Stack/StackViewDropDown.html" %>
                <%@ include file="../html/Stack/StackView.html" %>
                <%@ include file="../html/ColorComponent.html" %>
                <script src="/js/BoardList/BoardListingDialog.js"></script>
                <script src="/js/init.js"></script>
        </body>
</html>