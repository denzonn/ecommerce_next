import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { supabaseGetPublicUrl } from "./supabase";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function fetcher<JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> {
  const res = await fetch(input, init);

  return res.json() as Promise<JSON>;
}

export async function getImageCategory(image: string) {
  const { publicUrl } = await supabaseGetPublicUrl(
    image,
    "categories"
  );

  return publicUrl
}
