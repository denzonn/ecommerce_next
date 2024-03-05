import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { supabaseGetPublicUrl } from "@/lib/supabase";

export async function GET() {
  const categories = await prisma.categoryProduct.findMany();

  return NextResponse.json(categories);
}
