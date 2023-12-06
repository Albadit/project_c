// database seed: npx prisma db seed

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const deleteUsers = await prisma.role.deleteMany({})

  const superadmin = await prisma.role.create({
    data: {
      level: 1,
      name: 'Super Admin'
    }
  });

  const admin = await prisma.role.create({
    data: {
      level: 2,
      name: 'Eigenaar'
    }
  });
  
  const manager = await prisma.role.create({
    data: {
      level: 3,
      name: 'Manager'
    }
  });

  const employee = await prisma.role.create({
    data: {
      level: 3,
      name: 'werknemer'
    }
  });

  console.log({ superadmin, admin, manager, employee });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
