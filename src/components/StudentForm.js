import React, { useState } from "react";

const StudentForm = () => {
  const [data, setData] = useState({
    first_name: "",
    last: "",
    address: "",
    skills: [],
    course: "",
    email: "",
    pass: "",
    confirmpass: "",
    age: "",
    mno: "",
    gender: "",
  });

  const change = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "skills") {
      if (checked) {
        setData((prev) => ({
          ...prev,
          skills: [...prev.skills, value],
        }));
      } else {
        setData((prev) => ({
          ...prev,
          skills: prev.skills.filter((item) => item !== value),
        }));
      }
    } else {
      setData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    if (data.first_name === "" || data.last === "") {
      alert("Name is required");
      return;
    }

    if (data.first_name.length < 3) {
      alert("First name must have minimum 3 characters");
      return;
    }

    if (data.last.length < 2) {
      alert("Last name must have minimum 2 characters");
      return;
    }

    if (!data.email.includes("@")) {
      alert("@ is required");
      return;
    }

    if (!data.email.includes(".com")) {
      alert("Enter valid email");
      return;
    }

    if (data.age === "") {
      alert("Age is required");
      return;
    }

    if (!(data.age >= 18 && data.age < 60)) {
      alert("Age is invalid");
      return;
    }

    if (data.pass !== data.confirmpass) {
      alert("Passwords do not match");
      return;
    }

    console.log(data);
    alert("Form Submitted Successfully");
  };

  return (
    <div
      style={{
  backgroundColor: "#eef2ff",
  minHeight: "100vh",
  padding: "20px",
}}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#5b21b6",
          marginBottom: "20px",
        }}
      >
        Student Registration Form
      </h1>

      <form onSubmit={handlesubmit}>
        <div
          style={{
  border: "8px solid #6d5bd0",
  width: "700px",
  margin: "auto",
  backgroundColor: "white",
  borderRadius: "20px",
  padding: "30px",
  boxSizing: "border-box",
  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
}}
        >
          {/* First & Last Name */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <span>
              First Name <br />
              <input
                type="text"
                name="first_name"
                value={data.first_name}
                onChange={change}
                placeholder="Enter Name"
                style={{
                  padding: "8px",
                  width: "280px",
                  marginTop: "5px",
                  borderRadius: "5px",
                  border: "1px solid #6d5bd0",
backgroundColor: "#f8f7ff",
                }}
              />
            </span>

            <span>
              Last Name <br />
              <input
                type="text"
                name="last"
                value={data.last}
                onChange={change}
                placeholder="Enter Last Name"
                style={{
                  padding: "8px",
                  width: "280px",
                  marginTop: "5px",
                  borderRadius: "5px",
                  border: "1px solid #6d5bd0",
backgroundColor: "#f8f7ff",
                }}
              />
            </span>
          </div>

          {/* Email */}
          <div style={{ marginBottom: "15px" }}>
            Email <br />
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={change}
              placeholder="Enter Email"
              style={{
                padding: "8px",
                width: "100%",
                marginTop: "5px",
                borderRadius: "5px",
                border: "1px solid #6d5bd0",
backgroundColor: "#f8f7ff",
              }}
            />
          </div>

          {/* Password */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <span>
              Password <br />
              <input
                type="password"
                name="pass"
                value={data.pass}
                onChange={change}
                placeholder="Enter Password"
                style={{
                  padding: "8px",
                  width: "280px",
                  marginTop: "5px",
                  borderRadius: "5px",
                  border: "1px solid #6d5bd0",
backgroundColor: "#f8f7ff",
                }}
              />
            </span>

            <span>
              Confirm Password <br />
              <input
                type="password"
                name="confirmpass"
                value={data.confirmpass}
                onChange={change}
                placeholder="Confirm Password"
                style={{
                  padding: "8px",
                  width: "280px",
                  marginTop: "5px",
                  borderRadius: "5px",
                  border: "1px solid #6d5bd0",
backgroundColor: "#f8f7ff",
                }}
              />
            </span>
          </div>

          {/* Age & Mobile */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <span>
              Age <br />
              <input
                type="number"
                name="age"
                value={data.age}
                onChange={change}
                placeholder="Enter Age"
                style={{
                  padding: "8px",
                  width: "280px",
                  marginTop: "5px",
                  borderRadius: "5px",
                  border: "1px solid #6d5bd0",
backgroundColor: "#f8f7ff",
                }}
              />
            </span>

            <span>
              Mobile Number <br />
              <input
                type="number"
                name="mno"
                value={data.mno}
                onChange={change}
                placeholder="Enter Number"
                style={{
                  padding: "8px",
                  width: "280px",
                  marginTop: "5px",
                  borderRadius: "5px",
                  border: "1px solid #6d5bd0",
backgroundColor: "#f8f7ff",
                }}
              />
            </span>
          </div>

          {/* Gender */}
          <div style={{ marginBottom: "15px" ,border: "1px solid #6d5bd0",
backgroundColor: "#f8f7ff", }}>
            Gender:
            <br />

            <input
              type="radio"
              name="gender"
              value="Male"
              checked={data.gender === "Male"}
              onChange={change}
            />
            Male

            <input
              type="radio"
              name="gender"
              value="Female"
              checked={data.gender === "Female"}
              onChange={change}
              style={{ marginLeft: "20px" }}
            />
            Female

            <input
              type="radio"
              name="gender"
              value="Other"
              checked={data.gender === "Other"}
              onChange={change}
              style={{ marginLeft: "20px" ,border: "1px solid #6d5bd0",
backgroundColor: "#f8f7ff",}}
            />
            Other
          </div>

          {/* Course */}
          <div style={{ marginBottom: "15px",border: "1px solid #6d5bd0",
backgroundColor: "#f8f7ff", }}>
            Course:
            <br />
            <select
              name="course"
              value={data.course}
              onChange={change}
             style={{
  padding: "8px",
  width: "100%",
  marginTop: "5px",
  borderRadius: "5px",
  border: "1px solid #6d5bd0",
  backgroundColor: "#f8f7ff",
}}
            >
              <option value="">Select Course</option>
              <option value="Web Development">Web Development</option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
              <option value="Python">Python</option>
            </select>
          </div>

          {/* Skills */}
          <div style={{ marginBottom: "15px",border: "1px solid #6d5bd0",
backgroundColor: "#f8f7ff",}}>
            Skills
            <br />

            <input
              type="checkbox"
              name="skills"
              value="HTML"
              checked={data.skills.includes("HTML")}
              onChange={change}
            />
            HTML

            <input
              type="checkbox"
              name="skills"
              value="CSS"
              checked={data.skills.includes("CSS")}
              onChange={change}
              style={{ marginLeft: "15px",border: "1px solid #6d5bd0",
backgroundColor: "#f8f7ff", }}
            />
            CSS

            <input
              type="checkbox"
              name="skills"
              value="JavaScript"
              checked={data.skills.includes("JavaScript")}
              onChange={change}
              style={{ marginLeft: "15px" }}
            />
            JavaScript

            <input
              type="checkbox"
              name="skills"
              value="React"
              checked={data.skills.includes("React")}
              onChange={change}
              style={{ marginLeft: "15px", }}
            />
            React
          </div>

          {/* Address */}
          <div style={{ marginBottom: "15px" }}>
           Address:
            <br />
            <textarea
              rows="4"
              name="address"
              value={data.address}
              onChange={change}
              placeholder="Enter your address"
              style={{
  width: "100%",
  marginTop: "5px",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #6d5bd0",
  backgroundColor: "#f8f7ff",
}}
            />
          </div>

          {/* Terms */}
          <div style={{ marginBottom: "20px" }}>
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              {" "}
              I Agree to Terms & Conditions
            </label>
          </div>

          {/* Submit */}
          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              style={{
  background: "linear-gradient(to right,#5b6ee1,#7e57c2)",
  color: "white",
  padding: "12px 35px",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer",
  fontWeight: "bold",
}}
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;