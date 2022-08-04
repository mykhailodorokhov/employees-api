const { knex } = require("../knex");

const tribesSeedData = [
  { name: "Internstellar", area: "Shared Expiriences" },
  { name: "Rigas", area: "Apps - Pre Sales" },
  { name: "Data Engineering", area: "Data" },
];

const employeesSeedData = [
  { name: "Annabel Pugi", title: "Intern", tribe_id: 1 },
  { name: "Egle Tannenberg", title: "Intern", tribe_id: 1 },
  { name: "Gloria Krieger", title: "Intern", tribe_id: 1 },
  { name: "Kristen Kuldmaa", title: "Intern", tribe_id: 1 },
  { name: "Maksim Ramazanov", title: "Intern", tribe_id: 1 },
  { name: "Rainar Razumovski", title: "Intern", tribe_id: 1 },
  { name: "Risto Vatsar", title: "Intern", tribe_id: 1 },
  { name: "Sakina Ibrahimova", title: "Intern", tribe_id: 1 },
  { name: "Sazzad Hossain", title: "Intern", tribe_id: 1 },
  { name: "Sirli Kont", title: "Intern", tribe_id: 1 },
  { name: "Mike", title: "Backend Developer", tribe_id: 1 },
  { name: "Zohaib Ahmed Butt", title: "Full Stack Developer", tribe_id: 2 },
  { name: "Tiina Härm", title: "Senior Data Engineer", tribe_id: 3 },
];

async function seed() {
  await knex("tribes").insert(tribesSeedData);
  await knex("employees").insert(employeesSeedData);

  console.log("\n✅ database seeded");

  await knex.destroy();
}

seed();
