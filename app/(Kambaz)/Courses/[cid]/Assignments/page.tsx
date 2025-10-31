"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import Link from "next/link";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();

  return (
    <div id="wd-assignments">
      {currentUser?.role === "FACULTY" && <AssignmentsControls />}

      <div>
        <ListGroup className="rounded-0" id="wd-modules">
          <ListGroupItem className="wd-assignment p-0 fs-5 border-gray">
            Assignments
          </ListGroupItem>
          {assignments && assignments
            .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (
              <ListGroupItem className="w4d-assignment p-3 ps-1" key={assignment._id}>
                <BsGripVertical className="me-2 fs-3" />
                {currentUser?.role === "FACULTY" ?
                  (<Link href={`/Courses/${cid}/Assignments/${assignment._id}`}>
                    {assignment.title}
                  </Link>) : (
                  <>{assignment.title}</>
                )}
                {currentUser?.role === "FACULTY" && (
                  <AssignmentControlButtons
                    assignmentId={assignment._id}
                    deleteAssignment={(assignmentId) => dispatch(deleteAssignment(assignmentId))}
                  />
                )}
                <p className="ms-5">not available until {assignment.avalible}, due {assignment.due}, {assignment.points} points</p>
              </ListGroupItem>))}
        </ListGroup>
      </div>
    </div>
  );
}
