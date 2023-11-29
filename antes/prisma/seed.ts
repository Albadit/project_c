// npx prisma db seed

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const superadmin = await prisma.roles.create({
    data: {
      level: 1,
      name: 'superadmin'
    }
  });

  const admin = await prisma.roles.create({
    data: {
      level: 2,
      name: 'admin'
    }
  });

  const worker = await prisma.roles.create({
    data: {
      level: 3,
      name: 'worker'
    }
  });

  console.log({ superadmin, admin, worker });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
