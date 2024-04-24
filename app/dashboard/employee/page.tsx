import React, { Suspense } from 'react'
import * as Dialog from "@radix-ui/react-dialog";
import Container from '../_components/Container';
import SuspenseLoading from '@/components/loadings/suspense';
import EmployeesView from './components/EmployeesView';

const Employee = () => {
  return (
    <div>
        <Container
      title="Employees"
      description={"Everything you need to know about your Employees"}
    >
      <Suspense fallback={<SuspenseLoading />}>
        <EmployeesView  />
      </Suspense>
    </Container>
      
    </div>
  )
}

export default Employee
