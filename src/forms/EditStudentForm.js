import React, { useEffect, useState } from 'react'

const EditStudentForm = (props) => {
  const [student, setStudent] = useState(props.currentStudent)

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setStudent({ ...student, [name]: value })
  }

  useEffect(() => {
      setStudent(props.currentStudent)
  }, [props])

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        props.updateStudent(student.id, student)
      }}
    >
    <div className="form-group ">
        <label for="exampleInputName">First Name</label>
        <input type="text" name="firstName"  className="form-control" value={student.firstName} onChange={handleInputChange}  id="exampleInputName" aria-describedby="nameHelp" placeholder="First name"/>
      </div>

      <div className="form-group ">
        <label for="exampleInputLastName">Last Name</label>
        <input type="text" name="lastName"  className="form-control" value={student.lastName} onChange={handleInputChange}  id="exampleInputLastName" aria-describedby="lastNameHelp" placeholder="Last name"/>
      </div>
      
      <div className="form-group ">
        <label for="exampleInputBirthDate">Birth Date</label>
        <input type="date" name="birthDate"  className="form-control" value={student.birthDate} onChange={handleInputChange}  id="exampleInputBirthDate" aria-describedby="birthDateHelp" placeholder="Birth Date"/>
      </div>

      <div className="form-group ">
        <label for="exampleInputCity">City</label>
        <input type="text" name="city"  className="form-control" value={student.city} onChange={handleInputChange}  id="exampleInputCity" aria-describedby="cityHelp" placeholder="City"/>
      </div>
      
      <div className="form-group ">
        <label for="exampleInputProgram">Program</label>
        <input type="text" name="program"  className="form-control" value={student.program} onChange={handleInputChange}  id="exampleInputProgram" aria-describedby="programHelp" placeholder="Program"/>
      </div>
      
      <div className="form-group">
        <label for="exampleInputGroup">Group</label>
        <input type="text" name="group"  className="form-control" value={student.group} onChange={handleInputChange}  id="exampleInputGroup" aria-describedby="groupHelp" placeholder="Group"/>
      </div>

      <button className="btn btn-primary my-2">Update student</button>
      <button 
        onClick={() => props.setEditing(false)}
        className="btn btn-danger mx-1 my-2 "
      >
        Cancel
      </button>
    </form>
  )
}

export default EditStudentForm