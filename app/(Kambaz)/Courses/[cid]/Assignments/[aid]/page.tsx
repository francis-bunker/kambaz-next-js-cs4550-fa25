"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "../reducer";
import { useState } from "react";
import { FormLabel, FormControl, FormSelect } from "react-bootstrap";

export default function Page() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);

  const [assignment, setAssignment] = useState(() => {
    return aid === "new"
      ? {
          _id: uuidv4(), title: "New Assignment", description: "New Assignment Description",
          points: 100, due: "2100-01-01", avalible: "2000-01-01", course: cid,
        }
      : assignments.find((a: any) => a._id === aid);
  });

  const handleSave = () => {
    if (aid === "new") {
      dispatch(addAssignment({ ...assignment, course: cid }));
    } else {
      dispatch(updateAssignment(assignment));
    }
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-css-styling-forms">
      <FormLabel>{aid === "new" ? "Creating New" : "Editing"} Assignment</FormLabel>
      <FormControl value={assignment.title} onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
      <br />
      <FormControl as="textarea" rows={3} value={assignment.description} onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} />
      <br />
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="wd-text-fields-points">Points</label>
          <FormControl id="wd-text-fields-points" value={assignment.points} onChange={(e) => setAssignment({ ...assignment, points: e.target.value })} />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="wd-text-fields-due">Due</label>
          <FormControl type="date" id="wd-text-fields-due" value={assignment.due} onChange={(e) => setAssignment({ ...assignment, due: e.target.value })} />
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-text-fields-available-from">Available From</label>
          <FormControl type="date" id="wd-text-fields-available-from" value={assignment.avalible} onChange={(e) => setAssignment({ ...assignment, avalible: e.target.value })} />
        </div>
      </div>
      <hr />

      <div className="float-end">
        <button className="btn btn-secondary me-2" onClick={() => router.push(`/Courses/${cid}/Assignments`)}>Cancel</button>
        <button className="btn btn-danger" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}