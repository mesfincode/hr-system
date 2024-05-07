"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import { Client } from "../table-data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import moment from "moment";

export const columns: ColumnDef<Client>[] = [
 
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
    accessorKey: "clientName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Client Name" />
    ),

    cell: ({ row }) => <div className="">{row.getValue("clientName")}</div>,
    enableSorting: true,
    enableHiding: true,
  },

  {
    accessorKey: "otSallary",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="OT Sallary" />
    ),

    cell: ({ row }) => <div className="">{row.getValue("otSallary")}</div>,
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "Sallary",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sallary" />
    ),

    cell: ({ row }) => <div className="">{row.getValue("sallary")}</div>,
    enableSorting: true,
    enableHiding: true,
  },
 

  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
