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
      level: 4,
      name: 'werknemer'
    }
  });
  
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
  });

  // console.log({ superadmin, admin, manager, employee });
  console.log({ quiz });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
