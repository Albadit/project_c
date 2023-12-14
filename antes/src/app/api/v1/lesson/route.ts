import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'

export async function POST(req: Request){
    try{
        const body = await req.json()

        const exist = await prisma.subject.findFirst({
    })
        if (!exist){
            return NextResponse.json("Subject does not exist", {status: 400})
        }
        const lesson = await prisma.lesson.create({
            data:{
              subjectId: exist.id,
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
        const user = await prisma.lesson.findFirst()
        return NextResponse.json(user)
      } catch (error) {
        return NextResponse.json({body: "error"})
      }
}
