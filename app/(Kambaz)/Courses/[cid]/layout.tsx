"use client";
import { ReactNode, useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import CourseNavigation from "./Navigation";
import Breadcrumb from "../Breadcrumb";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const [navVisible, setNavVisible] = useState(true);
  const { cid } = useParams();
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const course = courses.find((course: any) => course._id === cid);

  return (
    <div id="wd-courses">
      <Breadcrumb course={undefined} />

      <h2 className="text-danger">
        <FaAlignJustify
          className="me-4 fs-4 mb-1"
          style={{ cursor: "pointer" }}
          onClick={() => setNavVisible(!navVisible)}
        />
        {course?.name}
      </h2>
      <hr />
      <div className="d-flex">
        {navVisible && <CourseNavigation />}
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
