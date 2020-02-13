
const domain    = window.location.origin;
const boardsUrl = "/boards";

axios.get(domain+boardsUrl).then((response) => {
        console.log("response : ", response);
});