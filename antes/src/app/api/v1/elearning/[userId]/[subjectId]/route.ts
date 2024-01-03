import { NextResponse } from "next/server"
import { prisma } from '@/../../prisma/index'

export async function GET(req: Request, { params }: { params: { userId: string, subjectId: string } }) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: params.userId }
    })

    if (!user) return NextResponse.json({ status: "error" }, { status: 401 })

    const subject = await prisma.subject.findUnique({
      where: {
        id: params.subjectId
      },
      include: {
        lessons: {
          orderBy: {
            order: 'asc'
          },
          include: {
            userProgress: {
              where: {
                userId: params.userId
              }
            }
          }
        }
      }
    })

    if (!subject) return NextResponse.json({ status: "error" }, { status: 401 })

    const totalLessons = subject.lessons.length
    const completedLessons = subject.lessons.filter(lesson => lesson.userProgress.length > 0).length

    const progression = {
      ...subject,
      progression: {
        totalLessons,
        userProgress: completedLessons,
        percent: Math.ceil(100 / totalLessons * completedLessons) || 100
      }
    }

    const transformedData = {
      status: "success",
      data: progression
    }

    return NextResponse.json(transformedData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}