import { NextResponse } from "next/server"
import { prisma } from '@/../../prisma/index'

type Course = {
  id: string
  title: string
  description: string
  image: string
  progression: {
      totalLessons: number
      userProgress: number
      percent: number
  }
}

function selectCourseWithHighestProgress(courses: Course[]): Course | null {
  let selectedCourse: Course | null = null
  let highestProgress = 0
  let completedSelectedCourse: Course | null = null

for (const course of courses) {
    if (course.progression.percent === 100) {
      completedSelectedCourse = course
    }
    if (course.progression.percent > highestProgress && course.progression.percent < 100) {
      highestProgress = course.progression.percent
      selectedCourse = course
    }
  }

  if(!selectedCourse) {
    return completedSelectedCourse
  }

  return selectedCourse
}

export async function GET(req: Request, { params }: { params: { userId: string } }) {
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
    
      return {
        id: subject.id,
        title: subject.title,
        description: subject.description,
        image: subject.image,
        progression: {
          totalLessons,
          userProgress: completedLessons,
          percent: Math.ceil(100 / totalLessons * completedLessons) || 100
        }
      }
    })

    if (!qaQuestion || !event || !progression) return NextResponse.json({ status: "error" }, { status: 401 })

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
        elearning: selectCourseWithHighestProgress(progression)
      }
    }

    return NextResponse.json(transformedData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}