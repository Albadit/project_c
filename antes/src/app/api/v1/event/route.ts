import { NextResponse } from "next/server"
import { prisma } from '@/../../prisma/index'



export async function POST(req: Request) {
    try {
      const body = await req.json()
  
      const event = await prisma.event.create({
        data: {
          title: body.title,
          description: body.description,
          start: new Date(),
          end: new Date()
        }
      })
  
      return NextResponse.json(true, { status: 200 })
    } catch (error) {
      return NextResponse.json({ error: "server error"}, { status: 500 })
    }
}