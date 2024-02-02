import { NextApiHandler } from "next";
import { NextResponse } from "next/server";

export const GET: NextApiHandler = () => {
  return NextResponse.json({ ok: true });
};
