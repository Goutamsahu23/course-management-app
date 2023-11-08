import React from 'react'
import { Link } from 'react-router-dom'


const getStatusTag = (enrollmentStatus) => {
  switch (enrollmentStatus) {
    case 'Open':
      return <span className="text-gray-500 border-2 bg-lime-300 ">Active</span>;
    case 'Closed':
      return <span className="text-gray-500 border-2 bg-red-400 ">Inactive</span>;
    case 'In Progress':
      return <span className="text-gray-500 border-2 bg-yellow-300 ">In Progress</span>;
    default:
      return null;
  }
};


const CourseCard = ({ course }) => {
  return (
    <div className="p-4 border border-gray-300 rounded shadow-md flex justify-between">
      <Link to={`/courses/${course.id}`} className="text-blue-500 hover:text-blue-700">
        {course.name}
      </Link>
      {getStatusTag(course.enrollmentStatus)}
    </div>

  )
}

export default CourseCard
