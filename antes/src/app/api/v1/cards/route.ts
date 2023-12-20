import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'

export async function GET() {
  try {
    const qaQuestion = await prisma.qaQuestion.findMany({
      orderBy: { 
        dateCreate: 'desc',
      },
      include: {
        user: true,
        qaAnswers: true,
      }
    })

    const event = await prisma.event.findMany({
      orderBy: { 
        dateStart: 'desc'
      }
    })

    if (!qaQuestion || !event) return NextResponse.json({ status: "error" }, { status: 500 })

    const transformedData = {
      status: "succes",
      data: {
        qa: {
          id: qaQuestion[0].id,
          title: qaQuestion[0].title,
          name: qaQuestion[0].user.name,
          profile: qaQuestion[0].user.image,
          image: qaQuestion[0].image,
          dateCreate: qaQuestion[0].dateCreate,
          reactions: qaQuestion[0].qaAnswers.length,
          bio: qaQuestion[0].user.bio,
        },
        event: {
          id: event[0].id,
          title: event[0].title,
          image: event[0].image,
          description: event[0].description,
          dateStart: event[0].dateStart,
          location: event[0].location,
        },
        elearing: {
          // elearing
        }
      }
    }

    return NextResponse.json(transformedData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const user = await prisma.user.findMany({
      where: { email: body.email },
      include: {
        qaQuestions: true
      },
    })

    const transformedData = {
      status: "success",
      data: user
    }

    return NextResponse.json(transformedData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}