import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'
import bcrypt from "bcrypt"

export async function GET(req: Request, { params }: { params: { user_id: string } }) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: params.user_id
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

export async function POST(req: Request, { params }: { params: { user_id: string } }) {
  try {
    const body = await req.json()
    let data = {}

    const user = await prisma.user.findUnique({
      where: {
        id: params.user_id
      }
    })

    if (!user) return NextResponse.json({ status: "Gebruiker bestaat niet" }, { status: 401 })

    if (body.currentPassword && body.newPassword) {
      if (await bcrypt.compare(body.currentPassword, user?.password)) {
        data = { password: await bcrypt.hash(body.newPassword, 10) }
      } else {
        return NextResponse.json({ status: "Wachtword match niet" }, { status: 401 });
      }
    } else {
      data = { userFunctionId: body.userFunctionId, bio: body.bio };
    }

    const userUpdate = await prisma.user.update({
      where: { id: params.user_id },
      data: data
    })

    const transformedData = {
      status: "success",
      data: userUpdate
    }

    return NextResponse.json(transformedData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}