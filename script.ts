import { db } from "./src/prisma/db";

async function main() {
  const created = await db.orm.public.User.create({
    email: "admin@exemplo.com",
    name: "admin",
  });

  console.log("Created: ", created);

  const users = await db.orm.public.User.all();
  console.log("All users: ", users);

  await db.close();
}

main().catch((error) => {
  console.log(error);
  process.exit(1);
});
