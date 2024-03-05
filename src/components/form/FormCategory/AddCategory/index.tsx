"use client";
import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formCategory } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { supabaseUpdateFile, supabaseUploadFile } from "@/lib/supabase";
import toast from 'react-hot-toast';
import slugify from "slugify";

interface AddCategoryProps {}

const AddCategory: FC<AddCategoryProps> = () => {
  const form = useForm<z.infer<typeof formCategory>>({
    resolver: zodResolver(formCategory),
  });

  const onSubmit = async (val: z.infer<typeof formCategory>) => {
    try {
      const { filename, error } = await supabaseUploadFile(
        val.image,
        "categories"
      );

      const slug = slugify(val.name);

      const body = {
        name: val.name,
        image: filename,
        slug: slug
      }

      if (error) {
        throw "Error";
      }

      await fetch('/api/categories/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })

      toast('Successfully created category')

    } catch (error) {
      toast('Please Try Again')
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add Category</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Category</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Your Category Name..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Photo</FormLabel>
                    <FormControl>
                      <Input type="file" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="mt-4 w-full">
                Submit
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddCategory;
