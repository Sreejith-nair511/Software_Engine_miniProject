'use client';

import Link from 'next/link';
import { Play, Star } from 'lucide-react';

interface CourseCardProps {
  id: number;
  title: string;
  instructor: string;
  progress: number;
  rating: number;
  reviews: number;
}

export function CourseCard({
  id,
  title,
  instructor,
  progress,
  rating,
  reviews,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`}>
      <div className="group card-elevated p-6 cursor-pointer h-full flex flex-col transition-all duration-300 hover:shadow-lg">
        {/* Header with image placeholder */}
        <div className="w-full h-40 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 mb-4 flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors duration-300">
          <Play className="w-12 h-12 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-foreground mb-1 line-clamp-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{instructor}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-foreground">{rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">({reviews} reviews)</span>
        </div>

        {/* Progress bar */}
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium text-muted-foreground">Progress</span>
            <span className="text-xs font-bold text-primary">{progress}%</span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
