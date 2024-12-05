// Dashboard.jsx
import React, { useState } from 'react';
import {
  Users,
  BookOpen,
  Calendar,
  Bell,
  CheckSquare,
  BarChart3,
  HelpCircle,
  ChevronDown,
  Plus
} from 'lucide-react';

// Sample data
const sampleStudents = {
  '5A': [
    { id: 1, name: 'Rahul Kumar', attendance: 92, marks: { maths: 85, science: 78, english: 88 } },
    { id: 2, name: 'Priya Singh', attendance: 88, marks: { maths: 92, science: 85, english: 90 } },
    // Add more students as needed
  ],
  '6B': [
    { id: 3, name: 'Amit Sharma', attendance: 95, marks: { maths: 76, science: 82, english: 85 } },
    { id: 4, name: 'Neha Patel', attendance: 90, marks: { maths: 88, science: 90, english: 87 } },
  ]
};

const sampleNotices = [
  { id: 1, title: 'Parent-Teacher Meeting', date: '2024-12-10', content: 'PTM scheduled for all classes' },
  { id: 2, title: 'Annual Sports Day', date: '2024-12-15', content: 'Annual sports day preparations' },
];

const Dashboard = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [activeTab, setActiveTab] = useState('overview');

  const classes = ['5', '6', '7', '8', '9', '10'];
  const sections = ['A', 'B', 'C'];

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Bell className="h-6 w-6 text-gray-500 cursor-pointer" />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  T
                </div>
                <span className="text-gray-700">Ms. Sharma</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Class Selection */}
        <div className="mb-6 flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Class</label>
            <div className="relative">
              <select
                className="block w-full p-2 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
              >
                <option value="">Select Class</option>
                {classes.map((cls) => (
                  <option key={cls} value={cls}>Class {cls}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-3 h-4 w-4 text-gray-500" />
            </div>
          </div>

          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Section</label>
            <div className="relative">
              <select
                className="block w-full p-2 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value)}
              >
                <option value="">Select Section</option>
                {sections.map((section) => (
                  <option key={section} value={section}>Section {section}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-3 h-4 w-4 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm text-gray-500">Total Students</p>
                <p className="text-2xl font-semibold">45</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <CheckSquare className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm text-gray-500">Average Attendance</p>
                <p className="text-2xl font-semibold">92%</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <BarChart3 className="h-8 w-8 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm text-gray-500">Class Performance</p>
                <p className="text-2xl font-semibold">85%</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-orange-500" />
              <div className="ml-4">
                <p className="text-sm text-gray-500">Working Days</p>
                <p className="text-2xl font-semibold">22</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {['overview', 'attendance', 'marks', 'notices', 'questions'].map((tab) => (
                <button
                  key={tab}
                  className={`
                    py-4 px-1 border-b-2 font-medium text-sm
                    ${activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                  `}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {activeTab === 'overview' && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Class Overview</h3>
              {/* Add overview content */}
            </div>
          )}

          {activeTab === 'attendance' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Attendance Register</h3>
                <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  <Plus className="h-4 w-4 mr-2" />
                  Mark Attendance
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Roll No
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {/* Add attendance rows */}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'marks' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Exam Marks</h3>
                <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Marks
                </button>
              </div>
              {/* Add marks content */}
            </div>
          )}

          {activeTab === 'notices' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Notices</h3>
                <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Notice
                </button>
              </div>
              <div className="space-y-4">
                {sampleNotices.map((notice) => (
                  <div key={notice.id} className="p-4 border rounded-md">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-md font-medium">{notice.title}</h4>
                        <p className="text-sm text-gray-500">{notice.content}</p>
                      </div>
                      <span className="text-sm text-gray-500">{notice.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'questions' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Questions Bank</h3>
                <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Question
                </button>
              </div>
              {/* Add questions content */}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;