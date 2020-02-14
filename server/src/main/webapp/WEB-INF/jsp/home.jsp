<!DOCTYPE html>
        <head>
                <title>
                        Meister Task
                </title>
                <link rel="stylesheet" href="/css/Common.css">
                <link rel="stylesheet" href="/css/Kanban.css">
                <link rel="stylesheet" href="/css/Board.css">
                <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
                <script src="js/GetTemplate.js"></script>
                <script src="js/Request/BoardRequest.js"></script>
                <script src="js/Dialog/Container.js"></script>
                <script src="js/Dialog/NormalDialog.js"></script>
        </head>
        <body class="flex flex_column">
                <%@ include file="../html/TopBar.html" %>
                <%@ include file="../html/MiddleBar.html" %>
                <%@ include file="../html/BoardList.html" %>
                <script src="/js/BoardListingDialog.js"></script>
                <script src="/js/init.js"></script>
        </body>
</html>