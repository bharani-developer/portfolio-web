// // src/modules/projects/components/project-card.tsx

// "use client";

// import Image from "next/image";
// import Link from "next/link";

// import { ArrowUpRight, Calendar, ExternalLink, Sparkles } from "lucide-react";

// import { Badge } from "@/components/ui/badge";

// import { Button } from "@/components/ui/button";

// import { Card, CardContent } from "@/components/ui/card";

// import { cn } from "@/app/shared/lib/utils";

// import type { Project } from "@/app/modules//projects/types/projects.types";

// interface ProjectCardProps {
//   project: Project;

//   featured?: boolean;
// }

// const STATUS_VARIANTS = {
//   Planning: "secondary",
//   "In Progress": "default",
//   Completed: "outline",
//   "On Hold": "secondary",
//   Archived: "outline",
// } as const;

// export function ProjectCard({ project, featured = false }: ProjectCardProps) {
//   const {
//     title,
//     slug,
//     shortDescription,
//     thumbnail,
//     technologies,
//     githubUrl,
//     liveUrl,
//     featured: isFeatured,
//     status,
//     category,
//     startDate,
//   } = project;

//   const projectUrl = `/projects/${slug}`;

//   const content = (
//     <>
//       <div className="relative overflow-hidden">
//         <div
//           className={cn(
//             "relative bg-muted",
//             featured ? "aspect-[16/8]" : "aspect-[16/10]",
//           )}
//         >
//           {thumbnail?.url ? (
//             <Image
//               src={thumbnail.url}
//               alt={title}
//               fill
//               priority={featured}
//               className="object-cover transition-transform duration-500 group-hover:scale-105"
//               sizes={
//                 featured
//                   ? "(max-width: 1280px) 100vw, 1200px"
//                   : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
//               }
//             />
//           ) : (
//             <div className="bg-muted flex h-full items-center justify-center">
//               <Sparkles className="text-muted-foreground size-10" />
//             </div>
//           )}

//           <div className="absolute left-4 top-4 flex flex-wrap gap-2">
//             {isFeatured && (
//               <Badge className="gap-1">
//                 <Sparkles className="size-3.5" />
//                 Featured
//               </Badge>
//             )}

//             <Badge variant={STATUS_VARIANTS[status]}>{status}</Badge>
//           </div>
//         </div>
//       </div>

//       <CardContent
//         className={cn("flex flex-1 flex-col", featured ? "p-8" : "p-6")}
//       >
//         <div className="mb-4 flex flex-wrap items-center gap-3">
//           <Badge variant="outline">{category}</Badge>

//           {startDate && (
//             <div className="text-muted-foreground flex items-center gap-1 text-xs">
//               <Calendar className="size-3.5" />

//               <span>{new Date(startDate).getFullYear()}</span>
//             </div>
//           )}
//         </div>

//         <div className="space-y-3">
//           <h3
//             className={cn(
//               "font-bold tracking-tight",
//               featured ? "text-3xl" : "text-xl",
//             )}
//           >
//             {title}
//           </h3>

//           <p
//             className={cn(
//               "text-muted-foreground",
//               featured ? "text-base" : "text-sm",
//             )}
//           >
//             {shortDescription}
//           </p>
//         </div>

//         <div className="mt-6 flex flex-wrap gap-2">
//           {technologies.slice(0, featured ? 10 : 5).map((technology) => (
//             <Badge key={technology} variant="secondary">
//               {technology}
//             </Badge>
//           ))}

//           {technologies.length > (featured ? 10 : 5) && (
//             <Badge variant="outline">
//               +{technologies.length - (featured ? 10 : 5)}
//             </Badge>
//           )}
//         </div>

//         <div className="mt-auto flex flex-wrap gap-3 pt-8">
//           <Button asChild>
//             <Link href={projectUrl}>
//               View Details
//               <ArrowUpRight className="size-4" />
//             </Link>
//           </Button>

//           {liveUrl && (
//             <Button asChild variant="outline">
//               <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
//                 Live Demo
//                 <ExternalLink className="size-4" />
//               </Link>
//             </Button>
//           )}

//           {githubUrl && (
//             <Button asChild variant="outline" size="icon">
//               <Link
//                 href={githubUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={`View ${title} source code`}
//               >
//                 <ExternalLink className="size-4" />
//               </Link>
//             </Button>
//           )}
//         </div>
//       </CardContent>
//     </>
//   );

//   if (featured) {
//     return (
//       <Card className="group overflow-hidden border shadow-sm transition-all duration-300 hover:shadow-lg">
//         <div className="grid lg:grid-cols-2">{content}</div>
//       </Card>
//     );
//   }

//   return (
//     <Card className="group flex h-full flex-col overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
//       {content}
//     </Card>
//   );
// }
