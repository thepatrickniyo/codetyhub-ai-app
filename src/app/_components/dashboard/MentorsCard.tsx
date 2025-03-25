"use client"
import React from 'react';
import { 
  Star
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export default function MentorsCard() {
  // Previous existing code remains the same...

  // New mentors data
  const mentorsData = [
    {
      id: 1,
      name: 'Emily Rodriguez',
      specialty: 'Web Development',
      rate: 4.9,
      courses: 12,
      image: '/api/placeholder/200/200',
      hourlyRate: 75
    },
    {
      id: 2,
      name: 'Alex Chen',
      specialty: 'Data Science',
      rate: 4.7,
      courses: 9,
      image: '/api/placeholder/200/200',
      hourlyRate: 85
    },
    {
      id: 3,
      name: 'Michael Thompson',
      specialty: 'UI/UX Design',
      rate: 4.8,
      courses: 15,
      image: '/api/placeholder/200/200',
      hourlyRate: 65
    }
  ];

  return (
    <section className=" ">
      {/* Monthly Mentors Section */}
      <Card className="mt-8">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Top Monthly Mentors</CardTitle>
          <Button variant="outline" size="sm">View All</Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-6">
            {mentorsData.map((mentor) => (
              <div 
                key={mentor.id} 
                className="bg-white border rounded-lg p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <Avatar className="w-16 h-16 mr-4">
                    <AvatarImage src={mentor.image} alt={mentor.name} />
                    <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-gray-800">{mentor.name}</h3>
                    <p className="text-sm text-gray-500">{mentor.specialty}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 text-center border-t pt-3">
                  <div>
                    <div className="flex items-center justify-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="font-bold">{mentor.rate}</span>
                    </div>
                    <p className="text-xs text-gray-500">Rating</p>
                  </div>
                  <div>
                    <div className="font-bold">{mentor.courses}</div>
                    <p className="text-xs text-gray-500">Courses</p>
                  </div>
                  <div>
                    <div className="font-bold">${mentor.hourlyRate}</div>
                    <p className="text-xs text-gray-500">Hourly Rate</p>
                  </div>
                </div>

                <Button className="w-full mt-4" size="sm">Book Session</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}