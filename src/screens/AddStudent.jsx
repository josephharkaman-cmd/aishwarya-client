import React, { useEffect, useState } from "react";

const AddStudent = ({ totalStudents, fetchStudents }) => {
  const [form, setForm] = useState({
    name: "",
    fatherName: "",
    email: "",
    phone: "",
    dob: "",
  });

  const saveForm = async (e) => {
    e.preventDefault();

    // alert(JSON.stringify(form, " ", 2));

    const response = await fetch("http://localhost:5789/student", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const addRes = await response.json();

    fetchStudents();
  };

  return (
    <div>
      <div>Total Students are = {totalStudents}</div>
      <pre>{JSON.stringify(form, " ", 2)}</pre>
      <form action="" method="post" onSubmit={saveForm}>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm((prevForm) => ({
                ...prevForm,
                name: e.target.value,
              }))
            }
            required
          />
        </div>
        <div>
          <label htmlFor="">Father's Name</label>
          <input
            type="text"
            placeholder="Father's Name"
            value={form.fatherName}
            onChange={(e) =>
              setForm((prevForm) => ({
                ...prevForm,
                fatherName: e.target.value,
              }))
            }
            required
          />
        </div>
        <div>
          <label htmlFor="">Phone No.</label>
          <input
            type="text"
            placeholder="Phone No."
            value={form.phone}
            onChange={(e) =>
              setForm((prevForm) => ({
                ...prevForm,
                phone: e.target.value,
              }))
            }
            required
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm((prevForm) => ({
                ...prevForm,
                email: e.target.value,
              }))
            }
            required
          />
        </div>
        <div>
          <label htmlFor="">Date of Birth</label>
          <input
            type="date"
            placeholder="Date of Birth"
            value={form.dob}
            onChange={(e) =>
              setForm((prevForm) => ({
                ...prevForm,
                dob: e.target.value,
              }))
            }
            required
          />
        </div>
        <button>Save Details</button>
      </form>
    </div>
  );
};

export default AddStudent;
