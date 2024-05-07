import {
    ChevronLeftIcon,
    ChevronRightIcon,
    DoubleArrowLeftIcon,
    DoubleArrowRightIcon,
  } from "@radix-ui/react-icons";
  import { Table } from "@tanstack/react-table";
  
  import { Button } from "@/components/ui/button";
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { PaginationOptions } from "@/interfaces/interfaces";
  
  interface DataTablePaginationProps<TData> {
    table: Table<TData>;
    page: number;
    pageSize: number;
    totalPages: number;
    totalEmployees: number;
    updatePageSize: (pageSize:number)=>void;

    fetchNext: ({page,pageSize}:PaginationOptions)=> void;
  
  }
  
  export function DataTablePagination<TData>({
    table,
    page,
    pageSize,
    totalPages,
    totalEmployees,
    updatePageSize,
    fetchNext,

  }: DataTablePaginationProps<TData>) {
    return (
      <div className="flex w-full px-2">
        {/* <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div> */}
        <div className="flex items-center w-full justify-between space-x-6 lg:space-x-8">
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">Rows per page</p>
            <Select
              value={`${pageSize}`}
              onValueChange={(value) => {
                updatePageSize(Number(value))
                let pagenationOption = {page:1,pageSize:Number(value)}

                fetchNext(pagenationOption);
                // table.setPageSize(Number(value));
              }}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue placeholder={pageSize} />
              </SelectTrigger>
              <SelectContent side="top">
                {[5,10, 20, 30, 40].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex w-[100px] items-center justify-center text-sm font-medium">
            Page {page} of{" "}
            {totalPages}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => {
                // table.previousPage()
                console.log("Previous page")
                let pagenationOption = {page:1,pageSize:pageSize}

                fetchNext(pagenationOption);
              }}
              disabled={page==1}
            >
              <span className="sr-only">Go to first page</span>
              <DoubleArrowLeftIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => {
                // table.previousPage()
                console.log("Previous page")
                let pagenationOption = {page:page-1,pageSize:pageSize}

                fetchNext(pagenationOption);
              }}
              disabled={page==1}
            >
              <span className="sr-only">Go to previous page</span>
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() =>{
                //  table.nextPage()
                // console.log("Next page")
                let pagenationOption = {page:page+1,pageSize:pageSize}

                fetchNext(pagenationOption);
                }}
              disabled={page==totalPages}
            >
              <span className="sr-only">Go to next page</span>
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => {
                let pagenationOption = {page:totalPages,pageSize:pageSize}

                fetchNext(pagenationOption);
              }}
              disabled={page==totalPages}
            >
              <span className="sr-only">Go to last page</span>
              <DoubleArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
  