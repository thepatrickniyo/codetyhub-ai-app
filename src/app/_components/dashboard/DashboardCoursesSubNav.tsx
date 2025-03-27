/* eslint-disable @typescript-eslint/no-empty-function */
"use client"
import React, { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const DashboardCoursesSubNav = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Dropdown state for filters
  const [levelOpen, setLevelOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [sortByOpen, setSortByOpen] = useState(false);

  // Filter options
  const levelOptions = ['Beginner', 'Intermediate', 'Advanced'];
  const categoryOptions = ['Technology', 'Business', 'Design', 'Marketing'];
  const sortByOptions = ['Most Recent', 'Popularity', 'Alphabetical'];

  return (
    <div className="flex justify-between items-center" >
      {/* Search Input */}
      <div className="relative flex-grow max-w-md mr-4">
        <Input 
          type="text" 
          placeholder="Search mentors or courses" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
        <Search 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
          size={20} 
        />
      </div>

      {/* Filters */}
      <div className="flex space-x-3">
        {/* Level Filter */}
        <DropdownMenu open={levelOpen} onOpenChange={setLevelOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center">
              Level <ChevronDown className="ml-2" size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select Level</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {levelOptions.map((level) => (
              <DropdownMenuItem key={level} onSelect={() => {}}>
                {level}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Category Filter */}
        <DropdownMenu open={categoryOpen} onOpenChange={setCategoryOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center">
              Category <ChevronDown className="ml-2" size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categoryOptions.map((category) => (
              <DropdownMenuItem key={category} onSelect={() => {}}>
                {category}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Sort By Filter */}
        <DropdownMenu open={sortByOpen} onOpenChange={setSortByOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center">
              Sort By <ChevronDown className="ml-2" size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Sort Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {sortByOptions.map((option) => (
              <DropdownMenuItem key={option} onSelect={() => {}}>
                {option}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default DashboardCoursesSubNav;