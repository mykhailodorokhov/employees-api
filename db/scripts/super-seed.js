// kudos to https://randomuser.me/

const fetch = require("node-fetch");
const { knex } = require("../knex");

seedDbWithRandomEmployees(1000);

async function seedDbWithRandomEmployees(numberOfEmployees = 1000) {
  const randomUsers = await getRandomPeople(numberOfEmployees);
  const seedData = await formatSeedData(randomUsers);

  await seedDb(seedData);
}

async function getRandomPeople(numberOfEmployees) {
  const url = `http://randomuser.me/api/?results=${numberOfEmployees}`;

  console.log("\ncalling randomuser.me API...");

  const response = await fetch(url);
  const randomPeople = await response.json();

  return randomPeople;
}

async function formatSeedData(jsonData) {
  let seedData = [];

  console.log("parsing started...");

  for (let person of jsonData.results) {
    const anotherOne = {
      name: `${person.name.first} ${person.name.last}`,
      title: "Senior Random Developer",
      tribe_id: Math.ceil(Math.random() * 3),
    };

    seedData.push(anotherOne);
  }

  console.log("parsing completed.");

  return seedData;
}

async function seedDb(data) {
  await knex("employees").insert(data);
  console.log("\n✅ database seeded");

  await knex.destroy();
}
