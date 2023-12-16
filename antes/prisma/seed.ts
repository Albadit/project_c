// database seed: npx prisma db seed
// database reset and seed: npx prisma db push --force-reset && npx prisma db seed

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt'

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

  if (!roleId) { console.error("roleId not found"); return }
  
  if (!userFunctionId) { console.error("userFunctionId not found"); return }
  
  const user = await prisma.user.create({
    data: {
      roleId: roleId.id,
      userFunctionId: userFunctionId.id,
      image: "/img/profile.png",
      name: 'Ardit Fazliji',
      bio: null,
      email: 'admin@admin.com',
      emailVerified: null,
      password: await bcrypt.hash("admin", 10),
    }
  })

  const user2 = await prisma.user.create({
    data: {
      roleId: roleId.id,
      userFunctionId: userFunctionId.id,
      image: "/img/profile.png",
      name: 'Ayoeb El Bali',
      bio: null,
      email: 'ayoeb@ayoeb.com',
      emailVerified: null,
      password: await bcrypt.hash("admin", 10),
    },
  })

  if (!user && !user2) { console.error("user not found"); return }
  
  // extra
  //// QA
  const tag = await prisma.tag.createMany({
    data: [
      { name: 'golang'},
      { name: 'stress' },
      { name: 'relx' },
      { name: 'boek' },
      { name: 'planning maken' },
    ]
  })

  const QaQuestion = await prisma.qaQuestion.create({
    data: {
      userId: user.id,
      title: "Wat is de volgende doel als ik klaar ben met de elearing?",
      dateCreate: new Date(),
    }
  })

  if (!QaQuestion) { console.error("QaQuestion not found"); return }

  const tags = await prisma.tag.findMany({ })

  if (!tags) { console.error("tagId not found"); return }

  const qaTags = await prisma.qaTag.createMany({
    data:[
      { qaQuestionId: QaQuestion.id, tagId: tags[0].id },
      { qaQuestionId: QaQuestion.id, tagId: tags[1].id },
      { qaQuestionId: QaQuestion.id, tagId: tags[2].id },
    ]
  })

  const qaAnswer = await prisma.qaAnswer.createMany({
    data : [
      {
        questionId: QaQuestion.id,
        userId: user2.id,
        comment: "Lekker bezig jonge. Wat je nu kan doen is dit boek lezen \"Master Your Mindset\"",
        dateCreate: new Date()
      },
      {
        questionId: QaQuestion.id,
        userId: user.id,
        comment: "Bedank voor je support",
        dateCreate: new Date()
      },
    ]
  })

  //// quiz
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
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
