import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'

export async function GET(req: Request, { params }: { params: { user_id: string, subject_id: string, lesson_id: string } }) {
  try {
    const lesson = await prisma.lesson.findUnique({
      where: {
        id: params.lesson_id
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