import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'

export async function GET(req: Request, { params }: { params: { qaId: string } }) {
  try {
    const qaQuestion = await prisma.qaQuestion.findUnique({ 
      where: {
        id: params.qaId,
      },
      include: {
        user: true,
        qaAnswers: {
          orderBy: { 
            dateCreate: 'asc'
          },
          include: {
            user: true
          }
        }
      }
    })
    
    if (!qaQuestion) return NextResponse.json({ status: "error" }, { status: 401 })

    const qa = {
      creator: {
        id: qaQuestion.user.id,
        title: qaQuestion.title,
        name: qaQuestion.user.name,
        email: qaQuestion.user.email,
        dateCreate: qaQuestion.dateCreate,
      },
      qaAnswers: qaQuestion?.qaAnswers.map((answer) => ({
        id: answer.user.id,
        name: answer.user.name,
        email: answer.user.email,
        image: answer.user.image,
        dateCreate: answer.dateCreate,
        comment: answer.comment,
      })),
    }

    const transformedData = {
      status: "success",
      data: qa
    }
    
    return NextResponse.json(transformedData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const userId = await prisma.user.findUnique({
      where: { email: body.userEmail}
    })

    if (!userId) return NextResponse.json({ status: "Gebruiker niet gevonden" }, { status: 401 })

    const qaAnswers = await prisma.qaAnswer.create({
      data: {
        questionId: body.questionId,
        userId: userId.id,
        comment: body.comment,
        dateCreate: new Date(),
      }
    })

    const transformedData = {
      status: "success",
      data: qaAnswers
    }


    return NextResponse.json(transformedData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}