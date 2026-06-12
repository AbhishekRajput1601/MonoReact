import React from 'react';

const MemberRow = ({ name, role, experience, initials }) => {
  const avatarColors = [
    'bg-blue-500',
    'bg-purple-500',
    'bg-green-500',
    'bg-red-500',
    'bg-yellow-500',
    'bg-pink-500',
    'bg-indigo-500',
  ];

  const colorIndex = initials.charCodeAt(0) % avatarColors.length;
  const bgColor = avatarColors[colorIndex];

  return (
    <div className="flex items-center gap-4 p-4 bg-white border-b border-gray-200 hover:bg-gray-50 transition-colors">
      
      <div className={`${bgColor} w-12 h-12 rounded-lg flex items-center justify-center shrink-0`}>

        <span className="text-white font-semibold text-sm">{initials}</span>
      </div>

      <div className="grow min-w-0">
        <h3 className="font-semibold text-gray-900 text-sm">{name}</h3>
        <p className="text-gray-600 text-sm">{role}</p>
      </div>

     
      <div className="shrink-0 text-right">
        <p className="text-gray-700 text-sm font-medium">
          {experience} yr{experience !== 1 ? 's' : ''} exp
        </p>
      </div>

      <div className="shrink-0 text-gray-400">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default MemberRow;