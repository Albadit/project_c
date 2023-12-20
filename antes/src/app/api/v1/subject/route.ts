import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/../../prisma/index'
import { NextResponse } from 'next/server';


export async function GET() {
    try {
      const subjects = await prisma.subject.findMany({
        include: {
            lessons: true,
            },
      })
      return NextResponse.json(subjects, { status: 200 })
    } catch (error) {
      return NextResponse.json({ error: "server error"}, { status: 500 })
    }
  }


export async function POST() {
    try {
        const subject = await prisma.subject.create({
        data: {
            name: 'Pyschologie',
            description: 'Dit is deel van de onboarding voor Antes medewerkers die pyschologie doen',
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