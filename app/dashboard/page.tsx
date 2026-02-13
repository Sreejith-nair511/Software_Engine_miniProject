'use client';

import { sampleCourses } from '@/lib/constants';
import { WelcomeCard } from '@/components/dashboard/welcome-card';
import { CourseCard } from '@/components/dashboard/course-card';
import { TrendingUp, Award, Target } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="flex-1 bg-background p-4 md:p-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome section */}
        <WelcomeCard name="Developer" completedCourses={8} totalCourses={32} />

        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-elevated p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Current Streak</p>
                <p className="text-3xl font-bold text-foreground">12 Days</p>
              </div>
              <TrendingUp className="w-12 h-12 text-secondary opacity-40" />
            </div>
          </div>

          <div className="card-elevated p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Skills Unlocked</p>
                <p className="text-3xl font-bold text-foreground">24</p>
              </div>
              <Award className="w-12 h-12 text-primary opacity-40" />
            </div>
          </div>

          <div className="card-elevated p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Goals Achieved</p>
                <p className="text-3xl font-bold text-foreground">15/30</p>
              </div>
              <Target className="w-12 h-12 text-secondary opacity-40" />
            </div>
          </div>
        </div>

        {/* Continue Learning */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Continue Learning</h2>
              <p className="text-muted-foreground text-sm mt-1">Pick up where you left off</p>
            </div>
          </div>

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
        </div>

        {/* Recommended section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Recommended For You</h2>
              <p className="text-muted-foreground text-sm mt-1">Based on your learning path</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleCourses.slice(0, 4).map((course) => (
              <CourseCard
                key={`rec-${course.id}`}
                id={course.id}
                title={course.title}
                instructor={course.instructor}
                progress={0}
                rating={course.rating}
                reviews={course.reviews}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
