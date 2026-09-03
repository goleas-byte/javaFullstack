import React, { useState, useEffect } from 'react';
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

  // useState
  const [showSubjects, setShowSubjects] = useState(true);

  const subjects = [
    {
      name: "Data Structures and Algorithms",
      code: "CS301",
      faculty: "Dr. Sharma",
      department: "Computer Science",
      credits: "4",
      semester: "3",
      type: "Core"
    },
    {
      name: "Database Management Systems",
      code: "CS302",
      faculty: "Prof. Patil",
      department: "Computer Science",
      credits: "4",
      semester: "3",
      type: "Core"
    },
    {
      name: "Web Technology",
      code: "CS303",
      faculty: "Prof. Joshi",
      department: "Computer Science",
      credits: "3",
      semester: "3",
      type: "Elective"
    },
    {
      name: "Software Engineering",
      code: "CS304",
      faculty: "Dr. Kulkarni",
      department: "Computer Science",
      credits: "3",
      semester: "3",
      type: "Core"
    }
  ];

  // useEffect
  useEffect(() => {
    document.title = showSubjects
      ? "Subject Information"
      : "Subjects Hidden";
  }, [showSubjects]);

  return (
    <div>

      <p className="title">
        Welcome to Subject Information
      </p>

      <p>
        Status: {showSubjects
          ? "Subjects available for the semester"
          : "Subjects are hidden"}
      </p>

      <p>
        Total Subjects: {subjects.length}
      </p>

      <button onClick={() => setShowSubjects(!showSubjects)}>
        {showSubjects ? "Hide Subjects" : "Show Subjects"}
      </button>

      {showSubjects && (
        <div>
          {subjects.map((subject, index) => (
            <Subject
              key={index}
              name={subject.name}
              code={subject.code}
              faculty={subject.faculty}
              department={subject.department}
              credits={subject.credits}
              semester={subject.semester}
              type={subject.type}
            />
          ))}
        </div>
      )}

    </div>
  );
}

export default App;