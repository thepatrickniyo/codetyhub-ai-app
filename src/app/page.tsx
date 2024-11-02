import React from 'react';
import { ArrowRight, Code, Book, Star } from 'lucide-react';
import CodeSnippet from './_components/CodeSnippet';
import Navigation from './_components/Navigation';
import DotGrid from './_components/DotGrid';


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-700 via-blue-600 to-teal-400">
      <div className="absolute top-[80%] left-[10%] hidden md:block">
        <DotGrid />
      </div>
      <div className="absolute top-[100%] -right-16 hidden md:block">
        <DotGrid />
      </div>
      
      <Navigation />

      <main className="container mx-auto px-4 py-20">
        <section className="text-center">
          <h1 className="text-6xl font-bold text-white mb-6">Level up your coding skills</h1>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Access top-rated courses from industry experts and become a world-class developer. 
            Learn the latest technologies and advance your career.
          </p>
          <button className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full hover:bg-teal-100 transition duration-300 flex items-center mx-auto">
            Start Learning
            <ArrowRight className="ml-2" size={20} />
          </button>
        </section>

        <CodeSnippet />

        <section className="mt-32 grid md:grid-cols-3 gap-12">
          {[
            { icon: Code, title: "Cutting-Edge Tech", description: "Learn the latest programming languages, frameworks, and tools." },
            { icon: Book, title: "Comprehensive Curriculum", description: "From basics to advanced topics, find courses for every skill level." },
            { icon: Star, title: "Expert Instructors", description: "Learn from industry professionals and experienced developers." }
          ].map((feature, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 text-white">
              <feature.icon size={40} className="text-teal-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-teal-100">{feature.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-32 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Become a Pro Developer?</h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Join thousands of developers who have transformed their careers with our curated collection of top-rated courses.
          </p>
          <button className="bg-teal-400 text-purple-900 font-semibold py-3 px-8 rounded-full hover:bg-teal-300 transition duration-300">
            Explore Courses
          </button>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-6 mt-20 text-center text-teal-200">
        <p>&copy; 2024 CodeWay Academy. All rights reserved.</p>
      </footer>
    </main>
  );
}