import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/../../prisma/index'
import quizData from '@/app/elearing/[course_id]/[lesson_id]/[quiz_id]/quizData.json';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const subject = await prisma.subject.create({
      data: {
        id: 1,
        name: 'GGZ kennis',
        description: 'Dit is algemene kennis over de GGZ',
        lesson_id: 1,
        lesson_order: 1, 
      },
    });
    return NextResponse.json(subject);
  } catch (error) {
    return NextResponse.json({ body: 'fuckkk' });
  }
}