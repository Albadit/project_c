import { NextResponse } from "next/server"
import { prisma } from '@/../../prisma/index'
import bcrypt from 'bcrypt'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const role = await prisma.user.findFirst({
      where: { id: body.id }
    })

    if (!role) { console.error("Id not found"); return; }

    const user = await prisma.user.update({
      where: { id: body.id },
      data: { firstName: body.firstName, lastName: body.lastName, email: body.email, role: body.role, password: body.password }
    })

    return NextResponse.json(true, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "server error" }, { status: 500 })
  }
}