// "use client";

// import * as React from "react";

// import Link from "next/link";

// import { FolderGit2, ArrowRight } from "lucide-react";

// import { ProjectCard } from "./project-card";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// import { ROUTES } from "@/app/shared/constants/routes";

// import type {
//   Project,
//   ProjectsSectionProps,
// } from "@/app/modules//projects/types/projects.types";

// interface ExtendedProjectsSectionProps extends ProjectsSectionProps {
//   title?: string;

//   description?: string;

//   showViewAll?: boolean;

//   viewAllHref?: string;

//   emptyTitle?: string;

//   emptyDescription?: string;

//   featuredFirst?: boolean;

//   className?: string;
// }

// export function ProjectsSection({
//   projects,
//   title = "Featured Projects",
//   description = "A collection of projects showcasing technical expertise, architecture decisions, product development experience, and modern engineering practices.",
//   showViewAll = true,
//   viewAllHref = ROUTES.PROJECTS,
//   emptyTitle = "No Projects Found",
//   emptyDescription = "Projects will appear here once they become available.",
//   featuredFirst = true,
//   className,
// }: Readonly<ExtendedProjectsSectionProps>): React.JSX.Element {
//   const { featuredProject, regularProjects } = React.useMemo(() => {
//     const sortedProjects = [...projects].sort((a, b) => {
//       if (featuredFirst) {
//         if (a.featured && !b.featured) {
//           return -1;
//         }

//         if (!a.featured && b.featured) {
//           return 1;
//         }
//       }

//       if (a.sortOrder !== b.sortOrder) {
//         return a.sortOrder - b.sortOrder;
//       }

//       return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
//     });

//     const featured = featuredFirst
//       ? (sortedProjects.find((project) => project.featured) ?? null)
//       : null;

//     const regular =
//       featured != null
//         ? sortedProjects.filter((project) => project._id !== featured._id)
//         : sortedProjects;

//     return {
//       featuredProject: featured,
//       regularProjects: regular,
//     };
//   }, [projects, featuredFirst]);

//   if (projects.length === 0) {
//     return (
//       <section
//         id="projects"
//         className={className}
//         aria-labelledby="projects-heading"
//       >
//         {" "}
//         <div className="container mx-auto px-4">
//           {" "}
//           <div className="mb-10 text-center">
//             {" "}
//             <h2
//               id="projects-heading"
//               className="text-3xl font-bold tracking-tight md:text-4xl"
//             >
//               {title}{" "}
//             </h2>
//             <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
//               {description}
//             </p>
//           </div>
//           <Card className="border-dashed">
//             <CardContent className="flex min-h-[320px] flex-col items-center justify-center gap-4 text-center">
//               <FolderGit2 className="size-12 text-muted-foreground" />

//               <div>
//                 <h3 className="text-xl font-semibold">{emptyTitle}</h3>

//                 <p className="mt-2 max-w-md text-muted-foreground">
//                   {emptyDescription}
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section
//       id="projects"
//       className={className}
//       aria-labelledby="projects-heading"
//     >
//       {" "}
//       <div className="container mx-auto px-4">
//         {" "}
//         <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
//           {" "}
//           <div className="max-w-3xl">
//             {" "}
//             <h2
//               id="projects-heading"
//               className="text-3xl font-bold tracking-tight md:text-4xl"
//             >
//               {title}{" "}
//             </h2>
//             <p className="mt-4 text-muted-foreground">{description}</p>
//           </div>
//           {showViewAll && (
//             <Button asChild variant="outline">
//               <Link href={viewAllHref}>
//                 View All Projects
//                 <ArrowRight className="ml-2 size-4" />
//               </Link>
//             </Button>
//           )}
//         </div>
//         {featuredProject && (
//           <div className="mb-8">
//             <ProjectCard project={featuredProject} featured />
//           </div>
//         )}
//         {regularProjects.length > 0 && (
//           <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//             {regularProjects.map((project: Project) => (
//               <ProjectCard key={project._id} project={project} />
//             ))}
//           </div>
//         )}
//         {showViewAll && projects.length >= 6 && (
//           <div className="mt-12 flex justify-center">
//             <Button asChild size="lg">
//               <Link href={viewAllHref}>
//                 Explore More Projects
//                 <ArrowRight className="ml-2 size-4" />
//               </Link>
//             </Button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
