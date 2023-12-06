import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'
import quizData from '@/app/elearing/[course_id]/[lesson_id]/[quiz_id]/quizData.json';

export async function POST(req: Request){
    try{
        const body = await req.json()

        const quiz = await prisma.quiz.create({
            data:{
                title: 'H1',
                description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                time: '20minuten',
                quiz: quizData,
                // lesson: [] 
            }
        })
        return NextResponse.json(quiz)

    }catch (error){
        
        return NextResponse.json({body: "error"})
    }
    
}
