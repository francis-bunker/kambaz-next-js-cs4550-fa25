"use client"
import { useParams } from "next/navigation";
import * as db from "../../../../Database";
export default function Page() {
  const { cid, aid } = useParams();
  return (
    <div id="wd-css-styling-forms">
      <h2>Assignment Editor</h2>
      <FormLabel>Assignment Name</FormLabel>

      <FormControl type="text" defaultValue={db.assignments.filter((assignment: any) => assignment._id === aid)[0].title} />
      <FormControl as="textarea" rows={3} defaultValue={db.assignments.filter((assignment: any) => assignment._id === aid)[0].description} />
      <div id="wd-css-styling-dropdowns">
        <h3>Grade type</h3>
        <FormSelect>
          <option value="0" defaultChecked>Percentage</option>
          <option value="1">Points</option>

        </FormSelect>
        <h3>assignemnt group</h3>
        <FormSelect>
          <option value="0" defaultChecked>assignments</option>
          <option value="1">quizes</option>

        </FormSelect>
        <FormSelect>
          <h3>submission type</h3>

          <option value="0" defaultChecked>online</option>
          <option value="1">in person </option>

        </FormSelect>
      </div>

      <input type="checkbox" name="entry-options" id="wd-chkbox-text" />
      <label htmlFor="wd-chkbox-comedy">Text Entry</label><br />

      <input type="checkbox" name="entry-options" id="wd-chkbox-website" />
      <label htmlFor="wd-chkbox-drama">Website</label><br />

      <input type="checkbox" name="entry-options" id="wd-chkbox-media" />
      <label htmlFor="wd-chkbox-scifi">Media Recordings</label><br />

      <input type="checkbox" name="entry-options" id="wd-chkbox-annotation" />
      <label htmlFor="wd-chkbox-fantasy">Student Annotation</label><br />

      <input type="checkbox" name="centry-options" id="wd-chkbox-annotation" />
      <label htmlFor="wd-chkbox-fantasy">File Uploads</label>
      <br /><br />
      <label htmlFor="wd-text-fields-assign-to"> assign to: </label>
      <input type="text"
        placeholder="everyone"
        id="wd-text-fields-assign-to" /><br />
      <label htmlFor="wd-text-fields-points"> points </label>
      <input type="text"
        defaultValue={db.assignments.filter((assignment: any) => assignment._id === aid)[0].points}
        id="wd-text-fields-assign-to" /><br />

      <label htmlFor="wd-text-fields-due"> due date: </label>
      <input type="date"
        defaultValue={db.assignments.filter((assignment: any) => assignment._id === aid)[0].due}
        id="wd-text-fields-due" /><br />

      <label htmlFor="wd-text-fields-avalible-from"> Avalible from: </label>
      <input type="date"
        defaultValue={db.assignments.filter((assignment: any) => assignment._id === aid)[0].avalible}
        id="wd-text-fields-avalible-from" />
      <label htmlFor="wd-text-fields-avalible-until"> Until: </label>
      <input type="date"
        defaultValue={db.assignments.filter((assignment: any) => assignment._id === aid)[0].due}
        id="wd-text-fields-avalible-until" /><br />

      <button>Save</button>
      <button>Cancel</button>
    </div>
  );
}
import { Row, Col } from "react-bootstrap";
import { FormCheck } from "react-bootstrap";
import { FormSelect } from "react-bootstrap";
import { FormLabel, FormControl } from "react-bootstrap";