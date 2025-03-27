"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Star, 
  BookOpen, 
  UserPlus 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// Define types for strong typing
type Specialty = 'Web Development' | 'Data Science' | 'UI/UX Design' | 'Machine Learning' | 'Business Strategy';

interface Mentor {
  id: number;
  name: string;
  avatar: string;
  specialty: Specialty;
  rating: number;
  courseCount: number;
  followers: number;
  isFollowed: boolean;
}

// Sample mentor data with strong typing
const mentorsData: Mentor[] = [
  {
    id: 1,
    name: "Emily Rodriguez",
    avatar: "/api/placeholder/200/200",
    specialty: "Web Development",
    rating: 4.9,
    courseCount: 12,
    followers: 5420,
    isFollowed: false
  },
  {
    id: 2,
    name: "Alex Thompson",
    avatar: "/api/placeholder/200/200",
    specialty: "Data Science",
    rating: 4.7,
    courseCount: 8,
    followers: 3210,
    isFollowed: false
  },
  {
    id: 3,
    name: "Sarah Chen",
    avatar: "/api/placeholder/200/200",
    specialty: "UI/UX Design",
    rating: 4.8,
    courseCount: 15,
    followers: 6540,
    isFollowed: false
  },
  {
    id: 4,
    name: "Michael Kim",
    avatar: "/api/placeholder/200/200",
    specialty: "Machine Learning",
    rating: 4.6,
    courseCount: 10,
    followers: 4230,
    isFollowed: false
  },
    {
        id: 5,
        name: "Jessica Lee",
        avatar: "/api/placeholder/200/200",
        specialty: "Business Strategy",
        rating: 4.5,
        courseCount: 6,
        followers: 2890,
        isFollowed: false
    },
    {
        id: 6,
        name: "David Smith",
        avatar: "/api/placeholder/200/200",
        specialty: "Web Development",
        rating: 4.9,
        courseCount: 14,
        followers: 7320,
        isFollowed: false
    },
    {
        id: 7,
        name: "Olivia Brown",
        avatar: "/api/placeholder/200/200",
        specialty: "Data Science",
        rating: 4.8,
        courseCount: 9,
        followers: 4100,
        isFollowed: false
    }
];

const MentorCard: React.FC<{ 
  mentor: Mentor, 
  onFollowToggle: (id: number) => void 
}> = ({ mentor, onFollowToggle }) => {
  const getSpecialtyColor = (specialty: Specialty) => {
    const colorMap: Record<Specialty, string> = {
      'Web Development': 'bg-blue-100 text-blue-800',
      'Data Science': 'bg-green-100 text-green-800',
      'UI/UX Design': 'bg-purple-100 text-purple-800',
      'Machine Learning': 'bg-red-100 text-red-800',
      'Business Strategy': 'bg-yellow-100 text-yellow-800'
    };
    return colorMap[specialty];
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 transition-all duration-300 hover:shadow-lg border border-gray-100">
      <div className="flex items-center mb-4">
        <Avatar className="w-16 h-16 mr-4 border-2 border-gray-200">
          <AvatarImage src={mentor.avatar} alt={mentor.name} />
          <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{mentor.name}</h3>
          <Badge className={`${getSpecialtyColor(mentor.specialty)} mt-1`}>
            {mentor.specialty}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 border-t pt-3 mb-4">
        <div className="flex flex-col items-center">
          <Star className="text-yellow-500 mb-1" size={18} />
          <span className="text-sm font-medium text-gray-600">{mentor.rating}</span>
        </div>
        <div className="flex flex-col items-center">
          <BookOpen className="text-gray-500 mb-1" size={18} />
          <span className="text-sm font-medium text-gray-600">{mentor.courseCount} Courses</span>
        </div>
        <div className="flex flex-col items-center">
          <UserPlus className="text-gray-500 mb-1" size={18} />
          <span className="text-sm font-medium text-gray-600">{mentor.followers}</span>
        </div>
      </div>

      <Button 
        variant={mentor.isFollowed ? "outline" : "default"}
        className="w-full"
        onClick={() => onFollowToggle(mentor.id)}
      >
        {/* {mentor.isFollowed ? "Following" : "Follow"} */}
        Book a Session
      </Button>
    </div>
  );
};

export default function DashboardMentorsGrid() {
  const [mentors, setMentors] = useState<Mentor[]>(mentorsData);

  const handleFollowToggle = (id: number) => {
    setMentors(prevMentors => 
      prevMentors.map(mentor => 
        mentor.id === id 
          ? { ...mentor, isFollowed: !mentor.isFollowed } 
          : mentor
      )
    );
  };

  return (
    <div className="grid grid-cols-4 gap-6">
      {mentors.map(mentor => (
        <MentorCard 
          key={mentor.id} 
          mentor={mentor} 
          onFollowToggle={handleFollowToggle}
        />
      ))}
    </div>
  );
}