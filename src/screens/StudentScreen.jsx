import React from "react";
import AddStudent from "./AddStudent";

const StudentScreen = () => {
  const [students, setStudents] = React.useState([
    {
      id: 1,
      name: "Aarav Sharma",
      phone: "+91-9000000001",
      email: "aarav.sharma@example.com",
      dob: "2004-05-12",
      createdAt: "2026-10-01T09:00:00Z",
      updatedAt: "2026-10-01T09:00:00Z",
    },
    {
      id: 2,
      name: "Priya Patel",
      phone: "+91-9000000002",
      email: "priya.patel@example.com",
      dob: "2003-11-23",
      createdAt: "2026-10-02T10:15:00Z",
      updatedAt: "2026-10-05T12:30:00Z",
    },
    {
      id: 3,
      name: "Rahul Verma",
      phone: "+91-9000000003",
      email: "rahul.verma@example.com",
      dob: "2005-02-08",
      createdAt: "2026-10-03T08:45:00Z",
      updatedAt: "2026-10-03T08:45:00Z",
    },
    {
      id: 4,
      name: "Sneha Gupta",
      phone: "+91-9000000004",
      email: "sneha.gupta@example.com",
      dob: "2004-07-19",
      createdAt: "2026-10-04T11:20:00Z",
      updatedAt: "2026-10-06T14:10:00Z",
    },
    {
      id: 5,
      name: "Arjun Singh",
      phone: "+91-9000000005",
      email: "arjun.singh@example.com",
      dob: "2003-09-14",
      createdAt: "2026-10-05T07:30:00Z",
      updatedAt: "2026-10-05T07:30:00Z",
    },
    {
      id: 6,
      name: "Ananya Joshi",
      phone: "+91-9000000006",
      email: "ananya.joshi@example.com",
      dob: "2005-01-30",
      createdAt: "2026-10-06T13:00:00Z",
      updatedAt: "2026-10-08T09:45:00Z",
    },
    {
      id: 7,
      name: "Rohan Mehta",
      phone: "+91-9000000007",
      email: "rohan.mehta@example.com",
      dob: "2004-12-05",
      createdAt: "2026-10-07T10:10:00Z",
      updatedAt: "2026-10-07T10:10:00Z",
    },
    {
      id: 8,
      name: "Kavya Reddy",
      phone: "+91-9000000008",
      email: "kavya.reddy@example.com",
      dob: "2003-06-17",
      createdAt: "2026-10-08T08:00:00Z",
      updatedAt: "2026-10-10T16:20:00Z",
    },
    {
      id: 9,
      name: "Aditya Kumar",
      phone: "+91-9000000009",
      email: "aditya.kumar@example.com",
      dob: "2005-04-22",
      createdAt: "2026-10-09T12:40:00Z",
      updatedAt: "2026-10-09T12:40:00Z",
    },
    {
      id: 10,
      name: "Isha Malhotra",
      phone: "+91-9000000010",
      email: "isha.malhotra@example.com",
      dob: "2004-08-11",
      createdAt: "2026-10-10T09:25:00Z",
      updatedAt: "2026-10-12T11:50:00Z",
    },
    {
      id: 11,
      name: "Vikram Yadav",
      phone: "+91-9000000011",
      email: "vikram.yadav@example.com",
      dob: "2003-03-26",
      createdAt: "2026-10-11T14:15:00Z",
      updatedAt: "2026-10-11T14:15:00Z",
    },
    {
      id: 12,
      name: "Meera Shah",
      phone: "+91-9000000012",
      email: "meera.shah@example.com",
      dob: "2005-10-09",
      createdAt: "2026-10-12T07:45:00Z",
      updatedAt: "2026-10-14T10:30:00Z",
    },
  ]);

  return (
    <div>
      <AddStudent totalStudents={students.length} />
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {students.map((sRow) => (
            <tr>
              <td>{sRow.id}</td>
              <td>{sRow.name}</td>
              <td>{sRow.email}</td>
              <td>{sRow.phone}</td>
              <td>{sRow.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentScreen;
