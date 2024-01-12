import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'

export async function GET(req: Request, { params }: { params: { userId: string, subjectId: string, lessonId: string } }) {
  try {
    const lesson = await prisma.lesson.findUnique({
      where: {
        id: params.lessonId
      }
    })

    if (!lesson) return NextResponse.json({ status: "error" }, { status: 401 })

    const transformedData = {
      status: "success",
      data: lesson
    }

    return NextResponse.json(transformedData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}