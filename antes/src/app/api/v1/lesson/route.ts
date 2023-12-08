import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'

export async function POST(req: Request){
    try{
        const body = await req.json()
        const lesson = await prisma.lesson.create({
            data:{
              subject: {
                connect: {
                  id : 1,
                },
              },
              quiz: {
                connect: {
                  id: 1,
                },
              },
              title: body.title,
              description: body.description,
              order: body.order,
            lesson_data: body.lesson_data,
            }
          })
        return NextResponse.json(lesson);
    } catch (error: unknown) {
        if (error instanceof Error) {
          return NextResponse.json({body: error.message});
        } else {
          return NextResponse.json({body: 'An error occurred'});
        }
    }
}


export async function GET(){
    try {
        const user = await prisma.lesson.findFirst({ where : { id: 1 } })
        return NextResponse.json(user)
      } catch (error) {
        return NextResponse.json({body: "error"})
      }
}
