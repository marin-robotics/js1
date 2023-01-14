// grab http package
const http = require("http");

const requestListener = function (req, res) {
    console.log(req)
    res.writeHead(200);
    res.end("<b> My first server! </b>");
};

// create server
const server = http.createServer(requestListener);

server.listen(8000, 'localhost', ()=> {
    console.log("Server is running!");
});