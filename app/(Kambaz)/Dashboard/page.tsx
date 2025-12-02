"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import Link from "next/link";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse, setCourses } from "../Courses/reducer";
import * as client from "../Courses/client";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const [showAllCourses, setShowAllCourses] = useState(false);

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const fetchMyCourses = async () => {
    try {
      const myCourses = await client.findMyCourses();
      dispatch(setCourses(myCourses));
    } catch (e) {
      console.error("Error fetching user courses", e);
    }
  };

  const fetchAllCourses = async () => {
    if (!showAllCourses) return;
    try {
      const all = await client.fetchAllCourses();
      setAllCourses(all);
    } catch (e) {
      console.error("Error fetching all courses", e);
    }
  };

  useEffect(() => {
    if (currentUser) fetchMyCourses();
  }, [currentUser]);

  useEffect(() => {
    fetchAllCourses();
  }, [showAllCourses]);

  const isEnrolled = (courseId: string) =>
    courses.some((c: any) => c._id === courseId);

  const onEnrollCourse = async (courseId: string) => {
    await client.enrollIntoCourse(currentUser._id, courseId);
    await fetchMyCourses();
  };

  const onUnenrollCourse = async (courseId: string) => {
    await client.unenrollFromCourse(currentUser._id, courseId);
    await fetchMyCourses();
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(updateCourse(course));
    if (showAllCourses) {
      setAllCourses(allCourses.map((c) => (c._id === course._id ? course : c)));
    }
  };

  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    dispatch(deleteCourse(courseId));
    if (showAllCourses) {
      setAllCourses(allCourses.filter((c) => c._id !== courseId));
    }
  };

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    await fetchMyCourses();
    if (showAllCourses) {
      setAllCourses([...allCourses, newCourse]);
    }
    dispatch(addNewCourse(newCourse));
  };

  const displayedCourses = showAllCourses ? allCourses : courses;

  return (
    <div id="wd-dashboard">
      <h1>Dashboard</h1>
      <hr />
      <h5>
        New Course
        <button className="btn btn-primary float-end" onClick={onAddNewCourse}>
          Add
        </button>
        <button className="btn btn-warning float-end me-2" onClick={onUpdateCourse}>
          Update
        </button>
        <Button
          variant="primary"
          className="float-end me-2"
          onClick={() => setShowAllCourses(!showAllCourses)}>
          {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
        </Button>
      </h5>
      <br />

      <FormControl
        value={course.name}
        className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <FormControl
        as="textarea"
        rows={3}
        value={course.description}
        onChange={(e) => setCourse({ ...course, description: e.target.value })} />
      <hr />

      <h2>{showAllCourses ? "All Courses" : "Enrolled Courses"} ({displayedCourses.length})</h2>
      <hr />

      <Row xs={1} md={5} className="g-4">
        {displayedCourses.map((course: any) => (
          <Col key={course._id} style={{ width: "300px" }}>
            <Card>
              <Link href={`/Courses/${course._id}/Home`} className="text-decoration-none text-dark">
                <CardImg src="/images/reactjs.jpg" height={160} />

                <CardBody>
                  <CardTitle className="text-nowrap overflow-hidden">
                    {course.name}
                  </CardTitle>

                  <CardText className="overflow-hidden" style={{ height: "100px" }}>
                    {course.description}
                  </CardText>

                  <Button variant="primary">Go</Button>

                  {isEnrolled(course._id) ? (
                    <Button
                      variant="danger"
                      className="float-end"
                      onClick={(e) => {
                        e.preventDefault();
                        onUnenrollCourse(course._id);
                      }}
                    >
                      Unenroll
                    </Button>
                  ) : (
                    <Button
                      variant="success"
                      className="float-end"
                      onClick={(e) => {
                        e.preventDefault();
                        onEnrollCourse(course._id);
                      }}
                    >
                      Enroll
                    </Button>
                  )}

                  <button
                    className="btn btn-danger float-end me-2"
                    onClick={(e) => {
                      e.preventDefault();
                      onDeleteCourse(course._id);
                    }}
                  >
                    Delete
                  </button>

                  <button
                    className="btn btn-warning float-end me-2"
                    onClick={(e) => {
                      e.preventDefault();
                      setCourse(course);
                    }}
                  >
                    Edit
                  </button>
                </CardBody>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
