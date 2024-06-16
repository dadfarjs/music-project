import { NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";
import { musics } from "@/app/_data";

export const GET = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  return NextResponse.json(musics);
};
