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


export async function GET(
  request: Request,
  { params }: { params: { subject_id: string } }
) {
  try {
    const subject = await prisma.subject.findFirst({
      where: { id: params.subject_id },
      include: {
        lessons: true,
      },
    });

    if (subject === null) {
      return NextResponse.json({ body: 'Subject not found' },{ status: 404 });
    }

    return NextResponse.json(subject);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ body: error.message });
    } else {
      return NextResponse.json({ body: 'An error occurred' });
    }
  }
}