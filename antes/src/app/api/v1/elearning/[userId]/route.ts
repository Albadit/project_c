import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'

export async function GET(req: Request, { params }: { params: { userId: string } }) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: params.userId }
    })

    if (!user) return NextResponse.json({ status: "error" }, { status: 401 })

    const subjects = await prisma.subject.findMany({
      include: {
        lessons: { select: { id: true } }
      }
    })

    const elearning = await prisma.subject.findMany({
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

    const progression = elearning.map(subject => {
      const totalLessons = subject.lessons.length
      const completedLessons = subject.lessons.filter(lesson => lesson.userProgress.length > 0).length
      const percent = completedLessons === totalLessons ? 100 : Math.ceil(100 / totalLessons * completedLessons)
    
      return {
        id: subject.id,
        title: subject.title,
        description: subject.description,
        image: subject.image,
        progression: {
          totalLessons,
          userProgress: completedLessons,
<<<<<<< Updated upstream
          percent: Math.ceil(100 / totalLessons * completedLessons)
=======
          percent: percent
>>>>>>> Stashed changes
        }
      }
    })
    const transformedData = {
      status: "success",
      data: progression
    }

    return NextResponse.json(transformedData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}