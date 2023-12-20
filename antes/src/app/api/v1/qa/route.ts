import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'

export async function GET() {
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

    if (!qaQuestion) return NextResponse.json({ status: "error" }, { status: 401 })

    const transformedData = {
      status: "success",
      data: {
        tags: Array.from(new Set(qaQuestion.flatMap(question => question.tags).filter(Boolean))).sort(),
        question: qaQuestion.map((item) => ({
          id: item.id,
          title: item.title,
          name: item.user.name,
          image: item.user.image,
          dateCreate: item.dateCreate,
          tags: Array.isArray(item.tags) ? item.tags.slice().sort() : [],
          reactions: item.qaAnswers.length
        }))
      }
    }

    return NextResponse.json(transformedData, { status: 200 })
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

    if (!user) return NextResponse.json({ status: "error" }, { status: 401 })

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

    const transformedData = {
      status: "success",
      data: newQa
    }

    return NextResponse.json(transformedData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}