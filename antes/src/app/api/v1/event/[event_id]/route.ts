import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'

export async function GET(req: Request, { params }: { params: { event_id: string } }) {
  try {
    const event = await prisma.event.findUnique({ 
      where: { id: params.event_id },
    })
    
    if (!event) return NextResponse.json({ status: "error" }, { status: 401 })

    const transformedData = {
      status: "success",
      data: event
    }
    
    return NextResponse.json(transformedData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}

export async function POST(req: Request, { params }: { params: { event_id: string } }) {
  try {
    const body = await req.json()

    const calendarCheck = await prisma.calendar.findFirst({
      where: {
        userId: body.userId,
        eventId: params.event_id
      }
    })
    
    if (calendarCheck) return NextResponse.json({ status: "error" }, { status: 401 })

    const calendar = await prisma.calendar.create({
      data: {
        userId: body.userId,
        eventId: params.event_id
      }
    })

    const transformedData = {
      status: "success",
      data: calendar
    }

    return NextResponse.json(transformedData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}