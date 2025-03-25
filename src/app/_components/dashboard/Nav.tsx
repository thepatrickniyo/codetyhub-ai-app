"use client"
import React from 'react';
import { 
  Bell, 
  User, 
  Settings, 
  CreditCard, 
  HelpCircle, 
  LogOut 
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';

export default function DashboardNav() {
  const router = useRouter();

  const handleLogout = () => {
    // Here you would typically:
    // 1. Clear authentication token
    // 2. Clear any user session data
    // For now, we'll just redirect to home page
    router.push('/');
  };

  return (
    <header className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Hi, Patrick</h1>
        <p className="text-gray-500">Welcome back to your learning journey!</p>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <Bell className="h-6 w-6 text-gray-600 cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
            3
          </span>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="/path/to/profile-image.jpg" alt="Patrick" />
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mr-4">
            <DropdownMenuLabel>
              <div className="flex items-center space-x-2">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/path/to/profile-image.jpg" alt="Patrick" />
                  <AvatarFallback>
                    <User />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Patrick Johnson</p>
                  <p className="text-xs text-gray-500">patrick@example.com</p>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Account Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>Help & Support</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              className="text-red-600 focus:text-red-600"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}