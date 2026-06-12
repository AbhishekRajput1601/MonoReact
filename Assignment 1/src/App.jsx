// import Resume from "./Resume";

// export default function App() {
//   return <Resume />;
// }

import React from 'react';
import { employees } from './data/employees';
import TeamSection from './components/TeamSection';

function App() {
  
  const departments = ['Engineering', 'Design', 'Product'];

  const filterByDepartment = (department) => {
    return employees.filter((emp) => emp.department === department);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
   
      <header className=" bg-blue-500 shadow-sm sticky top-0 z-50 ml-72 mr-72">
        <div className="max-w-8xl mx-auto px-6 py-5">
          <h1 className="text-3xl font-bold text-white">
            TechNova — Team Directory
          </h1>
          <p className="text-white text-lg mt-2">
            {employees.length} employees across {departments.length} departments
          </p>
        </div>
      </header>

    
      <main className="max-w-6xl mx-auto px-6 py-12">
        {departments.map((department) => (
          <TeamSection
            key={department}
            department={department}
            members={filterByDepartment(department)}
          />
        ))}
      </main>
    </div>
  );
}

export default App;