import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'

export async function GET() {
  try {
    const quiz = await prisma.quiz.findUnique({
      where: {
        id: 1
      }
    })
    return NextResponse.json(quiz?.quiz_data)
  } catch (error) {
    return NextResponse.json({body: "error"})
  }
}

// export async function POST(req: Request) {
//   try {
//     const body = await req.json()

//     const user = await prisma.quiz.create({
//       data: {
//         quiz_data: body,
//       },
//     })

//     // return NextResponse.json(user)
//   } catch (error) {
//     return NextResponse.json({body: "error"})
//   }
// }