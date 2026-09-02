import './App.css';

function Subject(props) {
  return (
    <div className="employee">
      <p>Subject Name: {props.name}</p>
      <p>Subject Code: {props.code}</p>
      <p>Faculty: {props.faculty}</p>
      <p>Department: {props.department}</p>
      <p>Credits: {props.credits}</p>
      <p>Semester: {props.semester}</p>
      <p>Type: {props.type}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <p className="title">Welcome to Subject Information</p>

      <p>Status: Subjects available for the semester</p>
      <p>Total Subjects: 4</p>

      <Subject
        name="Data Structures and Algorithms"
        code="CS301"
        faculty="Dr. Sharma"
        department="Computer Science"
        credits="4"
        semester="3"
        type="Core"
      />

      <Subject
        name="Database Management Systems"
        code="CS302"
        faculty="Prof. Patil"
        department="Computer Science"
        credits="4"
        semester="3"
        type="Core"
      />

      <Subject
        name="Web Technology"
        code="CS303"
        faculty="Prof. Joshi"
        department="Computer Science"
        credits="3"
        semester="3"
        type="Elective"
      />

      <Subject
        name="Software Engineering"
        code="CS304"
        faculty="Dr. Kulkarni"
        department="Computer Science"
        credits="3"
        semester="3"
        type="Core"
      />
    </div>
  );
}

export default App;