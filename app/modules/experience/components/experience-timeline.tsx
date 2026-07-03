// "use client";

// import * as React from "react";

// import {
//   BriefcaseBusinessIcon,
//   Building2Icon,
//   CalendarIcon,
//   MapPinIcon,
// } from "lucide-react";

// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";

// import type { Experience } from "@/app/modules//experience/types/experience.types";

// export interface ExperienceCardProps {
//   experience: Experience;

//   isLast?: boolean;
// }

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

// export function ExperienceCard({
//   experience,
//   isLast = false,
// }: Readonly<ExperienceCardProps>): React.JSX.Element {
//   return (
//     <div className="relative pl-10">
//       {!isLast ? (
//         <div className="absolute left-[18px] top-10 h-[calc(100%+2rem)] w-px bg-border" />
//       ) : null}

//       <div className="absolute left-0 top-2 flex size-9 items-center justify-center rounded-full border border-border bg-background shadow-sm">
//         <BriefcaseBusinessIcon className="size-4 text-primary" />
//       </div>

//       <Card className="overflow-hidden border-border/60 transition-all duration-300 hover:border-primary/20 hover:shadow-lg">
//         <CardContent className="p-6">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
//             <div className="space-y-2">
//               <div className="flex flex-wrap items-center gap-2">
//                 <h3 className="text-xl font-semibold tracking-tight">
//                   {experience.position}
//                 </h3>

//                 {experience.isCurrent ? <Badge>Current</Badge> : null}
//               </div>

//               <div className="flex flex-wrap items-center gap-2 text-sm">
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

//           <p className="mt-5 leading-7 text-muted-foreground">
//             {experience.summary}
//           </p>

//           {experience.responsibilities.length > 0 ? (
//             <div className="mt-6">
//               <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground">
//                 Responsibilities
//               </h4>

//               <ul className="space-y-2">
//                 {experience.responsibilities.map((responsibility) => (
//                   <li
//                     key={responsibility}
//                     className="flex gap-3 text-sm text-muted-foreground"
//                   >
//                     <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />

//                     <span>{responsibility}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ) : null}

//           {experience.technologies.length > 0 ? (
//             <div className="mt-6">
//               <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground">
//                 Technologies
//               </h4>

//               <div className="flex flex-wrap gap-2">
//                 {experience.technologies.map((technology) => (
//                   <Badge key={technology} variant="outline">
//                     {technology}
//                   </Badge>
//                 ))}
//               </div>
//             </div>
//           ) : null}

//           {experience.companyWebsite ? (
//             <div className="mt-6 border-t pt-4">
//               <a
//                 href={experience.companyWebsite}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-sm font-medium text-primary transition-colors hover:underline"
//               >
//                 Visit Company Website
//               </a>
//             </div>
//           ) : null}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
