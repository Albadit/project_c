import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'

export async function GET() {
  try {
    const user = prisma.roles.findMany()
    return NextResponse.json({body: user})
  } catch (error) {
    return NextResponse.json({body: "error"})
  }
}

export async function POST(req:  Request) {
  try {
    const body = await req.json()
    return NextResponse.json(body)
  } catch (error) {
    return NextResponse.json({body: "error"})
  }
}