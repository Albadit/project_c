import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'

export async function GET() {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: 1,
      },
    })
    return NextResponse.json(user, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "server error"}, { status: 500 })
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

//     return NextResponse.json(user)
//   } catch (error) {
//     return NextResponse.json({body: "error"})
//   }
// }