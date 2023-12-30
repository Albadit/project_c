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
  })

  const userFunction = await prisma.userFunction.createMany({
    data:
      [
        { name: 'Behavioral neuroscience'},
        { name: 'Behavioral psychology' },
        { name: 'Clinical psychology' },
        { name: 'Cognitive psychology' },
        { name: 'Community psychology' },
      ]
  })

  const roleId = await prisma.role.findFirst({
    where: { name: "Super Admin" }
  })
  
  const roleId2 = await prisma.role.findFirst({
    where: { name: "Werknemer" }
  })
  
  const userFunctionId = await prisma.userFunction.findFirst({
    where: { name: "Behavioral neuroscience" }
  })

  if (!roleId) { console.error("roleId not found"); return }
  if (!roleId2) { console.error("roleId not found"); return }
  if (!userFunctionId) { console.error("userFunctionId not found"); return }
  
  const user = await prisma.user.create({
    data: {
      roleId: roleId.id,
      userFunctionId: userFunctionId.id,
      name: 'Ardit Fazliji',
      email: 'admin@admin.com',
      emailVerified: null,
      password: await bcrypt.hash("admin", 10),
    }
  })

  const user2 = await prisma.user.create({
    data: {
      roleId: roleId2.id,
      userFunctionId: userFunctionId.id,
      name: 'Ayoeb El Bali',
      email: 'ayoeb@ayoeb.com',
      emailVerified: null,
      password: await bcrypt.hash("admin", 10),
    },
  })

  
  if (!user && !user2) { console.error("user not found"); return }
  
  const updateUser = await prisma.user.update({
    where: { id: user.id },
    data: { bio: `Hoi, mijn naam is ${user.name} en ben een nieuwe mederwerker bij antes.` },
  })

  const updateUser2 = await prisma.user.update({
    where: { id: user2.id },
    data: { bio: `Hoi, mijn naam is ${user2.name} en ben een nieuwe mederwerker bij antes.` },
  })

  // extra
  //// QA
  const QaQuestion = await prisma.qaQuestion.create({
    data: {
      userId: user.id,
      title: "Wat is de volgende doel als ik klaar ben met de elearing?",
      dateCreate: new Date(),
      tags: [ "relax", "stress", "golang"]
    }
  })
  
  const QaQuestion2 = await prisma.qaQuestion.create({
    data: {
      userId: user2.id,
      title: "Wat kan ik verwachten als beginner?",
      dateCreate: new Date(),
      tags: [ "relax", "boek", "planning maken"]
    }
  })

  if (!QaQuestion && QaQuestion2) { console.error("QaQuestion not found"); return }

  const qaAnswer = await prisma.qaAnswer.createMany({
    data : [
      {
        questionId: QaQuestion.id,
        userId: user2.id,
        comment: "Lekker bezig jonge. Wat je nu kan doen is dit boek lezen \"Master Your Mindset\"",
        dateCreate: new Date(),
      },
      {
        questionId: QaQuestion.id,
        userId: user.id,
        comment: "Bedank voor je support",
        dateCreate: new Date()
      },
      {
        questionId: QaQuestion2.id,
        userId: user2.id,
        comment: "Waar moet ik voor oppassen",
        dateCreate: new Date()
      },
    ]
  })

  //// event
  const event = await prisma.event.createMany({
    data: [
      {
        title: "Connectiedag!",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        location: "Rotterdam",
        dateStart: new Date(2023, 11, 12, 9, 0, 0),
        dateEnd: new Date(2023, 11, 1, 13, 0, 0),
      },
      {
        title: "MS training",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        location: "Rotterdam",
        dateStart: new Date(2024, 5, 5, 14, 0, 0),
        dateEnd: new Date(2024, 5, 5, 16, 30, 0),
      },
      {
        title: "Team lead meeting",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        location: "Rotterdam",
        dateStart: new Date(2024, 3, 12, 8, 30, 0),
        dateEnd: new Date(2024, 3, 12, 12, 30, 0),
      },
      {
        title: "Birthday Party",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        location: "Rotterdam",
        dateStart: new Date(2024, 4, 11, 7, 0, 0),
        dateEnd: new Date(2024, 4, 11, 10, 30, 0),
      },
    ]
  })

  if (!event) { console.error("event not found"); return }

  //// elearning
  const subject1 = await prisma.subject.create({
    data: {
      title: "Behavioral neuroscience",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  })
  const subject2 = await prisma.subject.create({
    data: {
      title: "Cognitive psychology",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  })
  const subject3 = await prisma.subject.create({
    data: {
      title: "Behavioral psychology",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  })
  const subject4 = await prisma.subject.create({
    data: {
      title: "Clinical psychology",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  })
  const subject5 = await prisma.subject.create({
    data: {
      title: "Cognitive psychology",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  })
  const subject6 = await prisma.subject.create({
    data: {
      title: "Community psychology",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  })

  if (!subject1 || !subject2 || !subject3 || !subject4 || !subject5 || !subject6) { console.error("event not found"); return }

  const lesson1 = await prisma.lesson.create({
    data: {
      subjectId: subject1.id,
      title: "test",
      order: 2,
      lessonData: []
    }
  })

  const lesson2 = await prisma.lesson.create({
    data: {
      subjectId: subject1.id,
      title: "work",
      order: 1,
      lessonData: []
    }
  })

  const quiz = await prisma.quiz.create({
    data: {
      quizData: [
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

  const userProgress = await prisma.userProgress.create({
    data: {
      userId: user.id,
      lessonId: lesson1.id,
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
