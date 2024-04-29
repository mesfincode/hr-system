"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./data-table-view-options";

import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { useState } from "react";
import { PaginationOptions } from "@/interfaces/interfaces";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  page:number;
  pageSize:number;
  fetchNext: ({page,pageSize}:PaginationOptions)=> void;

  getFilteredEmp: (  searchCriteria: string ,
    page: number ,
    pageSize: number )=> void;
}

export function DataTableToolbar<TData>({
  table,
  getFilteredEmp,
  page,pageSize,
  fetchNext
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const [filterValue ,setFilterValue]= useState<string>("");
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter in last name ..."
          value={
            filterValue
          }
          onChange={(event) =>
        {
          if(event.target.value===""){
              fetchNext({page,pageSize})
              setFilterValue(event.target.value);

          }else{
            console.log(event.target.value)
          setFilterValue(event.target.value);
          // table.getColumn("lastName")?.setFilterValue(event.target.value)
          getFilteredEmp(event.target.value,page,pageSize);
          }

        }
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>

        )}
        {/* <Button onClick={      ()=>{
          getFilteredEmp(filterValue,page,pageSize);
        }    
}>
          search
        </Button> */}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
