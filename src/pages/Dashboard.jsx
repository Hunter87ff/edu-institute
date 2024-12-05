// Dashboard.jsx
import React from 'react';
import { 
  Users, 
  GraduationCap, 
  Calendar, 
  Bell, 
  HelpCircle,
  PieChart,
  BookOpen,
  ClipboardList
} from 'lucide-react';

// Sample data
const attendanceData = {
  present: 85,
  absent: 10,
  leave: 5,
  totalStudents: 45
};

const examData = [
  { subject: 'Mathematics', averageScore: 78, totalStudents: 45, passed: 40 },
  { subject: 'Science', averageScore: 82, totalStudents: 45, passed: 42 },
  { subject: 'English', averageScore: 75, totalStudents: 45, passed: 38 }
];

const notices = [
  { id: 1, title: 'Parent-Teacher Meeting', date: '2024-12-10', priority: 'High' },
  { id: 2, title: 'Annual Sports Day', date: '2024-12-15', priority: 'Medium' },
  { id: 3, title: 'Winter Break Schedule', date: '2024-12-20', priority: 'Normal' }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800">Teacher Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600" />
              <div className="flex items-center space-x-2">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-gray-700">Mrs. Sharma</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Students"
            value="45"
            icon={<Users className="w-6 h-6" />}
            color="blue"
          />
          <StatCard
            title="Average Attendance"
            value="85%"
            icon={<Calendar className="w-6 h-6" />}
            color="green"
          />
          <StatCard
            title="Classes Today"
            value="6"
            icon={<BookOpen className="w-6 h-6" />}
            color="purple"
          />
          <StatCard
            title="Pending Tasks"
            value="3"
            icon={<ClipboardList className="w-6 h-6" />}
            color="yellow"
          />
        </div>

        {/* Attendance and Exam Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <AttendanceCard data={attendanceData} />
          <ExamCard data={examData} />
        </div>

        {/* Notices Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Notices</h2>
          <div className="space-y-4">
            {notices.map(notice => (
              <NoticeItem key={notice.id} notice={notice} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

// Component for statistics cards
const StatCard = ({ title, value, icon, color }) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    yellow: 'bg-yellow-100 text-yellow-600'
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center">
        <div className={`${colorClasses[color]} p-3 rounded-full`}>
          {icon}
        </div>
        <div className="ml-4">
          <h3 className="text-gray-500 text-sm">{title}</h3>
          <p className="text-2xl font-semibold text-gray-800">{value}</p>
        </div>
      </div>
    </div>
  );
};

// Component for attendance card
const AttendanceCard = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Today's Attendance</h2>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-green-100 p-4 rounded-lg">
          <p className="text-2xl font-bold text-green-600">{data.present}%</p>
          <p className="text-sm text-gray-600">Present</p>
        </div>
        <div className="bg-red-100 p-4 rounded-lg">
          <p className="text-2xl font-bold text-red-600">{data.absent}%</p>
          <p className="text-sm text-gray-600">Absent</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <p className="text-2xl font-bold text-yellow-600">{data.leave}%</p>
          <p className="text-sm text-gray-600">On Leave</p>
        </div>
      </div>
    </div>
  );
};

// Component for exam card
const ExamCard = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Exam Performance</h2>
      <div className="space-y-4">
        {data.map((subject, index) => (
          <div key={index} className="border-b pb-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">{subject.subject}</span>
              <span className="font-semibold">{subject.averageScore}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 rounded-full h-2"
                style={{ width: `${subject.averageScore}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component for notice items
const NoticeItem = ({ notice }) => {
  const priorityColors = {
    High: 'bg-red-100 text-red-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Normal: 'bg-green-100 text-green-800'
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center space-x-4">
        <Bell className="w-5 h-5 text-gray-500" />
        <div>
          <p className="font-medium text-gray-800">{notice.title}</p>
          <p className="text-sm text-gray-500">{notice.date}</p>
        </div>
      </div>
      <span className={`px-3 py-1 rounded-full text-sm ${priorityColors[notice.priority]}`}>
        {notice.priority}
      </span>
    </div>
  );
};

export default Dashboard;