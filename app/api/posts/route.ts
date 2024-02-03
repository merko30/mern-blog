import { NextApiHandler } from "next";
import { NextResponse } from "next/server";

import { prisma } from "@/prisma";

export const GET: NextApiHandler = async (req) => {
  const posts = await prisma.post.findMany({
    ...req.body,
    include: {
      author: true,
    },
  });

  return NextResponse.json({ posts });
};

export const POST = async (req: Request) => {
  const data = await req.json();

  if (!data || !Object.keys(data).length) {
    return NextResponse.json(
      { error: "Missing required data" },
      { status: 400 }
    );
  }

  const post = await prisma.post.create({ data });

  return NextResponse.json({ post });
};

export const PUT = async (req: Request) => {
  const data = await req.json();

  if (!data || !Object.keys(data).length || !data.id) {
    return NextResponse.json(
      { error: "Missing required data" },
      { status: 400 }
    );
  }

  const { id, ...rest } = data;

  const post = await prisma.post.update({ where: { id }, data: rest });

  return NextResponse.json({ post });
};
