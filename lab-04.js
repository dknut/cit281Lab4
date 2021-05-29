// Require the Fastify framework and instantiate it
const fastify = require("fastify")();
// Handle GET verb for / route using Fastify
// Note use of "chain" dot notation syntax
fastify.get("/", (request, reply) => {
  reply
    .code(200)
    .header("Content-Type", "html")
    .send("<h1>Hello from Lab 4!</h1>");
});

fastify.get("/name", (request, reply) => {
  let { first, last } = request.query;
  first !== undefined
    ? last !== undefined
      ? (name = `${first} ${last}`)
      : (name = "Guest")
    : (name = "Guest");

  reply
    .code(200)
    .header("Content-Type", "html")
    .send(`<h1>Hello, ${name}</h1>`);
});
// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
