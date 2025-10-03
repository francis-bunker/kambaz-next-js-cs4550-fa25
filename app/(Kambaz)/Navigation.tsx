import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { FaBook } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";




import Link from "next/link";
export default function KambazNavigation() {
  return (
    <ListGroup className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" style={{ width: 120 }}
      id="wd-kambaz-navigation">
      <ListGroupItem className="bg-black border-0 text-center" as="a"
        target="_blank" href="https://www.northeastern.edu/" id="wd-neu-link">
        <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center">
        <Link href="/Account" id="wd-account-link" className="text-white text-decoration-none">
          <FaRegCircleUser className="fs-1 text-white" />
          <br />
          Account
        </Link>
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center">
        <Link href="/Dashboard" id="wd-dashboard-link" className="text-white text-decoration-none">
          <AiOutlineDashboard className="fs-1 text-white" />
          <br />
          Dashboard
        </Link>
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center">
        <Link href="/Dashboard" id="wd-courses-link" className="text-white text-decoration-none">
          <FaBook className="fs-1 text-white" />
          <br />
          Courses
        </Link>
      </ListGroupItem>
            <ListGroupItem className="border-0 bg-black text-center">
        <Link href="/Calendar" id="wd-courses-link" className="text-white text-decoration-none">
          <FaCalendar className="fs-1 text-white" />
          <br />
          Calendar
        </Link>
      </ListGroupItem>
            <ListGroupItem className="border-0 bg-black text-center">
        <Link href="/Indbox" id="wd-courses-link" className="text-white text-decoration-none">
          <FaInbox className="fs-1 text-white" />
          <br />
          Inbox
        </Link>
      </ListGroupItem>
            <ListGroupItem className="border-0 bg-black text-center">
        <Link href="/Labs" id="wd-courses-link" className="text-white text-decoration-none">
          <CiSettings className="fs-1 text-white" />
          <br />
          Labs
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}