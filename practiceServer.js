const http = require("http");

const hostname = "10.0.0.65";
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  console.log("URL: ", req.url);
  res.setHeader("Content-Type", "html");
  res.end("<h1>Hello World!!</h1>");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
