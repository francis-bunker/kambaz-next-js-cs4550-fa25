"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */


import { useParams } from "next/navigation";
import * as db from "../../../Database";

import { Button, ButtonGroup, FormControl, InputGroup, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical, BsPlusLg, BsSearch } from "react-icons/bs";
import Link from "next/link";

export default function Assignment() {

  const { cid } = useParams();
  const modules = db.modules;
  const assignments = db.assignments;
  return (
    <div id="wd-assignments">
      <div className="mb-3 clearfix">
        <div className="me-3" style={{ maxWidth: 520 }}>
          <InputGroup>
            <InputGroup.Text className="bg-white">
              <BsSearch />
            </InputGroup.Text>
            <FormControl placeholder="Search for Assignments" id="wd-search-assignment" aria-label="Search assignments" />
          </InputGroup>
        </div>

        <ButtonGroup className="float-end">
          <Button id="wd-add-assignment-group" variant="secondary" className="text-nowrap me-2">
            <BsPlusLg className="me-1" />
            Group
          </Button>
          <Button id="wd-add-assignment" variant="danger" className="text-nowrap">
            <BsPlusLg className="me-1" />
            Assignment
          </Button>
        </ButtonGroup>
      </div>

      <div>
        <ListGroup className="rounded-0" id="wd-modules">
          <ListGroupItem className="wd-assignment p-0 fs-5 border-gray">
            Assignments
          </ListGroupItem>
          /* eslint-disable @typescript-eslint/no-explicit-any */
          {assignments
            .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (
              <ListGroupItem className="w4d-assignment p-3 ps-1" key ={assignment._id} >
                <BsGripVertical className="me-2 fs-3" />
                <Link href={`/Courses/${cid}/Assignments/${assignment._id}`} >
                  {assignment.title}
                </Link>
                <br />
                <p>not avalible until {assignment.avalible}, due {assignment.due}, {assignment.points} points</p>
              </ListGroupItem>))}
        </ListGroup>
      </div>
    </div>
  );
}
