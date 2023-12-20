import { NextResponse } from "next/server"
import { prisma } from '@/../../prisma/index'
import bcrypt from 'bcrypt'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const exist = await prisma.user.findUnique({
      where: { email: body.email }
    })

    if (exist) {
      return NextResponse.json({ status: "Gebruiker bestaat al" }, { status: 400 })
    }

    if (!(body.password === body.confirmPassword)) {
      return NextResponse.json({ status: "Wachtwoord match niet" }, { status: 400 })
    }

    if (!(body.agree)) {
      return NextResponse.json({ status: "Ga akkoord met de privacybeleid" }, { status: 400 })
    }

    const role = await prisma.role.findFirst({
      where: { name: "Werknemer" }
    })

    if (!role) { console.error("Role not found"); return; }

    const user = await prisma.user.create({
      data: {
        roleId: role.id,
        userFunctionId: body.userFunctionId,
        image: "/img/profile.png",
        name: body.name,
        bio: null,
        email: body.email.toLowerCase(),
        emailVerified: null,
        password: await bcrypt.hash(body.password, 10),
      }
    })

    const transformedData = {
      status: "success",
      data: user
    }

    return NextResponse.json(transformedData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}