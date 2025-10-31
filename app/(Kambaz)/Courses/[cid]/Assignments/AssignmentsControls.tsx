import { Button, ButtonGroup, InputGroup, FormControl } from "react-bootstrap";
import { BsPlusLg, BsSearch } from "react-icons/bs";
import { useRouter, useParams } from "next/navigation";

export default function AssignmentsControls() {
  const router = useRouter();
  const { cid } = useParams();
  return (
    <div id="wd-assignments-controls" className="mb-3 clearfix">
      <div className="me-3" style={{ maxWidth: 520 }}>
        <InputGroup>
          <InputGroup.Text className="bg-white">
            <BsSearch />
          </InputGroup.Text>
          <FormControl placeholder="Search for Assignments" id="wd-search-assignment" aria-label="Search assignments" />
        </InputGroup>
      </div>
      <ButtonGroup className="float-end">
        <Button variant="secondary" className="text-nowrap me-2"><BsPlusLg className="me-1" />Group</Button>
        <Button variant="danger" className="text-nowrap" onClick={() => router.push(`/Courses/${cid}/Assignments/new`)}><BsPlusLg className="me-1" />Assignment</Button>
      </ButtonGroup>
    </div>
  );
}