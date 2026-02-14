'use client';

import Link from 'next/link';
import { Play, Star, BookOpen, CheckCircle } from 'lucide-react';

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  thumbnail_url?: string;
  category?: string;
  level?: string;
  enrolled?: boolean;
  progress?: number;
  rating?: number;
  reviews?: number;
}

export function CourseCard({
  id,
  title,
  instructor,
  thumbnail_url,
  category,
  level,
  enrolled,
  progress = 0,
  rating = 4.5,
  reviews = 0,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`}>
      <div className="group card-elevated h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden border border-white/10 glass-card">
        {/* Thumbnail */}
        <div className="relative w-full h-48 overflow-hidden">
          {thumbnail_url ? (
            <img
              src={thumbnail_url}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <Play className="w-12 h-12 text-primary/50" />
            </div>
          )}

          {/* Overlay Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {level && (
              <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border ${level === 'Advanced' ? 'bg-rose-500/20 text-rose-300 border-rose-500/30' :
                  level === 'Intermediate' ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' :
                    'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                }`}>
                {level}
              </span>
            )}
            {enrolled && (
              <span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-white border border-primary/30 backdrop-blur-md flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                Enrolled
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{category || 'Engineering'}</span>
          </div>

          <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
            {title}
          </h3>

          <p className="text-sm text-muted-foreground mb-4 font-medium italic">by {instructor}</p>

          {/* Rating & Stats */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              <span className="text-sm font-bold text-foreground">{rating}</span>
              <span className="text-xs text-muted-foreground font-medium">({reviews})</span>
            </div>

            <div className="flex items-center gap-1.5 text-muted-foreground">
              <BookOpen className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-tighter">Youtube Course</span>
            </div>
          </div>

          {/* Progress (if enrolled) */}
          {enrolled && (
            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center text-[10px] font-bold uppercase text-muted-foreground">
                <span>Progress</span>
                <span className="text-primary">{progress}%</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-700 ease-out shadow-[0_0_10px_rgba(var(--primary),0.5)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
