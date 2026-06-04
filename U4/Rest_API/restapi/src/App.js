
import React, { useState } from "react";
import "./App.css"
import ApiExample from './components/ApiExample';
import CreateData from './components/CreateData';
import DisplayData from "./components/DisplayData";
import UpdateData from "./components/UpdateData";
import DeleteData from "./components/DeleteData";

function App(){
  return(
    <div className="App">
      <header className="App-header">
        REST API - Access and Manipulate resources
      </header>
      <ApiExample/>
      <CreateData/>
      <DisplayData/>
      <UpdateData/>
      <DeleteData/>
    </div>
  )
}
export default App;



















// import React, { useState } from "react";

// // Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";

// // React Router
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

// // Bootstrap Components
// import {
//   Container,
//   Row,
//   Col,
//   Alert,
//   Modal,
//   Button,
// } from "react-bootstrap";

// // Components
// import NavigationBar from "./components/NavigationBar";
// import StudentForm from "./components/StudentForm";

// import Home from "./components/Home";
// import Students from "./components/Students";
// import Contact from "./components/Contact";

// function App() {

//   // Alert State
//   const [showAlert, setShowAlert] = useState(false);

//   // Modal State
//   const [showModal, setShowModal] = useState(false);

//   // Student Data State
//   const [student, setStudent] = useState({
//     name: "",
//     course: "",
//   });

//   // Function to Receive Data from Child Component
//   const getStudentData = (name, course) => {

//     // Update Student State
//     setStudent({
//       name: name,
//       course: course,
//     });

//     // Show Alert and Modal
//     setShowAlert(true);
//     setShowModal(true);
//   };

//   return (
//     <BrowserRouter>
//       <div>
//         {/* Navigation Bar */}
//         <NavigationBar title="React Bootstrap App" />
//         {/* Page Content */}
//         <Container>
//           <Routes>
//             {/* Home Page */}
//             <Route
//               path="/"
//               element={<Home />}
//             />

//             {/* Students Page */}
//             <Route
//               path="/students"
//               element={
//                 <div>
//                   <Students />
//                   <Row className="justify-content-center">
//                     <Col>
//                       {/* Success Alert */}
//                       {
//                         showAlert &&
//                         <Alert
//                           variant="success"
//                           dismissible
//                           onClose={() => setShowAlert(false)}
//                         >
//                           Student Registered Successfully!
//                         </Alert>
//                       }
//                       {/* Student Form */}
//                       <StudentForm
//                         getStudentData={getStudentData}
//                       />
//                     </Col>
//                   </Row>
//                 </div>
//               }
//             />

//             {/* Contact Page */}
//             <Route
//               path="/contact"
//               element={<Contact />}
//             />

//           </Routes>

//         </Container>

//         {/* Modal */}
//         <Modal
//           show={showModal}
//           onHide={() => setShowModal(false)}
//         >
//           {/* Modal Header */}
//           <Modal.Header closeButton>
//             <Modal.Title>
//               Student Details
//             </Modal.Title>
//           </Modal.Header>

//           {/* Modal Body */}
//           <Modal.Body>
//             <h5>
//               Name : {student.name}
//             </h5>
//             <h5>
//               Course : {student.course}
//             </h5>
//           </Modal.Body>

//           {/* Modal Footer */}
//           <Modal.Footer>
//             <Button
//               variant="secondary"
//               onClick={() => setShowModal(false)}
//             >
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;