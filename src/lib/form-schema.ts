import { z } from "zod";

export const formCategory = z.object({
  name: z.string({ required_error: "Category Name is required" }),
  image: z.any(),
});

export const formProduct = z.object({
  name: z.string({ required_error: "Product Name is required" }),
  desc: z
    .string({ required_error: "Description is required" })
    .min(10, { message: "Job Description must be at least 10 characters" }),
  price: z.number({ required_error: "Price is required" }),
  stock: z.number({ required_error: "Stock is required" }),
  categoryId: z.number({ required_error: "You need to select a category" }),
  image: z.any(),
});
