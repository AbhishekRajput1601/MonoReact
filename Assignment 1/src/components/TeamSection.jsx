import React from 'react';
import MemberRow from './MemberRow';

const TeamSection = ({ department, members }) => {

  const sortedMembers = [...members].sort((a, b) => b.experience - a.experience);

  const getBadgeColor = (count) => {
    if (count >= 3) return 'bg-green-100 text-green-700';
    if (count === 2) return 'bg-amber-100 text-amber-700';
    return 'bg-red-100 text-red-700';
  };

  if (sortedMembers.length === 0) {
    return (
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 text-center text-gray-500">
            <p className="font-medium">No members in this department</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8">
     
      <div className="flex items-center justify-between mb-4 px-1">
        <h2 className="text-xl font-bold text-gray-900">
          {department}
          <span className="text-gray-500 font-normal mx-2">·</span>
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getBadgeColor(sortedMembers.length)}`}>
            {sortedMembers.length} member{sortedMembers.length !== 1 ? 's' : ''}
          </span>
        </h2>
      </div>

      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {sortedMembers.map((member) => (
          <MemberRow
            key={member.id}
            name={member.name}
            role={member.role}
            experience={member.experience}
            initials={member.initials}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;