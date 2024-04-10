import http from "http";
export const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World t1!");
});

server.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});
