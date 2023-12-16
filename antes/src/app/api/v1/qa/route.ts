import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'

export async function GET() {
  try {
    const qaQuestion = await prisma.qaQuestion.findMany({ 
      include: {
        user: true,
        qaAnswers: true,
        qaTags: {
          include: {
            tag: true
          }
        }
      }
    })

    const transformedData = qaQuestion.map((item) => ({
      id: item.id,
      title: item.title,
      name: item.user.name,
      img: item.user.image,
      dateCreate: item.dateCreate,
      tags: item.qaTags.map((tag) => tag.tag.name),
      reactions: item.qaAnswers.length
    }));
    
    return NextResponse.json(transformedData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const user = await prisma.user.findMany({
      where: { email: body.email },
      include: {
        qaQuestions: true
      },
    })

    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}