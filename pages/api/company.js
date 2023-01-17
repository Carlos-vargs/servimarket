import DB from "@database";

async function company(request, response) {
  const db = new DB();
  const company = await db.getCompany(request?.query?.id);

  response.statusCode = 200;
  response.setHeader = ("Content-type", "application/json");
  response.end(JSON.stringify(company));
}

export default company;
