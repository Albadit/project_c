import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'

export async function POST(req: Request){
    try{
        const body = await req.json()

        const quiz = await prisma.quiz.create({
            data:{
                quiz_data: body,
        }
        })
        return NextResponse.json(quiz)

    }
    catch (error: unknown) {
        if (error instanceof Error) {
          return NextResponse.json({body: error.message});
        } else {
          return NextResponse.json({body: 'An error occurred'});
        }
    }
}


export async function GET() {
    try {
      const user = await prisma.quiz.findFirstOrThrow({ where : { id: 1 } })
      return NextResponse.json(user)
    } catch (error) {
      return NextResponse.json({body: "error"})
    }
  }
