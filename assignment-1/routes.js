const redirectToDefault = response => {
  response.statusCode = 302;
  response.setHeader("Location", "/");
  return response.end();
};

const getBaseHTML = body => `<html>
  <head><title> Assignment Page </title></head>
  <body>
  ${body}
  </body>
</html>`;

const routes = (request, response) => {
  const url = request.url;
  const method = request.method;
  let returnHTML = "";

  if (url === "/") {
    returnHTML = getBaseHTML(`<h1>Welcome page</h1>
    <form action='/create-user' method='POST'>
      <input name='username' /> <button> submit </button>
    </form>`);
  } else if (url === "/users" && method === "GET") {
    returnHTML = getBaseHTML(`<h2>List of users</h2>
    <ul>
      <li>User 1</li>
      <li>User 2</li>
      <li>User 3</li>
    </ul>
    `);
  } else if (url === "/create-user") {
    const body = [];

    request.on("data", data_chunk => {
      body.push(data_chunk);
    });

    return request.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const username = parseBody.split("=")[1];

      console.log(`username - ${username}`);
      return redirectToDefault(response);
    });
  } else {
    console.error(`Invalid request`);
    return redirectToDefault(response);
  }

  response.setHeader("Content-Type", "text/html");
  response.write(returnHTML);
  return response.end();
};

module.exports = routes;
