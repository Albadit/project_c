import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/../../prisma/index'
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const subject = await prisma.subject.create({
      data: {
        name: 'GGZ kennis',
        description: 'Dit is algemene kennis over de GGZ',
          },
      },
    );

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
    const subject = await prisma.subject.findFirst({})
    return NextResponse.json(subject)
  } catch (error) {
    return NextResponse.json({body: "error"})
  }
}