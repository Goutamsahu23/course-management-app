import React, { useState } from 'react';
import toast from 'react-hot-toast';

const StudentRegistrationForm = ({ courseId, onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation if needed
    onRegister({ courseId, name, email });
    toast.success("student registered successfully")
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
  <h2 className="text-2xl font-semibold mb-4">Student Registration</h2>
  <form onSubmit={handleSubmit} className="space-y-4">
    <div className="flex flex-col">
      <label htmlFor="name" className="text-sm font-semibold mb-1">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 rounded p-2"
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="email" className="text-sm font-semibold mb-1">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded p-2"
      />
    </div>
    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
      Register
    </button>
  </form>
</div>

  );
};

export default StudentRegistrationForm;
