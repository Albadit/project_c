import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'

export async function GET(req: Request, { params }: { params: { user_id: string } }) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: params.user_id }
    })

    if (!user) return NextResponse.json({ status: "error" }, { status: 401 })

    const subjects = await prisma.subject.findMany({
      include: {
        lessons: { select: { id: true } }
      }
    })

    const userProgress = await prisma.userProgress.findMany({
      where: { userId: params.user_id, lessonId: { in: subjects.flatMap(s => s.lessons.map(l => l.id)) } }
    })

    const transformedData = {
      status: "success",
      data: subjects.map(s => ({
        id: s.id,
        title: s.title,
        image: s.image,
        lessons: s.lessons.length,
        userProgress: userProgress.filter(p => s.lessons.some(l => l.id === p.lessonId)).length
      }))
    }

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