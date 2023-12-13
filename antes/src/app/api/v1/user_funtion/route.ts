import { NextResponse } from "next/server";
import { prisma } from '@/../../prisma/index'


export async function GET() {
  try {
    const userFuntion = await prisma.userFunction.findMany({})
    return NextResponse.json(userFuntion, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "server error"}, { status: 500 })
  }
}

// export async function POST(req: Request) {
//   try {
//     const body = await req.json()
    
//     console.log(body)

//     // const user = await prisma.user.create({
//     //   data: {
//     //     id: 1,
//     //   },
//     // })
//     return NextResponse.json(body, { status: 200 })
//   } catch (error) {
//     return NextResponse.json({ error: "server error"}, { status: 500 })
//   }
// }