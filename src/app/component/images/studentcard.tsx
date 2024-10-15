import React from 'react';

interface StudentProps {
  name: string;
  age: number;
  rollNumber: string;
  studentClass: string;
  imageUrl: string; // New prop for the image URL
}

const StudentCard: React.FC<StudentProps> = ({ name, age, rollNumber, studentClass, imageUrl }) => {
  return (
    <div className="bg-pink-400 shadow-2xl rounded-lg p-6 m-4 w-full sm:w-64 hover:shadow-md transition-shadow duration-150 transform hover:-translate-y-0.5 " >
      <img src={imageUrl} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4" />
      <h2 className="text-lg font-bold mb-2">{name}</h2>
      <p className="text-pink-900">Age: {age}</p>
      <p className="text-pink-900">Roll Number: {rollNumber}</p>
      <p className="text-pink-900">Class: {studentClass}</p>
    </div>
  );
};

export default StudentCard;
=
