import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'

export async function GET() {
  try {
    const user = await prisma.user.findMany({
      orderBy: {
        name: 'asc'
      },
      include: {
        role: true,
        userFunction: true
      }
    })

    const userData = user.map(item => ({
      id: item.id,
      name: item.name,
      email: item.email,
      userFunctionId: item.userFunction.id,
      userFunctionName: item.userFunction.name,
      roleId: item.role.id,
      roleName: item.role.name
    }))

    const transformedData = {
      status: "success",
      data: userData
    }

    return NextResponse.json(transformedData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const user = await prisma.user.create({
      data: {
        roleId: body.userRoleId,
        userFunctionId: body.userFunctionId,
        image: "/img/profile.png",
        name: body.name,
        bio: null,
        email: body.email.toLowerCase(),
        emailVerified: null,
        password: null,
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

export async function PATCH(req: Request) {
  try {
    const body = await req.json()

    console.log(body)

    const userUpdate = await prisma.user.update({
      where: {
        id: body.id
      },
      data: {
        name: body.name,
        email: body.email,
        userFunctionId: body.userFunctionId,
        roleId: body.userRoleId,
      }
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

export async function DELETE(req: Request) {
  try {
    const body = await req.json()

    const userDelete = await prisma.user.delete({
      where: {
        id: body.id
      }
    })

    const transformedData = {
      status: "success",
      data: userDelete
    }

    return NextResponse.json(transformedData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}