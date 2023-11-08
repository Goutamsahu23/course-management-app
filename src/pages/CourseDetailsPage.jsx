import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import StudentRegistrationForm from '../components/StudentRegistrationForm';

const CourseDetailsPage = ({ courseData }) => {
    const { id } = useParams();
    const course = courseData.find(course => course.id === parseInt(id, 10)); // Find the course with the matching ID
    const [selectedWeek, setSelectedWeek] = useState(null);


    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

    const onRegister = (studentDetails) => {
        console.log('Register button clicked');
        // Handle student registration logic here
        console.log('Student registered:', studentDetails);
        setIsRegistrationOpen(false);
    };

    console.log('isRegistrationOpen:', isRegistrationOpen);








    if (!course) {
        return <div>Course not found</div>; // Handle the case where the course is not found
    }

    const {
        name,
        instructor,
        description,
        enrollmentStatus,
        thumbnail,
        duration,
        schedule,
        location,
        prerequisites,
        syllabus,
        students,
    } = course;


    const handleWeekClick = (week) => {
        setSelectedWeek(week);
    };

    return (
        <div className="w-full  mx-auto p-4 bg-white rounded shadow-lg flex mt-20">
            <div className="w-1/3 mr-4">
                <img src={thumbnail} alt={`Thumbnail for ${name}`} className="w-full h-full rounded-lg" />
            </div>
            <div className="w-2/3 flex items-baseline flex-col">
                <h1 className="text-3xl font-bold mb-2 text-blue-500">{name}</h1>
                <p className="mb-2"><strong className="font-semibold">Instructor:</strong> {instructor}</p>
                <p className="mb-2"><strong className="font-semibold">Description:</strong> {description}</p>
                <p className="mb-2"><strong className="font-semibold">Enrollment Status:</strong> {enrollmentStatus}</p>
                <p className="mb-2"><strong className="font-semibold">Duration:</strong> {duration}</p>
                <p className="mb-2"><strong className="font-semibold">Schedule:</strong> {schedule}</p>
                <p className="mb-2"><strong className="font-semibold">Location:</strong> {location}</p>
                <p className="mb-2"><strong className="font-semibold">Prerequisites:</strong></p>
                <ul className="list-none ml-6 mb-2">
                    {prerequisites.map((prerequisite, index) => (
                        <li key={index} className='flex '>{prerequisite}</li>
                    ))}
                </ul>
                <h2 className="text-xl font-semibold mb-2">Syllabus</h2>
                <ul className="list-none ml-6 mb-4 flex flex-col items-baseline">
                    {syllabus.map(item => (
                        <li key={item.week} className="mb-2">
                            <div
                                className={`week-dropdown cursor-pointer ${selectedWeek === item.week ? 'text-blue-500' : 'text-black'}`}
                                onClick={() => handleWeekClick(item.week)}
                            >
                                Week {item.week}
                                {selectedWeek === item.week && <div className="ml-4">{item.content}</div>}
                            </div>
                        </li>
                    ))}
                </ul>
                {enrollmentStatus === 'Closed' ? (
          <p className="text-red-500 font-semibold mb-4">Enrollment is closed</p>
        ) : (
          <Link to={`/courses/${course.id}/new-student`}>
            <button
              onClick={() => setIsRegistrationOpen(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
            >
              Register for this course
            </button>
          </Link>
        )}

            </div>
        </div>


    );
};

export default CourseDetailsPage;
