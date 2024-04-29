import { getEmployeesWithId } from "@/actions/employee";
import Container from "../../_components/Container";
import { BasicView } from "./_components/BasicView";


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
        <BasicView data={employee} />
      </div>
    </Container>
  );
};

export default EmployeeViewPage;
