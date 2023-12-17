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

    if (!qaQuestion) return NextResponse.json({ status: "error" }, { status: 500 })

    const transformedData = {
      status: "succes",
      data: {
        tags: Array.from(new Set(qaQuestion.flatMap(question => question.tags))).sort(),
        question: qaQuestion.map((item) => ({
          id: item.id,
          title: item.title,
          name: item.user.name,
          image: item.user.image,
          dateCreate: item.dateCreate,
          tags: Array.isArray(item.tags) ? item.tags.slice().sort() : [],
          reactions: item.qaAnswers.length
        }))
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

    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}