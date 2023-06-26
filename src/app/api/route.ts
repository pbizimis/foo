import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { userId } = auth();
  console.log(userId);

  const data = await request.json();
  console.log(data);

  return NextResponse.json(data);
}
