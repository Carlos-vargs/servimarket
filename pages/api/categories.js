import DB from "@database";

async function categories(request, response) {
  const db = new DB();
  const categories = await db.getCategories();

  response.statusCode = 200;
  response.setHeader = ("Content-type", "application/json");
  response.end(JSON.stringify(categories));
}

export default categories;
