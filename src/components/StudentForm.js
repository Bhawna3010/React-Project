import React from 'react'

function StudentForm() {
  return (
    <div>
      <h1>Student Registration Form</h1>
    
      <span>First Name <input type="text"></input></span>
      <span>LastName <input type="text"></input></span>
      <span>Email <input type="text"></input></span>  
      <span>Password <input type="text"></input></span>   
      <span>Confirm Password <input type="text"></input></span>   
      <span>Age <input type="text"></input></span>
      <span>Mobile Number <input type="text"></input></span>   
      <span><select type="Text" placeholder="Enter your gender"></select></span>              

    </div>
  )
}

export default StudentForm
