import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'

export async function GET(req: Request, { params }: { params: { userId: string, subjectId: string, lessonId: string, quizId: string } }) {
  try {
    const quiz = await prisma.quiz.findUnique({
      where: {
        id: params.quizId
      }
    })

    if (!quiz) return NextResponse.json({ status: "error" }, { status: 401 })

    const transformedData = {
      status: "success",
      data: quiz
    }

    return NextResponse.json(transformedData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}

export async function POST(req: Request, { params }: { params: { userId: string, subjectId: string, lessonId: string, quizId: string } }) {
  try {
    const body = await req.json()

    const userProgress = await prisma.userProgress.create({
      data: {
        userId: params.userId,
        lessonId: body.lessonId
      },
    })

    const transformedData = {
      status: "success",
      data: userProgress
    }

    return NextResponse.json(transformedData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}