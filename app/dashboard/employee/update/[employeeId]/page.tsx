import { getEmployeesWithId } from "@/actions/employee";
import Container from "@/app/dashboard/_components/Container";
import UpdateEmployee from "./_components/update-form";


interface EmployeeDetailPageProps {
  params: {
    employeeId: string;
  };
}

const EmployeeViewPage = async ({ params }: EmployeeDetailPageProps) => {
  const { employeeId } = params;
  const employee: any = await getEmployeesWithId(parseInt(employeeId));

  if (!employee) return <div>Employee not found</div>;

  return (
    <Container
      title={`Employee detail view: ${employee?.firstName} ${employee?.lastName}`}
      description={"Everything you need to know about employees"}
    >
      <div className="space-y-5">
        {/* <BasicView data={employee} /> */}
        <UpdateEmployee data={employee}/>
      </div>
    </Container>
  );
};

export default EmployeeViewPage;
