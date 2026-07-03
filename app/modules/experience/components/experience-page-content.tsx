// // src\modules\experience\components\experience-page-content.tsx

// "use client";

// import * as React from "react";

// import Link from "next/link";

// import {
//   ArrowRightIcon,
//   BriefcaseBusinessIcon,
//   Building2Icon,
//   CalendarIcon,
//   Code2Icon,
//   MapPinIcon,
// } from "lucide-react";

// import { EmptyState } from "@/components/common/empty-state";
// import { ErrorState } from "@/components/common/error-state";
// import { PageHeader } from "@/components/common/page-header";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// import {
//   useExperiences,
//   useExperiencesCount,
//   useCurrentPositionsCount,
// } from "@/app/modules//experience/hooks/use-experience";

// import { ROUTES } from "@/app/shared/constants/routes";

// import type { Experience } from "@/app/modules//experience/types/experience.types";

// function formatDate(date: string): string {
//   return new Intl.DateTimeFormat("en-US", {
//     month: "short",
//     year: "numeric",
//   }).format(new Date(date));
// }

// function getDuration(startDate: string, endDate?: string | null): string {
//   const start = formatDate(startDate);

//   if (!endDate) {
//     return `${start} - Present`;
//   }

//   return `${start} - ${formatDate(endDate)}`;
// }

// interface ExperienceCardProps {
//   experience: Experience;
//   isLast: boolean;
// }

// function ExperienceCard({
//   experience,
//   isLast,
// }: Readonly<ExperienceCardProps>): React.JSX.Element {
//   return (
//     <div className="relative pl-10">
//       {!isLast ? (
//         <div className="absolute left-[18px] top-10 h-[calc(100%+2rem)] w-px bg-border" />
//       ) : null}

//       <div className="absolute left-0 top-2 flex size-9 items-center justify-center rounded-full border bg-background shadow-sm">
//         <BriefcaseBusinessIcon className="size-4 text-primary" />
//       </div>

//       <Card className="overflow-hidden border-border/60 transition-all duration-300 hover:border-primary/20 hover:shadow-lg">
//         <CardContent className="p-6">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
//             <div>
//               <div className="mb-2 flex flex-wrap items-center gap-2">
//                 <h3 className="text-xl font-semibold">{experience.position}</h3>

//                 {experience.isCurrent ? <Badge>Current</Badge> : null}
//               </div>

//               <div className="flex flex-wrap items-center gap-2">
//                 <Building2Icon className="size-4 text-primary" />

//                 <span className="font-medium text-primary">
//                   {experience.company}
//                 </span>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               <Badge variant="secondary">{experience.employmentType}</Badge>

//               <Badge variant="outline">{experience.workMode}</Badge>
//             </div>
//           </div>

//           <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
//             <div className="flex items-center gap-2">
//               <CalendarIcon className="size-4" />

//               <span>
//                 {getDuration(experience.startDate, experience.endDate)}
//               </span>
//             </div>

//             <div className="flex items-center gap-2">
//               <MapPinIcon className="size-4" />

//               <span>{experience.location}</span>
//             </div>
//           </div>

//           <p className="mt-5 leading-relaxed text-muted-foreground">
//             {experience.summary}
//           </p>

//           {experience.responsibilities.length > 0 ? (
//             <div className="mt-6">
//               <h4 className="mb-3 font-medium">Key Responsibilities</h4>

//               <ul className="space-y-2">
//                 {experience.responsibilities.map((responsibility) => (
//                   <li
//                     key={responsibility}
//                     className="flex gap-3 text-sm text-muted-foreground"
//                   >
//                     <span className="mt-2 size-1.5 rounded-full bg-primary" />

//                     <span>{responsibility}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ) : null}

//           {experience.technologies.length > 0 ? (
//             <div className="mt-6">
//               <h4 className="mb-3 font-medium">Technologies</h4>

//               <div className="flex flex-wrap gap-2">
//                 {experience.technologies.map((technology) => (
//                   <Badge key={technology} variant="outline">
//                     {technology}
//                   </Badge>
//                 ))}
//               </div>
//             </div>
//           ) : null}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// function ExperienceSkeleton(): React.JSX.Element {
//   return (
//     <div className="space-y-8">
//       {Array.from({
//         length: 4,
//       }).map((_, index) => (
//         <Card key={index} className="h-72 animate-pulse">
//           <CardContent />
//         </Card>
//       ))}
//     </div>
//   );
// }

// export function ExperiencePageContent(): React.JSX.Element {
//   const { experiences, isLoading, isError, error, refetch } = useExperiences({
//     isActive: true,
//     sort: "-startDate,sortOrder",
//   });

//   const { data: totalExperiences = 0 } = useExperiencesCount();

//   const { data: currentPositions = 0 } = useCurrentPositionsCount();

//   const sortedExperiences = React.useMemo(
//     () => [...experiences].sort((a, b) => b.sortOrder - a.sortOrder),
//     [experiences],
//   );

//   const totalTechnologies = React.useMemo(() => {
//     const technologies = new Set<string>();

//     experiences.forEach((experience) => {
//       experience.technologies.forEach((technology) => {
//         technologies.add(technology);
//       });
//     });

//     return technologies.size;
//   }, [experiences]);

//   if (isLoading) {
//     return (
//       <main>
//         <PageHeader
//           title="Experience"
//           description="A timeline of my professional journey, achievements, and technical growth."
//         />

//         <section className="pb-20">
//           <div className="container mx-auto px-4">
//             <ExperienceSkeleton />
//           </div>
//         </section>
//       </main>
//     );
//   }

//   if (isError) {
//     return (
//       <main>
//         <PageHeader
//           title="Experience"
//           description="A timeline of my professional journey, achievements, and technical growth."
//         />

//         <section className="pb-20">
//           <div className="container mx-auto px-4">
//             <ErrorState
//               title="Failed to load experience"
//               description={
//                 error?.message ??
//                 "Something went wrong while loading experience."
//               }
//               onRetry={() => {
//                 void refetch();
//               }}
//             />
//           </div>
//         </section>
//       </main>
//     );
//   }

//   if (sortedExperiences.length === 0) {
//     return (
//       <main>
//         <PageHeader
//           title="Experience"
//           description="A timeline of my professional journey, achievements, and technical growth."
//         />

//         <section className="pb-20">
//           <div className="container mx-auto px-4">
//             <EmptyState
//               title="No Experience Found"
//               description="Experience information will be available soon."
//             />
//           </div>
//         </section>
//       </main>
//     );
//   }

//   return (
//     <main>
//       <PageHeader
//         title="Experience"
//         description="A timeline of my professional journey, achievements, and technical growth."
//       />

//       <section className="pb-20">
//         <div className="container mx-auto px-4">
//           <div className="mb-16 grid gap-6 md:grid-cols-3">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Total Experience</CardTitle>
//               </CardHeader>

//               <CardContent>
//                 <p className="text-3xl font-bold">{totalExperiences}</p>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <CardTitle>Current Positions</CardTitle>
//               </CardHeader>

//               <CardContent>
//                 <p className="text-3xl font-bold">{currentPositions}</p>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <CardTitle>Technologies Used</CardTitle>
//               </CardHeader>

//               <CardContent>
//                 <p className="text-3xl font-bold">{totalTechnologies}</p>
//               </CardContent>
//             </Card>
//           </div>

//           <div className="mx-auto mb-16 max-w-3xl text-center">
//             <Badge variant="outline" className="mb-4">
//               Career Journey
//             </Badge>

//             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
//               Professional Experience
//             </h2>

//             <p className="mt-4 text-muted-foreground">
//               My career path, key achievements, leadership experiences, and
//               contributions across different organizations and projects.
//             </p>
//           </div>

//           <div className="mx-auto max-w-5xl space-y-10">
//             {sortedExperiences.map((experience, index) => (
//               <ExperienceCard
//                 key={experience._id}
//                 experience={experience}
//                 isLast={index === sortedExperiences.length - 1}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="border-t py-20">
//         <div className="container mx-auto px-4">
//           <div className="mx-auto max-w-4xl rounded-3xl border bg-card p-10 text-center">
//             <Badge variant="outline" className="mb-4">
//               Available For Work
//             </Badge>

//             <h2 className="text-3xl font-bold">Looking For New Challenges</h2>

//             <p className="mt-4 text-muted-foreground">
//               Interested in collaborating on innovative projects, building
//               scalable products, and helping businesses grow through modern
//               technology solutions.
//             </p>

//             <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
//               <Button asChild size="lg">
//                 <Link href={ROUTES.CONTACT}>
//                   Contact Me
//                   <ArrowRightIcon className="ml-2 size-4" />
//                 </Link>
//               </Button>

//               <Button asChild variant="outline" size="lg">
//                 <Link href={ROUTES.PROJECTS}>View Projects</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="border-t py-20">
//         <div className="container mx-auto px-4">
//           <div className="mx-auto max-w-3xl text-center">
//             <Code2Icon className="mx-auto mb-4 size-10 text-primary" />

//             <h2 className="text-2xl font-bold">Continuous Learning</h2>

//             <p className="mt-4 text-muted-foreground">
//               Technology evolves rapidly, and I remain committed to learning new
//               tools, frameworks, and best practices to deliver exceptional
//               digital experiences.
//             </p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
