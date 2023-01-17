import DB from "@database";

async function companies(request, response) {
  const db = new DB();
  const companies = await db.getCompanies();

  response.statusCode = 200;
  response.setHeader = ("Content-type", "application/json");
  response.end(JSON.stringify(companies));
}

export default companies;
