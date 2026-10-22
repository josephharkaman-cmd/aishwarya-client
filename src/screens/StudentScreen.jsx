import React, { useEffect, useState } from "react";
import AddStudent from "./AddStudent";

const StudentScreen = () => {
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = React.useState([]);
  const [editData, setEditData] = useState(null);

  const fetchStudents = async () => {
    setLoading(true);

    setEditData(null);

    const response = await fetch("http://localhost:5789/student");

    const studentData = await response.json();

    console.log("data:", studentData);

    setStudents(studentData.data);

    setLoading(false);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure to delete this record?")) return;

    const res = await fetch(`http://localhost:5789/student/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    await res.json();

    fetchStudents();
  };

  return (
    <div>
      <AddStudent
        totalStudents={students.length}
        fetchStudents={fetchStudents}
        editData={editData}
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
                  <button type="button" onClick={() => setEditData(sRow)}>
                    Edit
                  </button>
                  <button type="button" onClick={() => handleDelete(sRow._id)}>
                    Delete
                  </button>
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
