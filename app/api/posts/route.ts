import { NextResponse, NextRequest } from "next/server";

import prisma from "@/prisma";

export const GET = async (req: NextRequest) => {
  const params = req.nextUrl.searchParams;

  const take = parseInt(params.get("limit") ?? "10");
  const page = parseInt(params.get("page") ?? "1");
  const skip = page === 1 ? 0 : page * take;
  const authorId = params.get("userId");

  let where;

  if (authorId) {
    where = {
      authorId,
    };
  }

  const posts = await prisma.post.findMany({
    take,
    skip,
    where,
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
