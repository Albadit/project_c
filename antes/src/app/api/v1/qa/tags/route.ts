import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'

export async function GET() {
  try {
    const tags = await prisma.tag.findMany({})

    const transformedData = tags.map((item) => (item.name))
    
    return NextResponse.json(transformedData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "server error"}, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const user = await prisma.qaAnswer.create({
      data: {
        questionId: body.questionId,
        userId: body.userId,
        comment: body.comment,
        dateCreate: new Date(),
      }
    })

    return NextResponse.json(user, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "server error"}, { status: 500 })
  }
}