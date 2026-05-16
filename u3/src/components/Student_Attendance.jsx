import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

class AttendanceTracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: []
    };
  }
componentDidMount() {
    // Simulating async loading
    setTimeout(() => {
      const studentData = [
        { id: 1, name: 'Rahul', status: 'Absent' },
        { id: 2, name: 'Sneha', status: 'Absent' },
        { id: 3, name: 'Kiran', status: 'Absent' }
      ];

      this.setState({ students: studentData });
    }, 1000);
  }

  markAttendance = (id, status) => {
    const updatedStudents = this.state.students.map((student) => {
      if (student.id === id) {
        return { ...student, status: status };
      }
      return student;
    });

    this.setState({ students: updatedStudents });
  };
  
  render() {
    const presentCount = this.state.students.filter(
      (student) => student.status === 'Present'
    ).length;

    return (
      <div>
        <h1>Student Attendance Tracker</h1>

        <h3>Total Present: {presentCount}</h3>

        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {this.state.students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.status}</td>
                <td>
                  <button
                    onClick={() =>
                      this.markAttendance(student.id, 'Present')
                    }
                  >
                    Present
                  </button>

                  <button
                    onClick={() =>
                      this.markAttendance(student.id, 'Absent')
                    }
                  >
                    Absent
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return <AttendanceTracker />;
  }
}

export default App;