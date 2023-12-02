import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'

export async function GET() {
  try {
    const user = await prisma.role.create({
      data: {
        level: 1,
        name: 'boss',
      },
    })
    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json({body: "error"})
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const user = await prisma.role.create({
      data: {
        id: body.id,
        level: 1,
        name: 'boss',
      },
    })

    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json({body: "error"})
  }
}