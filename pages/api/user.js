import DB from "@database";

async function user(request, response) {
  const db = new DB();
  const user = await db.getUser(request?.query?.id);

  response.statusCode = 200;
  response.setHeader = ("Content-type", "application/json");
  response.end(JSON.stringify(user));
}

export default user;
