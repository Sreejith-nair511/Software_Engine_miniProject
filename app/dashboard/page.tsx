import { createClient } from '@/lib/supabase-server';
import { auth, currentUser } from '@clerk/nextjs/server';
import { WelcomeCard } from '@/components/dashboard/welcome-card';
import { CourseCard } from '@/components/dashboard/course-card';
import { TrendingUp, Award, Target, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default async function DashboardPage() {
  const { userId } = await auth();
  const user = await currentUser();
  const supabase = await createClient();

  // 1. Fetch Enrolled Courses
  const { data: enrollments } = await supabase
    .from('enrollments')
    .select(`course_id, courses (*)`)
    .eq('user_id', userId)
    .limit(4);

  const enrolledCourses = enrollments?.map((e: any) => e.courses).filter(Boolean) || [];

  // 2. Fetch Progress for enrolled courses
  const { data: progressData } = await supabase
    .from('progress')
    .select('course_id, completed')
    .eq('user_id', userId);

  const userProgress: Record<string, number> = {};
  progressData?.forEach((p: { course_id: string; completed: boolean }) => {
    userProgress[p.course_id] = p.completed ? 100 : 0;
  });

  // 3. Fetch Recommended Courses (just latest 4)
  const { data: recommended } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(4);

  return (
    <div className="flex-1 bg-slate-950 p-4 md:p-8 transition-colors duration-300 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Welcome section */}
        <WelcomeCard
          name={user?.firstName || 'Developer'}
          completedCourses={progressData?.filter(p => p.completed).length || 0}
          totalCourses={enrollments?.length || 0}
        />

        {/* Stats section (Placeholders but styled) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <TrendingUp className="w-16 h-16 text-primary" />
            </div>
            <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] mb-2">Current Streak</p>
            <p className="text-4xl font-black text-white">12 Days</p>
            <div className="mt-4 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[60%]" />
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Award className="w-16 h-16 text-secondary" />
            </div>
            <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] mb-2">Skills Unlocked</p>
            <p className="text-4xl font-black text-white">24</p>
            <div className="mt-4 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-secondary w-[40%]" />
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target className="w-16 h-16 text-emerald-400" />
            </div>
            <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] mb-2">Goals Achieved</p>
            <p className="text-4xl font-black text-white">15/30</p>
            <div className="mt-4 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-400 w-[50%]" />
            </div>
          </div>
        </div>

        {/* Continue Learning */}
        {enrolledCourses.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
              <div>
                <h2 className="text-2xl font-black text-white tracking-tight">Continue <span className="text-primary">Learning</span></h2>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mt-1">Pick up where you left off</p>
              </div>
              <Link href="/my-courses" className="text-xs font-black text-primary hover:underline flex items-center gap-1 uppercase tracking-widest">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {enrolledCourses.map((course: any) => (
                <CourseCard
                  key={`enroll-${course.id}`}
                  id={course.id}
                  title={course.title}
                  instructor={course.instructor}
                  thumbnail_url={course.thumbnail_url}
                  category={course.category}
                  level={course.level}
                  enrolled={true}
                  progress={userProgress[course.id] || 0}
                />
              ))}
            </div>
          </div>
        )}

        {/* Recommended section */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
            <div>
              <h2 className="text-2xl font-black text-white tracking-tight">Recommended <span className="text-secondary">For You</span></h2>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mt-1">Based on industry trends</p>
            </div>
            <Link href="/courses" className="text-xs font-black text-secondary hover:underline flex items-center gap-1 uppercase tracking-widest">
              Browse More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recommended?.map((course: any) => (
              <CourseCard
                key={`rec-${course.id}`}
                id={course.id}
                title={course.title}
                instructor={course.instructor}
                thumbnail_url={course.thumbnail_url}
                category={course.category}
                level={course.level}
                enrolled={false}
                progress={0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
