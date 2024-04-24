import { Button } from '@/components/ui/button'
import React from 'react'
import { PlusIcon } from '@radix-ui/react-icons'
import CreateButton from '@/components/create-button'
import { DataTableDemo } from '@/components/tabels/data-table'
import { DialogForm } from '@/components/dialog/DialogComp'
const Branch = () => {
  return (
    <div className='lg:px-16 px-8 py-8'>
       <div className='flex justify-end'>
       <CreateButton />
       </div>
       <div>
        <DataTableDemo/>
       </div>
       <DialogForm buttonTitle="Create Branch" headerTitle="Create Branch" headerDescription="You can Create your Branch">
           <h1>Form filed</h1>
       </DialogForm>
    </div>
  )
}

export default Branch
