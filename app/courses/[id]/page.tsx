'use client';

import { sampleCourses } from '@/lib/constants';
import { ArrowLeft, Play, Clock, Users, Star, BookOpen, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const [enrolledLessons, setEnrolledLessons] = useState<number[]>([1, 2, 3]);
  const course = sampleCourses.find((c) => c.id === parseInt(params.id)) || sampleCourses[0];

  const lessons = [
    { id: 1, title: 'Course Introduction', duration: 12, completed: true },
    { id: 2, title: 'Getting Started', duration: 28, completed: true },
    { id: 3, title: 'Core Concepts', duration: 45, completed: true },
    { id: 4, title: 'Advanced Patterns', duration: 52, completed: false },
    { id: 5, title: 'Real-world Projects', duration: 65, completed: false },
    { id: 6, title: 'Performance Optimization', duration: 38, completed: false },
    { id: 7, title: 'Final Project & Certification', duration: 90, completed: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <Link href="/courses" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Courses</span>
        </Link>
      </div>

      {/* Course header */}
      <div className="border-b border-white/10 bg-gradient-to-r from-blue-500/10 to-violet-500/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Content */}
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{course.title}</h1>
              <p className="text-xl text-slate-300 mb-6">
                Master advanced patterns and techniques to become an expert engineer
              </p>

              {/* Metadata */}
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${course.instructor}`}
                    alt={course.instructor}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm text-slate-400">Instructor</p>
                    <p className="font-semibold text-white">{course.instructor}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-slate-400">Rating</p>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-white">{course.rating}</span>
                    <span className="text-slate-400">({course.reviews})</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-slate-400">Level</p>
                  <p className="font-semibold text-white">{course.level}</p>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href={`/courses/${course.id}/lesson/1`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-semibold transition-all duration-300 glow-blue transform hover:scale-105"
              >
                <Play className="w-5 h-5" />
                Start Learning
              </Link>
            </div>

            {/* Video placeholder */}
            <div className="glass-lg rounded-xl overflow-hidden flex items-center justify-center h-64 bg-gradient-to-br from-blue-500/20 to-violet-500/20">
              <Play className="w-16 h-16 text-blue-300 opacity-50" />
            </div>
          </div>
        </div>
      </div>

      {/* Course content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Curriculum */}
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Course Curriculum</h2>

              <div className="space-y-3">
                {lessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    href={`/courses/${course.id}/lesson/${lesson.id}`}
                    className="glass-hover p-4 rounded-lg flex items-center gap-4 transition-all duration-200 group hover:glow-blue"
                  >
                    <div className="flex-shrink-0">
                      {lesson.completed ? (
                        <CheckCircle className="w-6 h-6 text-emerald-400" />
                      ) : (
                        <Play className="w-6 h-6 text-blue-400 opacity-50 group-hover:opacity-100" />
                      )}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-white group-hover:text-blue-200 transition-colors">
                        {lesson.title}
                      </h3>
                      <p className="text-sm text-slate-400">{lesson.duration} minutes</p>
                    </div>

                    <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Course Description */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">About this course</h2>
              <div className="glass p-6 rounded-xl space-y-4 text-slate-300">
                <p>
                  This comprehensive course covers advanced patterns and best practices used by top tech companies. Learn from industry experts and apply your knowledge to real-world projects.
                </p>
                <p>
                  By the end of this course, you'll be able to architect scalable systems, optimize performance, and write production-ready code.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course info card */}
            <div className="glass rounded-xl p-6 space-y-4">
              <h3 className="font-bold text-white">Course Details</h3>

              <div>
                <p className="text-sm text-slate-400 mb-1">Duration</p>
                <div className="flex items-center gap-2 text-white">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div>
                <p className="text-sm text-slate-400 mb-1">Lessons</p>
                <div className="flex items-center gap-2 text-white">
                  <BookOpen className="w-4 h-4 text-violet-400" />
                  <span>{lessons.length} lessons</span>
                </div>
              </div>

              <div>
                <p className="text-sm text-slate-400 mb-1">Students</p>
                <div className="flex items-center gap-2 text-white">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span>2,450+ students</span>
                </div>
              </div>

              {/* Progress */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-slate-400 mb-2">Your Progress</p>
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <p className="text-sm text-slate-300 mt-2">{course.progress}% complete</p>
              </div>
            </div>

            {/* Share card */}
            <div className="glass rounded-xl p-6">
              <h3 className="font-bold text-white mb-4">Share Course</h3>
              <div className="space-y-2">
                <button className="w-full px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm font-medium">
                  Share on Twitter
                </button>
                <button className="w-full px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm font-medium">
                  Share on LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
