import { NextResponse } from "next/server";

import prisma from "@/prisma";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });

  return NextResponse.json({ user }, { status: 200 });
};
