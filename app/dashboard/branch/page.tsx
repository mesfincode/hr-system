import { Button } from '@/components/ui/button'
import React from 'react'
import { PlusIcon } from '@radix-ui/react-icons'
import CreateButton from '@/components/create-button'
import { DataTableDemo } from '@/components/tabels/data-table'
const Branch = () => {
  return (
    <div className='lg:px-16 px-8 py-8'>
       <div className='flex justify-end'>
       <CreateButton />
       </div>
       <div>
        <DataTableDemo/>
       </div>
    </div>
  )
}

export default Branch
