import React, { useState } from 'react';
import { 
  BookOpen, 
  CheckSquare, 
  FileText, 
  Users, 
  CalendarCheck, 
  Star 
} from 'lucide-react';
import NaavBar from '../../components/block/utility/Naavbar';

const TeacherDashboard = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);

  // Static Data for Classes and Sections
  const classData = {
    5: { sections: ['A', 'B', 'C'] },
    6: { sections: ['A', 'B', 'C'] },
    7: { sections: ['A', 'B', 'C'] },
    8: { sections: ['A', 'B', 'C'] },
    9: { sections: ['A', 'B', 'C'] },
    10: { sections: ['A', 'B', 'C'] }
  };

  // Static Student Data
  const studentData = {
    5: {
      A: [
        { id: 1, name: 'John Doe', rollNo: 101 },
        { id: 2, name: 'Emma Smith', rollNo: 102 }
      ],
      B : [
        { id: 3, name: 'Alex Johnson', rollNo: 103 },
        { id: 4, name: 'Sarah Brown', rollNo: 104 }
      ]
    }
  };

  const [attendance, setAttendance] = useState({});
  const [marks, setMarks] = useState({});
  const [questions, setQuestions] = useState([]);

  const handleAttendance = (studentId, present) => {
    setAttendance(prev => ({
      ...prev,
      [studentId]: present
    }));
  };

  const handleMarkUpdate = (studentId, subject, score) => {
    setMarks(prev => ({
      ...prev,
      [studentId]: { ...prev[studentId], [subject]: score }
    }));
  };

  const addQuestion = (question) => {
    setQuestions(prev => [...prev, question]);
  };

  return (
    <div className="min-h-screen min-w-screen bg-gray-100 p-6 text-gray-900 pt-20">
        <NaavBar />
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">
          Teacher's Dashboard
        </h1>

        {/* Class and Section Selection */}
        <div className="mb-6 grid md:grid-cols-3 gap-4">
          <select 
            className="p-2 border rounded"
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="">Select Class</option>
            {Object.keys(classData).map(cls => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </select>

          {selectedClass && (
            <select 
              className="p-2 border rounded"
              onChange={(e) => setSelectedSection(e.target.value)}
            >
              <option value="">Select Section</option>
              {classData[selectedClass].sections.map(section => (
                <option key={section} value={section}>{section}</option>
              ))}
            </select>
          )}
        </div>

        {/* Attendance Section */}
        {selectedClass && selectedSection && (
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <CalendarCheck className="mr-2 text-blue-600" />
              Attendance
            </h2>
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th>Roll No</th>
                  <th>Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {studentData[selectedClass][selectedSection].map(student => (
                  <tr key={student.id} className="border-b">
                    <td>{student.rollNo}</td>
                    <td>{student.name}</td>
                    <td>
                      <button 
                        onClick={() => handleAttendance(student.id, true)}
                        className="bg-green-500 text-white px-2 py-1 mr-2 rounded"
                      >
                        Present
                      </button>
                      <button 
                        onClick={() => handleAttendance(student.id, false)}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Absent
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Marks Update */}
        {selectedClass && selectedSection && (
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Star className="mr-2 text-yellow-600" />
              Update Marks
            </h2>
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th>Student</th>
                  <th>Math</th>
                  <th>Science</th>
                  <th>English</th>
                </tr>
              </thead>
              <tbody>
                {studentData[selectedClass][selectedSection].map(student => (
                  <tr key={student.id} className="border-b">
                    <td>{student.name}</td>
                    {['Math', 'Science', 'English'].map(subject => (
                      <td key={subject}>
                        <input 
                          type="number" 
                          max="100" 
                          className="w-20 p-1 border rounded"
                          onChange={(e) => handleMarkUpdate(student.id, subject, e.target.value)}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Question Bank */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FileText className="mr-2 text-purple-600" />
            Question Bank
          </h2>
          <div className="mb-4">
            <textarea id='question'
              className="w-full p-2 border rounded"
              placeholder="Enter your question here"
              rows="3"
            ></textarea>
            <button 
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => addQuestion(document.getElementById('question').value)}
            >
              Add Question
            </button>
          </div>

          {questions.length > 0 && (
            <div>
              <h3 className="font-semibold mb-2">Added Questions:</h3>
              <ul>
                {questions.map((q, index) => (
                  <li key={index} className="border-b py-2">{q}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;