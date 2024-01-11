import { NextResponse } from "next/server"
import { prisma } from '@/../../prisma/index'
import bcrypt from 'bcrypt'

export async function DELETE(req: Request) {
  try {
    const body = await req.json()

    const role = await prisma.user.findFirst({
      where: { email: body.email }
    })

    if (!role) { console.error("Email not found"); return; }

    const user = await prisma.user.delete({
      where: { email: body.email }
    })

    return NextResponse.json(true, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "server error" }, { status: 500 })
  }
}