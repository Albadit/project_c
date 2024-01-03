import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'
import bcrypt from "bcrypt"

function generateStaticParams(data: any) {
  return data
}

export async function GET(req: Request, { params }: { params: { userId: string } }) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: params.userId
      }
    })

    const transformedData = {
      status: "success",
      data: generateStaticParams(user)
    }
    return NextResponse.json(transformedData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}

export async function POST(req: Request, { params }: { params: { userId: string } }) {
  try {
    const body = await req.json()
    let data = {}

    const user = await prisma.user.findUnique({
      where: {
        id: params.userId
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
      where: { id: params.userId },
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