// import userEvent from '@testing-library/user-event';
import { Fragment, useEffect, useState } from 'react';
import './App.css';
import StudentTable from './tables/StudentTable';
import AddStudentForm from './forms/AddStudentForm';
import EditStudentForm from './forms/EditStudentForm';


const App = () => {
  const studentData = [
    {id: 1, firstName: "Jonas", lastName: "Jonauskas", birthDate: "1985-05-30", city: "Vilnius", program: "JAVA", group: "JP21-rytas"},
    {id: 2, firstName: "Petras", lastName: "Petrauskas", birthDate: "1989-05-30", city: "Vilnius", program: "PHP", group: "PHP21-rytas"},
    {id: 3, firstName: "Rokas", lastName: "Rokauskas", birthDate: "1993-05-30", city: "Vilnius", program: "PT", group: "PT21-rytas"}
  ]

  const initialFormState = {id: null, firstName: "", lastName: "", birthDate: "", city: "", program: "", group: ""}

  const [students, setStudents] = useState(studentData)
  const [editing, setEditing] = useState(false)
  const [currentStudent, setCurrentStudent] = useState(initialFormState)
  


  const emptyArray = [];

  const addStudent = (student) => {
    student.id = students.length + 1
    setStudents([...students, student])

    
  }

  const deleteStudent = (id) => {
    setEditing(false)
   setStudents(students.filter(student => student.id !== id))
  }

  const editRow = student => {
		setEditing(true)
		setCurrentStudent({ id: student.id, firstName: student.firstName, lastName: student.lastName, birthDate: student.birthDate, city: student.city, program: student.program, group: student.group })
	}
  
  const updateStudent = (id, updatedStudent) => {
    setEditing(false)
    setStudents(students.map((student) => (student.id === id ? updatedStudent : student)))
  }

  // ******** FILTRAVIMAS ***********
  const [program, setProgram] = useState();
  const [allStudents, setAllStudents] = useState()

  useEffect(() => {
    setAllStudents(students);
  }, []);

const filter = (e) => {

    const keyword = e.target.value;

    if(keyword !== ""){

      const results = students.filter((student) => {
        return student.program.startsWith(keyword);
      });

      setStudents(results);
    }
    else {

      setStudents(allStudents);
     
    }
    setProgram(keyword);
};

// ********* FILTRAVIMO PABAIGA ***********

  return (
    <div className='container-fluid screen'>
      <div className='row'>
            <div className="input-group mt-3">
              <div className="form-outline">
                <input type="search" value={program} onChange={filter} id="form1" className="form-control input" placeholder="&#128270; Search by program..." />
              </div>
              
            </div>
        
        <div className='main'>
        
          <h1 className="main-header pb-5">Student Registry System  </h1> 
        </div>
        <div className='col-lg-3'>
          {editing ? (
              <Fragment>
                <h1 className="section-header col-lg-5">Edit student  </h1> 
                <EditStudentForm 
                  editing={editing}
                  setEditing={setEditing}
                  currentStudent={currentStudent}
                  updateStudent={updateStudent}
                />
              </Fragment>
            ) : (
              <Fragment>
                <h1 className="section-header col-lg-5">Add student  </h1> 
                <AddStudentForm addStudent={addStudent} />
              </Fragment>
            )}
        </div>
 
        <div className='col-lg-8 section '>
          <h1 className="section-header">View Students </h1>
          <StudentTable students={students} editRow={editRow} deleteStudent={deleteStudent}/>
        </div>  
      </div>
    </div>
    
  );
}

export default App;
