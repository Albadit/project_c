// database seed: npx prisma db seed
// database reset and seed: npx prisma db push --force-reset && npx prisma db seed

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const roles = await prisma.role.createMany({
    data:
      [
        { level: 1, name: 'Super Admin' },
        { level: 2, name: 'Eigenaar' },
        { level: 3, name: 'Manager' },
        { level: 4, name: 'Werknemer' }
      ]
  });

  const userFunction = await prisma.userFunction.createMany({
    data:
      [
        { name: 'Behavioral neuroscience'},
        { name: 'Behavioral psychology' },
        { name: 'Clinical psychology' },
        { name: 'Cognitive psychology' },
        { name: 'Community psychology' },
      ]
  });

  const roleId = await prisma.role.findFirst({
    where: { name: "Super Admin" }
  })
  
  const userFunctionId = await prisma.userFunction.findFirst({
    where: { name: "Behavioral neuroscience" }
  })

  if (!roleId) {
    console.error("Role not found");
    return;
  }
  
  if (!userFunctionId) {
    console.error("User function not found");
    return;
  }
  
  const user = await prisma.user.create({
    data: {
      roleId: roleId.id,
      userFunctionId: userFunctionId.id,
      image: "/img/profile.png",
      firstName: 'Hans',
      lastName: 'Bever',
      bio: null,
      email: 'Hans@niks.com',
      emailVerified: null,
      password: '1234',
    }
  })
  
  const quiz = await prisma.quiz.create({
    data: {
      quiz_data: [
        {
          "question": "Sinds wanneer bestaat GGZ-Nederland?",
          "options": ["1923", "1975", "1948", "1900"],
          "correctAnswer": "1975"
        },
        {
          "question": "Wat is de reden dat er minder bedden beschikbaar zijn bij de GGZ?",
          "options": ["Bezuinigen", "Behandeling aan huis beter voor patient", "Aantal bedden is afgestemd op omringde landen"],
          "correctAnswer": "Bezuinigen"
        },
        {
          "question": "Wat is het Dolhuys?",
          "options": ["Een krankzinngenstichting in Nederland", "Simulatie voor schizofrenie", "Museum voor psychiatrie in Haarlem"],
          "correctAnswer": "Museum voor psychiatrie in Haarlem"
        },
        {
          "question": "Hoeveel persoonlijkheidsstoornissen zijn er?",
          "options": ["8", "12", "14", "10"],
          "correctAnswer": "10"
        },
        {
          "question": "Hoelang duurt een jaar?",
          "options": ["1", "2", "3", "365"],
          "correctAnswer": "365"
        }
      ]
    }
  })

  // console.log({ roles });
  // console.log({ quiz });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
