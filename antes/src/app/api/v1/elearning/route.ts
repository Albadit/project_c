import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'

export async function GET() {
  try {
    const quiz = await prisma.lesson.findFirst()
    return NextResponse.json(quiz)
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
