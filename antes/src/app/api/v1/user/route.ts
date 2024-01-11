import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'

export async function GET() {
  try {
    const user = await prisma.user.findMany({
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

// export async function POST(req: Request) {
//   try {
//     const body = await req.json()

//     const user = await prisma.user.findUnique({
//       where: {
//         email: body.email,
//         password: body.password,
//       },
//     })

//     const transformedData = {
//       status: "success",
//       data: user
//     }

//     return NextResponse.json(transformedData, { status: 200 })
//   } catch (error) {
//     return NextResponse.json({ status: "error" }, { status: 500 })
//   }
// }