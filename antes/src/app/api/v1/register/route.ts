import { NextResponse } from "next/server"
import { prisma } from '@/../../prisma/index'
import bcrypt from 'bcrypt'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const exist = await prisma.user.findFirst({
      where: { email: body.email }
    })

    if (exist) {
      return NextResponse.json({ body: "Gebruiker bestaat al" } , { status: 400 })
    }

    // check if from inpput not empty

    const role = await prisma.role.findFirst({
      where: { name: "Werknemer" }
    })

    if (!role) { console.error("Role not found"); return; }

    const user = await prisma.user.create({
      data: {
        roleId: role.id,
        userFunctionId: body.userFunctionId,
        image: "/img/profile.png",
        firstName: body.firstName,
        lastName: body.lastName,
        bio: null,
        email: body.email,
        emailVerified: null,
        password: await bcrypt.hash(body.password, 10),
      }
    })

    return NextResponse.json(user, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "server error"}, { status: 500 })
  }
}