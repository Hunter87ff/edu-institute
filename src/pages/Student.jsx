import React, { useState } from 'react';
import { 
  User, 
  Book, 
  FileText, 
  Bell, 
  Award, 
  Calendar 
} from 'lucide-react';
import NaavBar from '../components/Naavbar';


const Student = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const studentInfo = {
    personal: {
      name: 'Alok Dip',
      dob: '03 January 2005',
      email: 'dipalok405@gmail.com',
      phone: '+91 9876543210',
      guardianName: 'Mahua Das',
      guardianContact: '+1 (555) 987-6543',
      address: 'Duttapukur, Digha, North 24 Parganas'
    },
    academic: {
      currentClass: '10th Grade',
      section: 'B',
      rollNumber: 'SCH2023-0842',
      previousYearMarks: [
        { subject: 'Mathematics', score: 92 },
        { subject: 'Science', score: 88 },
        { subject: 'English', score: 95 },
        { subject: 'Social Studies', score: 90 }
      ]
    },
    notices: [
      { 
        title: 'Upcoming Science Project', 
        date: '15 Dec 2024', 
        description: 'Submit research project on ecosystem dynamics' 
      },

      
      { 
        title: 'Annual Sports Day', 
        date: '22 Dec 2024', 
        description: 'Mandatory participation for all students' 
      }
    ],
    exams: [
      { 
        subject: 'Mid-Term Mathematics', 
        date: '10 Jan 2025', 
        time: '10:00 AM - 12:00 PM' 
      },
      { 
        subject: 'Science Comprehensive', 
        date: '12 Jan 2025', 
        time: '2:00 PM - 4:00 PM' 
      }
    ]
  };

  const renderTab = () => {
    switch(activeTab) {
      case 'personal':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(studentInfo.personal).map(([key, value]) => (
              <div key={key} className="bg-blue-50 p-4 rounded">
                <h3 className="text-blue-600 font-semibold capitalize">
                  {key.replace(/([A-Z])/g, ' $1')}
                </h3>
                <p className="text-gray-700">{value}</p>
              </div>
            ))}
          </div>
        );
      case 'academic':
        return (
          <div>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {Object.entries(studentInfo.academic)
                .filter(([key]) => key !== 'previousYearMarks')
                .map(([key, value]) => (
                  <div key={key} className="bg-blue-50 p-4 rounded">
                    <h3 className="text-blue-600 font-semibold capitalize">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </h3>
                    <p className="text-gray-700">{value}</p>
                  </div>
                ))}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Previous Year Marks</h3>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="p-3 text-left">Subject</th>
                    <th className="p-3 text-right">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {studentInfo.academic.previousYearMarks.map((mark) => (
                    <tr key={mark.subject} className="border-b">
                      <td className="p-3">{mark.subject}</td>
                      <td className="p-3 text-right">{mark.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'notices':
        return (
          <div>
            {studentInfo.notices.map((notice, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-blue-600 font-semibold">{notice.title}</h3>
                  <span className="text-sm text-gray-600">{notice.date}</span>
                </div>
                <p className="text-gray-700">{notice.description}</p>
              </div>
            ))}
          </div>
        );
      case 'exams':
        return (
          <div>
            {studentInfo.exams.map((exam, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-blue-600 font-semibold">{exam.subject}</h3>
                  <span className="text-sm text-gray-600">{exam.date}</span>
                </div>
                <p className="text-gray-700">{exam.time}</p>
              </div>
            ))}
          </div>
        );
    }
  };

  const tabItems = [
    { key: 'personal', icon: <User />, label: 'Personal Details' },
    { key: 'academic', icon: <Book />, label: 'Academic Details' },
    { key: 'notices', icon: <Bell />, label: 'Notices' },
    { key: 'exams', icon: <FileText />, label: 'Exam Schedule' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 pb-20">
        <NaavBar />
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">
          Student Dashboard
        </h1>

        <div className="bg-white shadow-md rounded-lg">
          <div className="flex border-b">
            {tabItems.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center p-4 ${
                  activeTab === tab.key 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {tab.icon}
                <span className="ml-2 hidden md:block">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="p-6">
            {renderTab()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;