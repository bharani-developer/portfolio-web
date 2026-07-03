// // src/modules/experience/components/experience-section.tsx

// "use client";

// import * as React from "react";

// import Image from "next/image";
// import Link from "next/link";

// import {
//   ArrowUpRightIcon,
//   BriefcaseBusinessIcon,
//   Building2Icon,
//   CalendarIcon,
//   MapPinIcon,
// } from "lucide-react";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";

// import { ROUTES } from "@/app/shared/constants/routes";

// import type {
//   Experience,
//   ExperienceSectionProps,
// } from "@/app/modules//experience/types/experience.types";

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
//     <article className="relative pl-10">
//       {!isLast && (
//         <div className="absolute left-[18px] top-10 h-[calc(100%+2rem)] w-px bg-border" />
//       )}

//       <div className="absolute left-0 top-2 flex size-9 items-center justify-center rounded-full border bg-background shadow-sm">
//         <BriefcaseBusinessIcon className="size-4 text-primary" />
//       </div>

//       <Card className="overflow-hidden border-border/60 transition-all duration-300 hover:border-primary/20 hover:shadow-lg">
//         <div className="p-6">
//           <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
//             <div className="flex items-center gap-4">
//               {experience.companyLogo?.url ? (
//                 <div className="relative size-14 overflow-hidden rounded-xl border bg-muted">
//                   <Image
//                     src={experience.companyLogo.url}
//                     alt={experience.company}
//                     fill
//                     sizes="56px"
//                     className="object-cover"
//                   />
//                 </div>
//               ) : (
//                 <div className="flex size-14 items-center justify-center rounded-xl border bg-muted">
//                   <Building2Icon className="size-6 text-muted-foreground" />
//                 </div>
//               )}

//               <div>
//                 <h3 className="text-xl font-semibold">{experience.position}</h3>

//                 <div className="mt-1 flex flex-wrap items-center gap-2">
//                   <span className="font-medium text-primary">
//                     {experience.company}
//                   </span>

//                   {experience.isCurrent && <Badge>Current</Badge>}
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-2 lg:ml-auto">
//               <Badge variant="secondary">{experience.employmentType}</Badge>

//               <Badge variant="outline">{experience.workMode}</Badge>
//             </div>
//           </div>

//           <div className="mt-5 flex flex-wrap gap-4 text-sm text-muted-foreground">
//             <div className="flex items-center gap-2">
//               <CalendarIcon className="size-4" />

//               <span>
//                 {getDuration(experience.startDate, experience.endDate)}
//               </span>
//             </div>

//             {experience.location && (
//               <div className="flex items-center gap-2">
//                 <MapPinIcon className="size-4" />

//                 <span>{experience.location}</span>
//               </div>
//             )}
//           </div>

//           {experience.summary && (
//             <p className="mt-5 leading-relaxed text-muted-foreground">
//               {experience.summary}
//             </p>
//           )}

//           {experience.responsibilities.length > 0 && (
//             <ul className="mt-5 space-y-2">
//               {experience.responsibilities.map((responsibility) => (
//                 <li
//                   key={responsibility}
//                   className="flex gap-3 text-sm text-muted-foreground"
//                 >
//                   <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />

//                   <span>{responsibility}</span>
//                 </li>
//               ))}
//             </ul>
//           )}

//           {experience.technologies.length > 0 && (
//             <div className="mt-6 flex flex-wrap gap-2">
//               {experience.technologies.map((technology) => (
//                 <Badge key={technology} variant="outline">
//                   {technology}
//                 </Badge>
//               ))}
//             </div>
//           )}

//           {experience.companyWebsite && (
//             <div className="mt-6">
//               <Button asChild variant="ghost" className="px-0">
//                 <Link
//                   href={experience.companyWebsite}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={`Visit ${experience.company} website`}
//                 >
//                   Visit Company
//                   <ArrowUpRightIcon className="ml-2 size-4" />
//                 </Link>
//               </Button>
//             </div>
//           )}
//         </div>
//       </Card>
//     </article>
//   );
// }

// export function ExperienceSection({
//   experiences,
// }: Readonly<ExperienceSectionProps>): React.JSX.Element {
//   const sortedExperiences = React.useMemo(
//     () =>
//       [...experiences].sort((a, b) => {
//         if (a.sortOrder !== b.sortOrder) {
//           return b.sortOrder - a.sortOrder;
//         }

//         return (
//           new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//         );
//       }),
//     [experiences],
//   );

//   if (sortedExperiences.length === 0) {
//     return null;
//   }

//   return (
//     <section
//       id="experience"
//       className="py-24"
//       aria-labelledby="experience-heading"
//     >
//       <div className="container mx-auto px-4">
//         <div className="mx-auto mb-16 max-w-3xl text-center">
//           <Badge variant="outline" className="mb-4">
//             Experience
//           </Badge>

//           <h2
//             id="experience-heading"
//             className="text-3xl font-bold tracking-tight sm:text-4xl"
//           >
//             Professional Journey
//           </h2>

//           <p className="mt-4 text-muted-foreground">
//             Building scalable products, solving complex business challenges, and
//             delivering impactful digital experiences across modern technologies.
//           </p>
//         </div>

//         <div className="mx-auto max-w-5xl space-y-10">
//           {sortedExperiences.map((experience, index) => (
//             <ExperienceCard
//               key={experience._id}
//               experience={experience}
//               isLast={index === sortedExperiences.length - 1}
//             />
//           ))}
//         </div>

//         <div className="mt-16 text-center">
//           <Button asChild size="lg">
//             <Link href={ROUTES.CONTACT}>
//               Lets Work Together
//               <ArrowUpRightIcon className="ml-2 size-4" />
//             </Link>
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }
