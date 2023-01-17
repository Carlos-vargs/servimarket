import DB from "@database";

async function users(request, response) {
  const db = new DB();
  const users = await db.getUsers();

  response.statusCode = 200;
  response.setHeader = ("Content-type", "application/json");
  response.end(JSON.stringify(users));
}

export default users;
