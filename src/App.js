import { useEffect, useState } from 'react';
import './App.css';
import CourseListingPage from './pages/CourseListingPage';
import  Axios  from 'axios';
import { Route,Router, Routes } from 'react-router-dom';
import CourseDetailsPage from './pages/CourseDetailsPage';
import StudentRegistrationForm from './components/StudentRegistrationForm';
import StudentDashboardPage from './pages/StudentDashboardPage'
import NavBar from './components/NavBar';

function App() {

  const [courseData, setCourseData] = useState([]);
  const [studentData,setStudentData]=useState([]);

  const fetchCourseData = async () => {
    try {
      const response = await Axios.get('http://localhost:5000/courses'); 
      console.log(response);
      setCourseData(response.data);
    } catch (error) {
      console.error('Error fetching course data: ', error);
    }
  };

  const fetchStudentData = async () => {
    try {
      const response = await Axios.get('http://localhost:5000/students'); 
      setStudentData(response.data);
    } catch (error) {
      console.error('Error fetching course data: ', error);
    }
  };



  useEffect(() => {
    fetchCourseData(); 
    fetchStudentData();
  }, []); 
  return (
    <div className="App">
      <NavBar  />
      <Routes>
        <Route  path="/" element={ <CourseListingPage courseData={courseData} />} />
        <Route path="/courses/:id" element={<CourseDetailsPage courseData={courseData} />} />
        <Route path="/courses/:id/new-student" element={<StudentRegistrationForm/>} />
       
        <Route path="/studentDashboard/:id" element={<StudentDashboardPage studentData={studentData} courseData={courseData}/>}/>
      </Routes>
    </div>
  );
}

export default App;
