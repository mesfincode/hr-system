

import React from 'react'
import { Button } from './ui/button'
import { PlusIcon } from '@radix-ui/react-icons'

const CreateButton = () => {
  return (
    <button className="w-12 h-12 rounded-full bg-slate-400 text-white text-xl shadow-md hover:bg-slate-600">
       <p>+</p>
  </button>
  )
}

export default CreateButton
