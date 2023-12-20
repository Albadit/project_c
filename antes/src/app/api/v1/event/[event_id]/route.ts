import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'

export async function GET(req: Request, { params }: { params: { event_id: string } }) {
  try {
    const event = await prisma.event.findUnique({ 
      where: { id: params.event_id },
    })
    
    if (!event) return NextResponse.json({ status: "error" }, { status: 401 })

    const transformedData = {
      status: "success",
      data: event
    }
    
    return NextResponse.json(transformedData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}

// export async function POST(req: Request) {
//   try {
//     const body = await req.json()

//     const userId = await prisma.user.findUnique({
//       where: { email: body.userEmail}
//     })

//     if (!userId) return NextResponse.json({ status: "Gebruiker niet gevonden" }, { status: 401 })

//     const qaAnswers = await prisma.qaAnswer.create({
//       data: {
//         questionId: body.questionId,
//         userId: userId.id,
//         comment: body.comment,
//         dateCreate: new Date(),
//       }
//     })

//     return NextResponse.json(qaAnswers, { status: 200 })
//   } catch (error) {
//     return NextResponse.json({ status: "error" }, { status: 500 })
//   }
// }