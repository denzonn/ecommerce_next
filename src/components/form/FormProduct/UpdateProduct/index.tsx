"use client";
import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formProduct } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { HiOutlinePencilAlt } from "react-icons/hi";

interface UpdateProductProps {}

const UpdateProduct: FC<UpdateProductProps> = () => {
  const form = useForm<z.infer<typeof formProduct>>({
    resolver: zodResolver(formProduct),
  });

  const onSubmit = (val: z.infer<typeof formProduct>) => {
    console.log(val);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="text-lg bg-yellow-300 hover:bg-yellow-200">
            <HiOutlinePencilAlt />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[60vw]">
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Your Product Name..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="categoryId"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel>Product Category</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a Category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Fruits</SelectLabel>
                              <SelectItem value="apple">Apple</SelectItem>
                              <SelectItem value="banana">Banana</SelectItem>
                              <SelectItem value="blueberry">
                                Blueberry
                              </SelectItem>
                              <SelectItem value="grapes">Grapes</SelectItem>
                              <SelectItem value="pineapple">
                                Pineapple
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
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
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="stock"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel>Stock</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter Stock Amount...."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter Product Price...."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className="mt-8 w-full">
                Submit
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProduct;
