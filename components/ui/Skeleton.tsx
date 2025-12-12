import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",
        className
      )}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-card rounded-2xl p-4 border border-border">
      <div className="flex items-start gap-4">
        <Skeleton className="w-10 h-10 rounded-xl flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-5 w-3/4" />
          <div className="flex gap-4">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-28" />
          </div>
        </div>
      </div>
      <div className="mt-3 ml-14 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="w-full md:w-[320px] md:flex-shrink-0 bg-card rounded-2xl border border-border p-1">
      <Skeleton className="aspect-video rounded-xl" />
      <div className="flex items-center gap-3 p-2 mt-1">
        <Skeleton className="w-10 h-10 rounded-full flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <div className="flex gap-3">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-3 w-16" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SectionSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-4">
      <Skeleton className="h-4 w-24 mb-8" />
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

export function ProjectsSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-4 w-20 mb-8" />
      <div className="flex flex-col md:flex-row gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <ProjectCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
