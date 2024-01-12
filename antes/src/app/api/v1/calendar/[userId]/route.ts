import { NextResponse } from "next/server"
import { prisma } from '@/../../prisma/index'

export async function GET(req: Request, { params }: { params: { userId: string } }) {
  try {
    const event = await prisma.calendar.findMany({ 
      where: { userId: params.userId },
      include: {
        event: true
      }
    })
    
    if (!event) return NextResponse.json({ status: "error" }, { status: 401 })

    const events = event.map(item => item.event)

    const transformedData = {
      status: "success",
      data: events
    }

    return NextResponse.json(transformedData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}
