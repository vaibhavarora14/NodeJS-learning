const fs = require("fs");

// fs.writeFileSync("hello.txt", "Hello from NodeJS");

const http = require("http");
const server = http.createServer((req, res) => {
  // console.log(req);
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
    <head>
    <title> My First Page</title>
    <body>
    <form action="/message" method="POST">
      <input type="text" name="message" />
      <button>submit</button>
    </form>
    </body>
    </head>
  </html>`);
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];

    console.log("came here");
    req.on("data", chunk => {
      console.log("came inside data");
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];

      // fs.writeFileSync("message.txt", message);
      fs.writeFile("message.txt", message, error => {
        if (error) {
          console.log("error came");
        }

        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`<html>
    <head>
    <title> My First Page</title>
    <body>
    <h1>
      Hello from my Node.js Server!
    </h1>
    </body>
    </head>
  </html>`);
  res.end();
});

server.listen(3000);
