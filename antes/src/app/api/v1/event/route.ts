import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'

export async function GET() {
  try {
    const events = await prisma.event.findMany({
      orderBy: { 
        dateStart: 'desc',
      },
      // include: {
      //   user: true,
      //   qaAnswers: true,
      // }
    })

    if (!events) return NextResponse.json({ status: "error" }, { status: 500 })


    return NextResponse.json(events, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}

interface QaData {
  userId: string;
  title: string;
  dateCreate: Date;
  image?: string;
  tags?: string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const user = await prisma.user.findUnique({
      where: { email: body.userEmail }
    })

    if (!user) return NextResponse.json({ status: "error" }, { status: 500 })

    const data: QaData = {
      userId: user.id,
      title: body.title,
      dateCreate: new Date(),
    };
    
    // Add the image field only if it's not null
    if (body.image) {
      data.image = body.image;
    }

    const newQa = await prisma.qaQuestion.create({
      data: data
    })

    return NextResponse.json(newQa, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}