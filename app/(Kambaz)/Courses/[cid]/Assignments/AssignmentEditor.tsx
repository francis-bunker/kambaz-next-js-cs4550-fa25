/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, Button, FormLabel } from "react-bootstrap";

export default function AssignmentEditor({
  assignment,
  setAssignment,
  addAssignment,
}: {
  assignment: any;
  setAssignment: (assignment: any) => void;
  addAssignment: () => void;
}) {
  return (
    <div>
      <FormLabel>Title</FormLabel>
      <FormControl value={assignment.title} onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} className="mb-2" />
      <FormLabel>Description</FormLabel>
      <FormControl as="textarea" value={assignment.description} onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} className="mb-2" />
      <FormLabel>Points</FormLabel>
      <FormControl type="number" value={assignment.points} onChange={(e) => setAssignment({ ...assignment, points: e.target.value })} className="mb-2" />
      <FormLabel>Due Date</FormLabel>
      <FormControl type="date" value={assignment.due} onChange={(e) => setAssignment({ ...assignment, due: e.target.value })} className="mb-2" />
      <FormLabel>Available From</FormLabel>
      <FormControl type="date" value={assignment.avalible} onChange={(e) => setAssignment({ ...assignment, avalible: e.target.value })} className="mb-2" />
    </div>
  );
}