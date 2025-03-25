"use client"
import React from 'react';
import { 
  BookOpen, 
  Clock, 
  Trophy 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import MentorsCard from '@/app/_components/dashboard/MentorsCard';
import DashboardNav from '@/app/_components/dashboard/Nav';

export default function Dashboard() {
  // Sample data for charts and courses
  const learningProgressData = [
    { name: 'Week 1', progress: 40 },
    { name: 'Week 2', progress: 65 },
    { name: 'Week 3', progress: 55 },
    { name: 'Week 4', progress: 80 },
  ];

  const courseData = [
    {
      id: 1,
      title: 'Advanced React Development',
      instructor: 'John Smith',
      progress: 65,
      duration: '4 weeks'
    },
    {
      id: 2,
      title: 'Machine Learning Fundamentals',
      instructor: 'Emily Chen',
      progress: 35,
      duration: '6 weeks'
    },
    {
      id: 3,
      title: 'Digital Marketing Strategies',
      instructor: 'Michael Wong',
      progress: 45,
      duration: '5 weeks'
    }
  ];

  return (
    <main className="p-6 bg-gray-50 min-h-screen h-screen overflow-y-auto bg w-full">
      {/* Top Header Section */}
      <DashboardNav />
      {/* Statistics Section */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Learning Progress</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={120}>
              <LineChart data={learningProgressData}>
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="progress" 
                  stroke="#8884d8" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="text-2xl font-bold text-blue-600">65%</div>
            <p className="text-xs text-gray-500">Overall Learning Progress</p>
          </CardContent>
        </Card>

        <Card className='h-[max-content]'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">42h</div>
            <p className="text-xs text-gray-500">This Month</p>
          </CardContent>
        </Card>

        <Card className='h-[max-content]'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Achievements</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">7</div>
            <p className="text-xs text-gray-500">Completed Courses</p>
          </CardContent>
        </Card>
      </div>

      <section className='flex flex-col gap-6'>
      {/* Mentors section  */}
      <MentorsCard />

      {/* Courses Section */}
      <Card>
        <CardHeader>
          <CardTitle>Your Courses</CardTitle>
        </CardHeader>
        <CardContent>
          {courseData.map((course) => (
            <div 
              key={course.id} 
              className="flex items-center justify-between p-4 border-b hover:bg-gray-100 transition"
            >
              <div>
                <h3 className="font-semibold text-gray-800">{course.title}</h3>
                <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-24 bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{width: `${course.progress}%`}}
                  ></div>
                </div>
                <span className="text-sm text-gray-600">{course.progress}%</span>
                <span className="text-sm text-gray-500">{course.duration}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
     </section>
    </main>
  );
}