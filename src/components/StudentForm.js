// import React from 'react'

// function StudentForm() {
//   return (
//     <div>
//       <h1>Student Registration Form</h1>
//       <span>First Name <input type="text"></input></span>
//       <span>LastName <input type="text"></input></span>
//       <span>Email <input type="text"></input></span>  
//       <span>Password <input type="text"></input></span>   
//       <span>Confirm Password <input type="text"></input></span>   
//       <span>Age <input type="text"></input></span>
//       <span>Mobile Number <input type="text"></input></span>   
//       <span><select type="Text" placeholder="Enter your gender"></select></span>              
      

//     </div>
//   )
// }

// export default StudentForm


import React, { useState } from "react";

function StudentForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    mobile: "",
    gender: "",
    course: "",
    skills: [],
    address: "",
    terms: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "terms") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.firstName.trim()) {
      alert("First Name is required");
      return;
    }

    if (!/^[A-Za-z]{3,}$/.test(formData.firstName)) {
      alert("First Name must contain minimum 3 alphabets");
      return;
    }

    if (!formData.email.trim()) {
      alert("Email is required");
      return;
    }

    if (
      !/^[^\s@]+@[^\s@]+\.(com|in)$/.test(formData.email)
    ) {
      alert("Enter valid email");
      return;
    }

    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(
        formData.password
      )
    ) {
      alert("Invalid Password");
      return;
    }

    if (
      formData.password !== formData.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    if (
      formData.age < 18 ||
      formData.age > 60
    ) {
      alert("Age must be between 18 and 60");
      return;
    }

    if (
      !/^[6-9]\d{9}$/.test(formData.mobile)
    ) {
      alert("Invalid Mobile Number");
      return;
    }

    if (!formData.gender) {
      alert("Select Gender");
      return;
    }

    if (!formData.course) {
      alert("Select Course");
      return;
    }

    if (formData.address.length < 20) {
      alert("Address minimum 20 characters");
      return;
    }

    if (!formData.terms) {
      alert("Accept Terms & Conditions");
      return;
    }

    alert("Registration Successful");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />

      <input
        type="text"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <button type="submit">Register</button>
    </form>
  );
}

export default StudentForm;