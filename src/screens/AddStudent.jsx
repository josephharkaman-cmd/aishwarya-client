import React, { useEffect, useState } from "react";

const AddStudent = ({ totalStudents }) => {
  const [name, setName] = useState("");
  const [dummyArr, setDummyArr] = useState([]);

  // 1. Mount or Mounted
  useEffect(() => {
    console.log("Add Student is Loaded");
  }, []);

  //   2. Update or Updated
  useEffect(() => {
    console.log("Name is updated : ", name);
  }, [name]);

  //   3. Unmount or Unmounted
  useEffect(() => {
    return () => {
      console.log("Add student component is unmounted");
    };
  }, []);

  const AddNewRecord = () => {
    setDummyArr((prevData) => [
      ...prevData,
      {
        id: prevData.length + 1,
        name: "XyZ",
      },
    ]);
  };

  const UpdateRecord = () => {
    setDummyArr((prevData) =>
      prevData.map((pD) => {
        if (pD.id == 3) {
          return {
            id: 3,
            name: "ABC",
          };
        }
        return pD;
      }),
    );
  };

  return (
    <div>
      <div>Total Students are = {totalStudents}</div>
      <div>Hi! {name || "Guest"}</div>
      <button onClick={AddNewRecord}>Add New</button>

      <button onClick={UpdateRecord}>Update</button>

      {dummyArr.map((arr) => (
        <div>
          {arr.name} | {arr.id}
        </div>
      ))}

      <form action="" method="post">
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Name" />
        </div>
        <div>
          <label htmlFor="">Phone No.</label>
          <input type="text" placeholder="Phone No." />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="">Date of Birth</label>
          <input type="date" placeholder="Date of Birth" />
        </div>
        <button>Save Details</button>
      </form>
    </div>
  );
};

export default AddStudent;
