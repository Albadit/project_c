import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'

export async function GET(req: Request, { params }: { params: { user_id: string, subject_id: string } }) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: params.user_id }
    })

    if (!user) return NextResponse.json({ status: "error" }, { status: 401 })

    const subject = await prisma.subject.findUnique({
      where: {
        id: params.subject_id
      },
      include: {
        lessons: {
          orderBy: {
            order: 'asc'
          },
          include: {
            userProgress: {
              where: {
                userId: params.user_id
              }
            }
          }
        }
      }
    })

    if (!subject) return NextResponse.json({ status: "error" }, { status: 401 })

    const totalLessons = subject.lessons.length;
    const completedLessons = subject.lessons.filter(lesson => lesson.userProgress.length > 0).length;

    const progression = {
      ...subject,
      progression: {
        totalLessons,
        userProgress: completedLessons,
        procent: Math.ceil(100 / totalLessons * completedLessons)
      }
    }

    const transformedData = {
      status: "success",
      data: progression
    };

    return NextResponse.json(transformedData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}

// export async function POST(req: Request) {
//   try {
//     const body = await req.json()

//     const user = await prisma.user.findMany({
//       where: { email: body.email },
//       include: {
//         qaQuestions: true
//       },
//     })

//     const transformedData = {
//       status: "success",
//       data: user
//     }

//     return NextResponse.json(transformedData, { status: 200 })
//   } catch (error) {
//     return NextResponse.json({ status: "error" }, { status: 500 })
//   }
// }