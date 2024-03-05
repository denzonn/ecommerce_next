import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function POST(request: Request) {
    const data = await request.json()

    const categories = await prisma.categoryProduct.create({
        data
    })

    return NextResponse.json(categories)
}