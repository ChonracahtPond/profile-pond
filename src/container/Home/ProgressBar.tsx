import React, { useState } from 'react';

const ProgressBar: React.FC = () => {
  const [skills, setSkills] = useState([
    {
      title: 'HTML',
      percent: 95,
    },
    {
      title: 'CSS',
      percent: 70,
    },
    {
      title: 'Tailwind CSS',
      percent: 90,
    },
    {
      title: 'JavaScript',
      percent: 70,
    },
    {
      title: 'Alpine JS',
      percent: 80,
    },
    {
      title: 'PHP',
      percent: 65,
    },
    {
      title: 'Laravel',
      percent: 75,
    },
  ]);

  const [currentSkill, setCurrentSkill] = useState({
    title: 'HTML',
    percent: 95,
  });

  const circumference = 2 * (22 / 7) * 120;

  return (
    <main className="grid w-full h-[50%] text-gray-100 bg-[#3f4cc0] place-content-center   ">
      <section className="p-6 space-y-6 bg-gray-800 rounded-xl md:grid md:grid-cols-2 md:gap-4 sm:space-y-0 my-10">
        <div className="grid grid-cols-2 gap-6">
          {skills.map((skill) => (
            <button
              key={skill.title}
              onClick={() => setCurrentSkill(skill)}
              className={`px-4 py-2 text-xl text-gray-100 transition bg-blue-600 rounded-md h-14 w-44 hover:bg-blue-700 ${
                currentSkill.title === skill.title ? 'font-bold ring-2 ring-gray-100' : ''
              }`}
            >
              {skill.title}
            </button>
          ))}
        </div>

        <div className=" flex items-center justify-center">
          <svg className="flex  transform -rotate-90 w-72 h-72">
            <circle
              cx="145"
              cy="145"
              r="120"
              stroke="currentColor"
              strokeWidth="30"
              fill="transparent"
              className="text-gray-700"
            />

            <circle
              cx="145"
              cy="145"
              r="120"
              stroke="currentColor"
              strokeWidth="30"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (currentSkill.percent / 100) * circumference}
              className="text-blue-500"
            />
          </svg>
          <span className="absolute text-5xl">{`${currentSkill.percent}%`}</span>
        </div>
      </section>
    </main>
  );
};

export default ProgressBar;


