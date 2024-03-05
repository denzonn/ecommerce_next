'use client'
import React, { FC, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { FaRegTrashCan } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import UpdateCategory from "@/components/form/FormCategory/UpdateCategory";
import AddCategory from "@/components/form/FormCategory/AddCategory";
import { categories } from "@/types";
import useSWR from 'swr'
import { fetcher, getImageCategory } from "@/lib/utils";

interface CategoryPageProps {}

const CategoryPage: FC<CategoryPageProps> = () => {
  const { data, isLoading } = useSWR<categories[]>('/api/categories', fetcher)

  return (
    <div className="w-full">
      <div className="flex flex-row justify-between">
        <div className="mb-4 text-xl px-6">Category List</div>
        <div>
          <AddCategory />
        </div>
      </div>
      <Table>
        <TableCaption>A list of categories</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Category Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item: categories, index: number) => (
            <TableRow key={index}>
              <TableCell className="w-1/12">{index + 1}</TableCell>
              <TableCell className="w-6/12">
                <Image
                  src={item?.image ? getImageCategory(item?.image) : "/images/category.jpg"}
                  alt={item?.image ? item?.image : "/images/category.jpg"}
                  width={100}
                  height={100}
                />
              </TableCell>
              <TableCell className="w-3/12">{item?.name}</TableCell>
              <TableCell  className="w-2/12">
                <div className="flex flex-row gap-2 text-xl">
                  <UpdateCategory />
                  <Button variant={"destructive"}>
                    <FaRegTrashCan />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CategoryPage;
