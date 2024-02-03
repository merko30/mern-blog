import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const prisma = new PrismaClient();

  const data = await req.json();

  const existingUser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (existingUser) {
    return NextResponse.json(
      { message: "Email is already in use" },
      { status: 409 }
    );
  }

  try {
    await prisma.user.create({ data });
    return NextResponse.json(
      { message: "You have been successfully registered" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 400 }
    );
  }
};
