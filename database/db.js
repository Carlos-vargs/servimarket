import services from "./services";
import companies from "./companies";
import users from "./users";
import categories from "./categories";
import products from "./products";

class Database {
  constructor() {}

  async getServices(page) {
    let data = services[page - 1];

    if (!data) {
      data = {
        paginatorInfo: {
          count: 0,
          currentPage: 12,
          hasMorePages: false,
          lastPage: 7,
        },
        data: [],
      };
    }

    return data;
  }

  async getCompanies() {
    return companies;
  }

  async getUsers() {
    return users;
  }

  async getCompany(id) {
    if (id > companies.length) {
      return null;
    }

    const company = companies[id - 1];

    let data = {
      id: company.id,
      name: company.name,
      description: company.description,
      categories: categories,
      products: products,
    };

    return data;
  }

  async getCategories() {
    return categories;
  }

  async getUser(id) {
    if (id > users.length) {
      return null;
    }

    const user = users[id - 1];

    let data = {
      ...user,
      createdAt: "2023-01-12 21:05:24",
      companies: [
        ...companies.filter((company) => company.ownerId === user.id),
      ],
    };

    return data;
  }
}

export default Database;
