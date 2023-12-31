import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'

export async function GET(req: Request, { params }: { params: { user_id: string, subject_id: string, lesson_id: string, quiz_id: string } }) {
  try {
    const quiz = await prisma.quiz.findUnique({
      where: {
        id: params.quiz_id
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

export async function POST(req: Request, { params }: { params: { user_id: string, subject_id: string, lesson_id: string, quiz_id: string } }) {
  try {
    const body = await req.json()

    const userProgress = await prisma.userProgress.create({
      data: {
        userId: params.user_id,
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