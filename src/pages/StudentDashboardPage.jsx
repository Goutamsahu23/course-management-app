import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const StudentDashboardPage = ({ studentData, courseData }) => {

  const [isCourseCompleted, setIsCourseCompleted] = useState(false);
  const [buttonText, setButtonText] = useState('Mark as Completed');
  const [progress, setProgress] = useState(courseData.progress || 0);

  const handleMarkAsCompleted = () => {
    if (!isCourseCompleted) {
      setIsCourseCompleted(true);
      setButtonText('Completed');

      setProgress(100);
      toast.success('Course marked as completed!');
    }


  };

  const ProgressBar = ({ progress }) => {
    return (
      <div className="w-full h-6 bg-gray-300 rounded-full relative">
        <div
          className="h-full bg-green-500 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
        <span className='text-black-900 align-center absolute top-0'>{progress}%</span>
      </div>
    );
  };
  const { id } = useParams();

  // Check if studentData or courseData is empty or null
  if (!studentData || studentData.length === 0 || !courseData || courseData.length === 0) {
    return <div>Loading...</div>; // You can show a loading message or spinner here
  }

  const student = studentData.find(student => student.id === parseInt(id, 10));

  // Check student id  exists or not
  if (!student) {
    return <div>Student not found</div>;
  }

  // find course data
  const course = courseData.find(course => course.name === student.course);

  return (
    <div class="bg-gray-200 p-4 rounded-lg shadow-md flex flex-col items-baseline mt-10">
      <h2 class="text-2xl font-bold mb-2">{student.name}</h2>
      <p class="text-gray-600 mb-2">{student.email}</p>
      <h3>Course Progress</h3>
      <ProgressBar progress={progress} />
      {course && (
        <div class="w-[50%] border border-black p-4 rounded-lg shadow-md mt-4 pt-4 flex flex-col items-baseline">
          <h3 class="text-xl font-semibold mb-2">Course Details:</h3>
          <p class="text-gray-700 mb-2">Course Name: {course.name}</p>
          <p class="text-gray-700 mb-2">Course Description: {course.description}</p>
          <p class="text-gray-700 mb-2">Course instructor: {course.instructor}</p>

          <p class="text-gray-700 mb-2">Course Timing: {course.schedule}</p>
          {!isCourseCompleted ? (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
              onClick={handleMarkAsCompleted}
            >
              {buttonText}
            </button>
          ) : (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
              onClick={handleMarkAsCompleted}
            >
              {buttonText}
            </button>
          )}
        </div>
      )}
    </div>

  );
};

export default StudentDashboardPage;
