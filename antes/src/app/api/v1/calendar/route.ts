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