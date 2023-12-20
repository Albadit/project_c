import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'

//// testing
// export async function GET() {
//   try {
//     const user = await prisma.user.findUnique({
//       where: {
//         email: "admin@admin.com"
//       },
//       include: {
//         role: true
//       }
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