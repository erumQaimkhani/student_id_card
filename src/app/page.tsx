import React from 'react';
import StudentCard from './component/images/studentcard';
import Link from 'next/link';

const students = [
  {
    name: 'Erum Azeemi Qaimkhani',
    age: 42,
    rollNumber: 'A001',
    studentClass: <Link href={"https://www.linkedin.com/in/erum-qaimkhani-529aa4234/"}>GIAIC</Link>,
    imageUrl: 'https://th.bing.com/th/id/OIP.STudQX8w8WgTiHcAmDfvQwHaKf?pid=ImgDet&w=178&h=252&c=7&dpr=1.5', // Example image URL
  },
  {
    name: 'Munawar Naveed Azeemi',
    age: 19,
    rollNumber: 'A002',
    studentClass: 'GIAIC',
    imageUrl: './munawar.webp',
  },
  {
    name: 'Kiran Naveed Azeemi',
    age: 17,
    rollNumber: 'A004',
    studentClass: <Link href="https:github.com/erumQaimkhani/erumproject.git">GIAIC,</Link>,
    imageUrl: './kiran.jpg',
  },
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {students.map((student) => (
        <StudentCard
          key={student.rollNumber}
          name={student.name}
          age={student.age}
          rollNumber={student.rollNumber}
          studentClass={student.studentClass}
          imageUrl={student.imageUrl} // Pass the imageUrl prop
        />
      ))}
    </div>
  );
};

export default Home;


