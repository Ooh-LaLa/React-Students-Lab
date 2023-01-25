import Student from "./Student.js"


const StudentList = (props) => {
  console.log(props, "STUDENT LIST TEST!");
  return (
  <>
  <h2>This is a student list component</h2>
    {props.students.map(student => 
      <Student key={student.name}  student={student}/>      
    )}
  </>
  )
}

export default StudentList
