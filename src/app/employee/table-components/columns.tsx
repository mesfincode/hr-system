"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import { Employee } from "../table-data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import moment from "moment";

export const columns: ColumnDef<Employee>[] = [
 
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Id " />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue("id")}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
 
 
  {
    accessorKey: "firstName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="First Name" />
    ),

    cell: ({ row }) => <div className="">{row.getValue("firstName")}</div>,
    enableSorting: true,
    enableHiding: true,
  },

  {
    accessorKey: "lastName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last Name" />
    ),

    cell: ({ row }) => <div className="">{row.getValue("lastName")}</div>,
    enableSorting: true,
    enableHiding: true,
  },

 
  
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="E-mail" />
    ),

    cell: ({ row }) => <div className="">{row.getValue("email")}</div>,
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "age",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Age" />
    ),

    cell: ({ row }) => <div className="">{row.getValue("age")}</div>,
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "sex",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sex" />
    ),

    cell: ({ row }) => <div className="">{row.getValue("sex")}</div>,
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "bankAccount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bank Account" />
    ),

    cell: ({ row }) => <div className="">{row.getValue("bankAccount")}</div>,
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "education",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Education" />
    ),

    cell: ({ row }) => <div className="">{row.getValue("education")}</div>,
    enableSorting: true,
    enableHiding: true,
  },
  // {
  //   accessorKey: "phone",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Mobile" />
  //   ),

  //   cell: ({ row }) => <div className="">{row.getValue("phone")}</div>,
  //   enableSorting: true,
  //   enableHiding: true,
  // },
  // {
  //   accessorKey: "position",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Position" />
  //   ),

  //   cell: ({ row }) => <div className="">{row.getValue("position")}</div>,
  //   enableSorting: true,
  //   enableHiding: true,
  // },
  // {
  //   accessorKey: "salary",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Salary" />
  //   ),

  //   cell: ({ row }) => <div className="">{row.getValue("salary")}</div>,
  //   enableSorting: true,
  //   enableHiding: true,
  // },
 
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
