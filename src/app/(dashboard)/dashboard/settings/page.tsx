/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client"
import React, { useState } from 'react';
import { 
  User, 
  Lock, 
  Bell, 
  Palette, 
  CreditCard, 
  Shield, 
  Edit2, 
  Upload, 
  Save 
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import DashboardNav from '@/app/_components/dashboard/Nav';

// Settings Sections
const ProfileSettings = () => {
  const [profileData, setProfileData] = useState({
    fullName: "Emily Rodriguez",
    email: "emily.rodriguez@example.com",
    bio: "Passionate web developer and tech enthusiast",
    location: "San Francisco, CA"
  });

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-6">
        <Avatar className="w-24 h-24 border-4 border-blue-500">
          <AvatarImage src="/api/placeholder/200/200" alt="Profile Picture" />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <div>
          <Button variant="outline" className="mb-2">
            <Upload className="mr-2" size={16} /> Upload New Photo
          </Button>
          <p className="text-sm text-gray-500">
            Recommended: Square JPG or PNG, max 5MB
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Full Name</Label>
          <Input 
            value={profileData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
          />
        </div>
        <div>
          <Label>Email Address</Label>
          <Input 
            value={profileData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
        </div>
        <div className="col-span-2">
          <Label>Bio</Label>
          <textarea 
            className="w-full p-2 border rounded-md"
            value={profileData.bio}
            onChange={(e) => handleInputChange('bio', e.target.value)}
            rows={3}
          />
        </div>
        <div>
          <Label>Location</Label>
          <Input 
            value={profileData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

const AccountPreferences = () => {
  const [preferences, setPreferences] = useState({
    language: "en",
    theme: "system",
    timezone: "America/New_York",
    notifications: {
      email: true,
      sms: false,
      pushNotifications: true
    }
  });

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Language</Label>
          <Select 
            value={preferences.language}
            onValueChange={(value) => setPreferences(prev => ({
              ...prev, 
              language: value
            }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Theme</Label>
          <Select 
            value={preferences.theme}
            onValueChange={(value) => setPreferences(prev => ({
              ...prev, 
              theme: value
            }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System Default</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center">
          <Bell className="mr-2" /> Notification Preferences
        </h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>Email Notifications</Label>
            <Switch 
              checked={preferences.notifications.email}
              onCheckedChange={(checked) => setPreferences(prev => ({
                ...prev,
                notifications: {
                  ...prev.notifications,
                  email: checked
                }
              }))}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label>SMS Notifications</Label>
            <Switch 
              checked={preferences.notifications.sms}
              onCheckedChange={(checked) => setPreferences(prev => ({
                ...prev,
                notifications: {
                  ...prev.notifications,
                  sms: checked
                }
              }))}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label>Push Notifications</Label>
            <Switch 
              checked={preferences.notifications.pushNotifications}
              onCheckedChange={(checked) => setPreferences(prev => ({
                ...prev,
                notifications: {
                  ...prev.notifications,
                  pushNotifications: checked
                }
              }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SecuritySettings = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handlePasswordChange = (field: string, value: string) => {
    setPasswords(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <Label>Current Password</Label>
          <Input 
            type="password"
            value={passwords.currentPassword}
            onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
          />
        </div>
        <div>
          <Label>New Password</Label>
          <Input 
            type="password"
            value={passwords.newPassword}
            onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
          />
        </div>
        <div>
          <Label>Confirm New Password</Label>
          <Input 
            type="password"
            value={passwords.confirmPassword}
            onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
          />
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
        <div className="flex items-center mb-2">
          <Shield className="mr-2 text-yellow-600" />
          <h4 className="font-semibold text-yellow-800">Security Recommendations</h4>
        </div>
        <ul className="list-disc list-inside text-yellow-700 text-sm space-y-1">
          <li>Use a unique password with at least 12 characters</li>
          <li>Include uppercase, lowercase, numbers, and symbols</li>
          <li>Avoid using personal information</li>
          <li>Consider using a password manager</li>
        </ul>
      </div>
    </div>
  );
};

export default function DashboardSettingsPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'preferences' | 'security'>('profile');

  const tabs = [
    { 
      id: 'profile', 
      label: 'Profile', 
      icon: <User className="mr-2" />,
      component: <ProfileSettings />
    },
    { 
      id: 'preferences', 
      label: 'Preferences', 
      icon: <Palette className="mr-2" />,
      component: <AccountPreferences />
    },
    { 
      id: 'security', 
      label: 'Security', 
      icon: <Lock className="mr-2" />,
      component: <SecuritySettings />
    }
  ];

  return (
    <main className="p-6 bg-gray-50 min-h-screen h-screen overflow-y-auto bg w-full">
      <nav>
        <DashboardNav />
      </nav>
      <div className="container mx-auto mt-6 bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="flex border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`
                px-6 py-4 flex items-center 
                ${activeTab === tab.id 
                  ? 'border-b-2 border-blue-500 text-blue-600 font-semibold' 
                  : 'text-gray-600 hover:bg-gray-50'}
              `}
              onClick={() => setActiveTab(tab.id as any)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
        <div className="p-8">
          {tabs.find(tab => tab.id === activeTab)?.component}
          <div className="mt-6 flex justify-end">
            <Button>
              <Save className="mr-2" /> Save Changes
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}