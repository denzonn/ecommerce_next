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
import { HiOutlinePencilAlt } from "react-icons/hi";

interface UpdateCategory {}

const UpdateCategory: FC<UpdateCategory> = () => {
  const form = useForm<z.infer<typeof formCategory>>({
    resolver: zodResolver(formCategory),
  });

  const onSubmit = (val: z.infer<typeof formCategory>) => {
    console.log(val);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="text-lg bg-yellow-300 hover:bg-yellow-200"><HiOutlinePencilAlt /></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Category</DialogTitle>
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
                      <Input placeholder="Enter Your Category Name..." {...field} />
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

export default UpdateCategory;
