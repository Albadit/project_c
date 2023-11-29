import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'

export async function GET() {
  try {
    const user = await prisma.roles.findMany()
    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json({body: "error"})
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    return NextResponse.json(body)
  } catch (error) {
    return NextResponse.json({body: "error"})
  }
}