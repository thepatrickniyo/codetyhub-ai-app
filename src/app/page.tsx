import React from 'react';
import { ArrowRight, Code, Book, Star } from 'lucide-react';
import CodeSnippet from './_components/CodeSnippet';
import DotGrid from './_components/DotGrid';
import Link from 'next/link';
import CommonRootLayout from './_components/CommonRootLayout';


export default function Home() {
  return (
    <CommonRootLayout>
    <main>
      <div className="absolute top-[80%] left-[10%] hidden md:block">
        <DotGrid />
      </div>
      <div className="absolute top-[100%] -right-16 hidden md:block">
        <DotGrid />
      </div>
      <main className="container mx-auto px-4 py-20">
        <section className="text-center">
          <h1 className="text-6xl font-extrabold text-white mb-6">Unlock Your Potential: AI Learning, Mentorship & Career Growth for University Students</h1>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
             Designed for university students, our platform offers AI courses, portfolio building, and mentorship to help you gain real-world skills, connect with experts, and kickstart your career in tech. Start learning today!
          </p>
          <Link href="/courses">
          <button className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full hover:bg-teal-100 transition duration-300 flex items-center mx-auto">
            Start Learning
            <ArrowRight className="ml-2" size={20} />
          </button>
          </Link>
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Become a Pro AI Developer?</h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Join thousands of developers who have transformed their careers with our curated collection of top-rated courses.
          </p>
          <button className="bg-teal-400 text-purple-900 font-semibold py-3 px-8 rounded-full hover:bg-teal-300 transition duration-300">
            Explore Courses
          </button>
        </section>
      </main>
    </main>
    </CommonRootLayout>
  );
}