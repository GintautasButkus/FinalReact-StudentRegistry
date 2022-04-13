import React, { useState } from 'react'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { MdModeEditOutline } from 'react-icons/md'

const StudentTable = (props) => (
  <table className="table table-striped pt-0">
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Birth Date</th>
        <th>City</th>
        <th>Program</th>
        <th>Group</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        {props.students.length > 0 ? (
            props.students.map((student) => (
                <tr key={student.id}>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.birthDate}</td>
                    <td>{student.city}</td>
                    <td>{student.program}</td>
                    <td>{student.group}</td>
                    <td>
                        <button onClick={() => props.editRow(student)} className="btn btn-success m-1"><MdModeEditOutline/></button>
                        <button onClick={() => props.deleteStudent(student.id)} className="btn btn-warning"><RiDeleteBin6Fill /></button>
                    </td>
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan={7}>No students in the system</td>
            </tr>
        )}
      
    </tbody>
  </table>



)



export default StudentTable