let http = require("http");
let fs = require("fs");
let url = require("url");
let uppercase = require("upper-case");

let server = http.createServer(function(req, res) {
    fs.readFile("./index.html", (err, data) => {
        if (err) throw err;
        res.end(data);
    });
    // console.log(url.parse(req.url, true).query);
});

server.listen(3000, function() {
    console.log("server running...");
});




/*
url.parse() ตรวจสอบ url
req.url รับ request


*/