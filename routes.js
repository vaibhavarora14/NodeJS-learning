const fs = require("fs");

const requestHandler = (req, res) => {
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

    req.on("data", chunk => {
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
};

// module.exports = requestHandler;

// module.exports = {
//   handler: requestHandler,
//   someText: "Some hard coded text"
// };

// module.exports.handler = requestHandler;
// module.exports.someText = "Some hard coded text";

exports.handler = requestHandler;
exports.someText = "Some hard coded text";
