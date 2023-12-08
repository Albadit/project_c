import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/../../prisma/index'
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const subject = await prisma.subject.create({
      data: {
        name: 'GGZ kennis',
        description: 'Dit is algemene kennis over de GGZ',
        lessons: {
          create: {
            quiz_id: 1,
            title: 'Hoofdstuk 1',
            description: 'Dit is het eerste hoofdstuk',
            order: 1,
            lesson_data: "idk",
          },
          },
      },
    });
    return NextResponse.json(subject);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({body: error.message});
    } else {
      return NextResponse.json({body: 'An error occurred'});
    }
}
}

export async function GET() {
  try {
    const subject = await prisma.subject.findFirst({ where : { id: 1 } })
    return NextResponse.json(subject)
  } catch (error) {
    return NextResponse.json({body: "error"})
  }
}