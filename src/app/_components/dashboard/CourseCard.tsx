import React from 'react';
import Image from 'next/image';
import { Users, BookOpen, Clock, Star } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Author {
  name: string;
  avatar: string;
}

interface Course {
  id: number;
  title: string;
  image: string;
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  level: 'Beginner' | 'Intermediate' | 'Advanced' | string;
  author: Author;
  rating: number;
  students: number;
  modules: number;
  duration: string;
}

// Sample course data - replace with your actual data source
const coursesData: Course[] = [
  {
    id: 1,
    title: "Advanced React Development",
    image: "/assets/react.svg",
    level: "Intermediate",
    author: {
      name: "John Doe",
      avatar: "/api/placeholder/200/200"
    },
    rating: 4.7,
    students: 1245,
    modules: 12,
    duration: "6 weeks"
  },
  {
    id: 2,
    title: "Python for Data Science",
    image: "/assets/python.webp",
    level: "Beginner",
    author: {
      name: "Jane Smith",
      avatar: "/api/placeholder/200/200"
    },
    rating: 4.9,
    students: 2500,
    modules: 8,
    duration: "4 weeks"
  },
  {
    id: 3,
    title: "Advanced Machine Learning",
    image: "/assets/ml.webp",
    level: "Advanced",
    author: {
      name: "Alex Johnson",
      avatar: "/api/placeholder/200/200"
    },
    rating: 4.5,
    students: 876,
    modules: 15,
    duration: "8 weeks"
  }
];

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  const getLevelColor = (level: string) => {
    switch(level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-blue-100 text-blue-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Course Image */}
      <div className="relative h-48 w-full">
        <Image 
          src={course.image} 
          alt={course.title} 
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <Badge 
          className={`absolute top-3 right-3 ${getLevelColor(course.level)}`}
        >
          {course.level}
        </Badge>
      </div>

      {/* Course Details */}
      <div className="p-4">
        {/* Course Title and Author */}
        <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Avatar className="w-8 h-8 mr-2">
              <AvatarImage src={course.author.avatar} alt={course.author.name} />
              <AvatarFallback>
                {course.author.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <label className="text-sm font-medium text-gray-700">
              {course.author.name}
            </label>
          </div>

          <div className="flex items-center">
            <Star className="text-yellow-500 mr-1" size={16} />
            <span className="text-sm text-gray-600">{course.rating}</span>
          </div>
        </div>

        {/* Course Stats */}
        <div className="grid grid-cols-3 gap-2 border-t pt-3">
          <div className="flex items-center">
            <Users className="mr-1 text-gray-500" size={16} />
            <span className="text-sm">{course.students}</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="mr-1 text-gray-500" size={16} />
            <span className="text-sm">{course.modules} Modules</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 text-gray-500" size={16} />
            <span className="text-sm">{course.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardCoursesGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {coursesData.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default DashboardCoursesGrid;
