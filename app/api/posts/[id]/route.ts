import { NextResponse } from "next/server";

import prisma from "@/prisma";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const post = await prisma.post.findUnique({
    where: { id: Number(params.id) },
    include: { author: true },
  });

  return NextResponse.json({ post }, { status: 200 });
};
