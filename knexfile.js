module.exports = {
  docker: {
    client: "mysql2",
    version: "8.0",
    connection: {
      host: "172.17.0.2",
      user: "root",
      password: "password",
      database: "employees",
    },
  },
  development: {
    client: "mysql2",
    version: "8.0",
    connection: {
      host: "localhost",
      user: "root",
      password: "password",
      database: "employees",
    },
  },
};
