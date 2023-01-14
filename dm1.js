const http = require("http");


const requestListener = (req, res) => {
    console.log(req.url)
    res.writeHead(200);
    res.end("<b>My first server!</b>");
};

const server = http.createServer(requestListener);


server.listen(8080, 'localhost', () => {
    console.log(`Server is running`);
});