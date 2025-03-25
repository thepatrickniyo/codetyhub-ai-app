"use client"
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  GraduationCap, 
  Users, 
  MessageCircle, 
  Settings, 
  Sparkles 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';

export default function DashboardSidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const sidebarItems = [
    { 
      icon: LayoutDashboard, 
      label: 'Dashboard',
      onClick: () => setActiveItem('Dashboard')
    },
    { 
      icon: GraduationCap, 
      label: 'Courses',
      onClick: () => setActiveItem('Courses')
    },
    { 
      icon: Users, 
      label: 'Mentors',
      onClick: () => setActiveItem('Mentors')
    },
    { 
      icon: MessageCircle, 
      label: 'Messages',
      onClick: () => setActiveItem('Messages')
    },
    { 
      icon: Settings, 
      label: 'Settings',
      onClick: () => setActiveItem('Settings')
    }
  ];

  return (
    <section className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo Section */}
      <div className="h-20 pb-4 flex items-center justify-center  ">
        <label className='relative cursor-pointer'>
            <Image src="/assets/logo-3.svg" alt="CodetyHub AI App" width={200} draggable={false} height={100}  />
            <label className='left-11 top-32 text-xs text-blue-700 cursor-pointer hidden absolute md:block font-semibold'>Codetyhub AI App</label>
        </label>
      </div>

      {/* Navigation Items */}
      <nav className="flex-grow px-4 py-6 space-y-2">
        {sidebarItems.map((item) => (
          <Button
            key={item.label}
            variant={activeItem === item.label ? 'secondary' : 'ghost'}
            className="w-full justify-start px-4 py-2 text-left"
            onClick={item.onClick}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.label}
          </Button>
        ))}
      </nav>

      {/* Upgrade to Pro Card */}
      <div className="p-4">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-none">
          <CardContent className="pt-6 text-center">
            <div className="flex justify-center mb-4">
              <Sparkles className="text-blue-600 h-10 w-10" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Upgrade to Pro
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Unlock exclusive features and take your learning to the next level!
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="default">
              Upgrade Now
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}