import DB from "@database";

async function services(request, response) {
  const db = new DB();
  const services = await db.getServices(request?.query?.page);

  response.statusCode = 200;
  response.setHeader = ("Content-type", "application/json");
  response.end(JSON.stringify(services));
}

export default services;
