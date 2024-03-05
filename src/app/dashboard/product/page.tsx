import React, { FC } from "react";
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
import AddProduct from "@/components/form/FormProduct/AddProduct";
import UpdateProduct from "@/components/form/FormProduct/UpdateProduct";

interface CategoryPageProps {}

const CategoryPage: FC<CategoryPageProps> = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between">
        <div className="mb-4 text-xl px-6">Product List</div>
        <div>
          <AddProduct />
        </div>
      </div>
      <Table>
        <TableCaption>A list of categories</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>
              <Image
                src={"/images/category.jpg"}
                alt="/images/category.jpg"
                width={100}
                height={200}
              />
            </TableCell>
            <TableCell>Clothes</TableCell>
            <TableCell>Rp. 100.000</TableCell>
            <TableCell>50 pcs</TableCell>
            <TableCell>
              <div className="flex flex-row gap-2 text-xl">
                <UpdateProduct />
                <Button variant={"destructive"}>
                  <FaRegTrashCan />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default CategoryPage;
