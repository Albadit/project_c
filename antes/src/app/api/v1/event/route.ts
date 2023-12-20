import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'

export async function GET() {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const events = await prisma.event.findMany({
      where: {
        dateStart: {
          gte: today,
        },
      },
      orderBy: { 
        dateStart: 'asc',
      }
    })

    if (!events) return NextResponse.json({ status: "error" }, { status: 401 })

    const transformedData = {
      status: "success",
      data: events
    }

    return NextResponse.json(transformedData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}

interface EventData {
  title: string;
  description: string
  location: string
  image?: string
  dateStart: Date
  dateEnd: Date
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const data: EventData = {
      title: body.title,
      description: body.description,
      location: body.location,
      dateStart: new Date(body.dateStart),
      dateEnd: new Date(body.dateEnd),
    }
    
    // Add the image field only if it's not null
    if (body.image) {
      data.image = body.image;
    }

    const event = await prisma.event.create({
      data: data
    })

    const transformedData = {
      status: "success",
      data: event
    }

    return NextResponse.json(transformedData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}