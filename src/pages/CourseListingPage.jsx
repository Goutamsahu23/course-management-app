import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };


const CourseListingPage = ({ courseData }) => {

    const [searchTerm, setSearchTerm] = useState('');

    const filteredCourses = courseData.filter(
        (course) =>
            course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-2xl mx-auto p-4 mt-10">
            <h1 className="text-3xl font-semibold mb-4">Course List</h1>
            <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                placeholder="Search by course name or instructor"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <motion.ul
    className="container space-y-4"
    variants={container}
    initial="hidden"
    animate="visible"
     >
                {filteredCourses.map((course) => (
                    <motion.li key={course.id} className="item" variants={item}>
                            <CourseCard course={course} />
                    </motion.li>
                ))}
            </motion.ul>
        </div>

    );
};

export default CourseListingPage;
