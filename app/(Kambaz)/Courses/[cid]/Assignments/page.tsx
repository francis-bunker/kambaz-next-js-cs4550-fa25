"use client";

import Link from "next/link";
import {
  Button,
  ButtonGroup,
  InputGroup,
  FormControl,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { BsSearch, BsPlusLg, BsThreeDotsVertical } from "react-icons/bs";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="mb-3 clearfix">
        <div className="me-3" style={{ maxWidth: 520 }}>
          <InputGroup>
            <InputGroup.Text className="bg-white">
              <BsSearch />
            </InputGroup.Text>
            <FormControl placeholder="Search for Assignments" id="wd-search-assignment" aria-label="Search assignments"/>
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
      <div className="border border-gray rounded mb-2">
        <div
          id="wd-assignments-title"
          className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
          <span className="fw-semibold">
            ASSIGNMENTS <span className="text-body-secondary fw-normal">· 40% of Total</span>
          </span>
          <div className="d-flex align-items-center gap-2">
            <Button size="sm" variant="outline-secondary" title="More">
              <BsThreeDotsVertical />
            </Button>
            <Button size="sm" variant="danger" title="Add item">
              <BsPlusLg />
            </Button>
          </div>
        </div>
        <ListGroup id="wd-assignment-list" className="rounded-0">
          <ListGroupItem className="wd-assignment-list-item p-3 ps-2 border-gray">
            <div className="border-start border-3 border-success ps-3">
              <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link text-decoration-none">
                <div className="fw-semibold">A1 - ENV + HTML</div>
              </Link>
              <div className="text-body-secondary small">
                Due <span className="fw-medium">May 1, 11:59pm</span> · Available Apr 1 · 100 pts
              </div>
            </div>
          </ListGroupItem>
          <ListGroupItem className="wd-assignment-list-item p-3 ps-2 border-gray">
            <div className="border-start border-3 border-success ps-3">
              <Link href="/Courses/1234/Assignments/124" className="wd-assignment-link text-decoration-none">
                <div className="fw-semibold">A2 - CSS + Bootstrap</div>
              </Link>
              <div className="text-body-secondary small">
                Due <span className="fw-medium">June 1, 11:59pm</span> · Available May 1 · 100 pts
              </div>
            </div>
          </ListGroupItem>
          <ListGroupItem className="wd-assignment-list-item p-3 ps-2 border-gray">
            <div className="border-start border-3 border-success ps-3">
              <Link href="/Courses/1234/Assignments/125" className="wd-assignment-link text-decoration-none">
                <div className="fw-semibold">A3 - JavaScript + React</div>
              </Link>
              <div className="text-body-secondary small">
                Due <span className="fw-medium">Dec 1, 11:59pm</span> · Available Apr 1 · 100 pts
              </div>
            </div>
          </ListGroupItem>
        </ListGroup>
      </div>
    </div>
  );
}
