import React, { useEffect, useState } from "react";
import AddStudent from "./AddStudent";

const StudentScreen = () => {
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = React.useState([]);

  const fetchStudents = async () => {
    setLoading(true);

    const response = await fetch("http://localhost:5789/student");

    const studentData = await response.json();

    console.log("data:", studentData);

    setStudents(studentData.data);

    setLoading(false);
  };
  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <AddStudent
        totalStudents={students.length}
        fetchStudents={fetchStudents}
      />
      {loading ? (
        <div>Loading students....</div>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Father's Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>DOB</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((sRow) => (
              <tr>
                <td>{sRow._id}</td>
                <td>{sRow.name}</td>
                <td>{sRow.fatherName}</td>
                <td>{sRow.email}</td>
                <td>{sRow.phone}</td>
                <td>{sRow.dob}</td>
                <td>
                  <button type="button">View Details</button>
                  <button type="button">Edit</button>
                  <button type="button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentScreen;
