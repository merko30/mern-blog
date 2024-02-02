import { NextApiHandler } from "next";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const GET: NextApiHandler = async (req) => {
  const prisma = new PrismaClient();

  const posts = await prisma.post.findMany(req.body || {});

  return NextResponse.json({ posts });
};
