'use client';

import { useState } from 'react';
import Link from 'next/link';
import { sampleCourses } from '@/lib/constants';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { CourseCard } from '@/components/dashboard/course-card';

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced'];
  const sortOptions = ['popular', 'newest', 'rating', 'students'];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Header */}
      <div className="border-b border-border bg-card transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explore <span className="text-primary">Courses</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover courses tailored to your engineering career path
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-8">
        {/* Search and filters */}
        <div className="space-y-4">
          {/* Search bar */}
          <div className="card-elevated p-4 flex items-center gap-3 dark:glass-card">
            <Search className="w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-white placeholder:text-slate-500 text-lg"
            />
          </div>

          {/* Filter and sort controls */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Level filter */}
            <div className="glass-lg p-4 rounded-xl flex items-center gap-2 flex-wrap">
              <Filter className="w-5 h-5 text-slate-400" />
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedLevel === level
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white glow-blue'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>

            {/* Sort dropdown */}
            <div className="glass-lg p-4 rounded-xl flex items-center gap-2 relative">
              <span className="text-slate-400 text-sm">Sort by:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white/5 text-white px-4 py-2 rounded-lg outline-none cursor-pointer border border-white/10 hover:bg-white/10 transition-colors"
                >
                  {sortOptions.map((option) => (
                    <option key={option} value={option} className="bg-slate-900">
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-3 pointer-events-none text-slate-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Results info */}
        <div className="flex items-center justify-between">
          <p className="text-slate-400">
            Showing <span className="text-white font-semibold">{sampleCourses.length}</span> courses
          </p>
        </div>

        {/* Courses grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleCourses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              instructor={course.instructor}
              progress={course.progress}
              rating={course.rating}
              reviews={course.reviews}
            />
          ))}
        </div>

        {/* Load more */}
        <div className="flex justify-center py-8">
          <button className="px-8 py-3 glass-hover rounded-lg font-semibold text-white transition-all duration-300">
            Load More Courses
          </button>
        </div>
      </div>
    </div>
  );
}
