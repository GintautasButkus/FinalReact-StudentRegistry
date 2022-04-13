import React, { useState } from 'react'

const AddStudentForm = (props) => {
    const initialFormState = {id: null, firstName: "", lastName: "", birthDate: "", city: "", program: "", group: ""}
    const [student, setStudent] = useState(initialFormState)
    const handleInputChange = (e) => {
        const{ name, value} = e.target
        setStudent({ ...student, [name]: value })
    }

  return (
    <form 
    
      onSubmit={(e) => {
        e.preventDefault()
        if(student.firstName && student.lastName && student.birthDate && student.city && student.program && student.group) 
          return props.addStudent(student)
          setStudent(initialFormState)  
      }
    }
        >
      
      <div className="form-group ">
        <label htmlFor="exampleInputName">First Name</label>
        <input type="text" name="firstName"  className="form-control" value={student.firstName} onChange={handleInputChange}  id="exampleInputName" aria-describedby="nameHelp" placeholder="First name"/>
      </div>

      <div className="form-group ">
        <label htmlFor="exampleInputLastName">Last Name</label>
        <input type="text" name="lastName"  className="form-control" value={student.lastName} onChange={handleInputChange}  id="exampleInputLastName" aria-describedby="lastNameHelp" placeholder="Last name"/>
      </div>
      
      <div className="form-group ">
        <label htmlFor="exampleInputBirthDate">Birth Date</label>
        <input type="date" name="birthDate"  className="form-control" value={student.birthDate} onChange={handleInputChange}  id="exampleInputBirthDate" aria-describedby="birthDateHelp" placeholder="Birth Date"/>
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputCity">City</label>
        <input type="text" name="city"  className="form-control" value={student.city} onChange={handleInputChange}  id="exampleInputCity" aria-describedby="cityHelp" placeholder="City"/>
      </div>
      
      <div className="form-group ">
        <label htmlFor="exampleInputProgram">Program</label>
        <input type="text" name="program"  className="form-control" value={student.program} onChange={handleInputChange}  id="exampleInputProgram" aria-describedby="programHelp" placeholder="Program"/>
      </div>
      
      <div className="form-group">
        <label htmlFor="exampleInputGroup">Group</label>
        <input type="text" name="group"  className="form-control" value={student.group} onChange={handleInputChange}  id="exampleInputGroup" aria-describedby="groupHelp" placeholder="Group"/>
      </div>
      
      <button className="btn btn-primary mt-2">Add New Student</button>
    </form>
  )
}

export default AddStudentForm



