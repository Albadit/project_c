import { NextResponse } from "next/server";

// /api/v1/elearning/[lesson_id]/quiz
export async function GET(
  request: Request,
  { params}: { params: { lesson_id: string } }
) {
  return NextResponse.json({body: params.lesson_id})
}
