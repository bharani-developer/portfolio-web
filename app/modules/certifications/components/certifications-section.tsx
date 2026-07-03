// "use client";

// import * as React from "react";

// import Image from "next/image";
// import Link from "next/link";

// import { AwardIcon, CalendarIcon, ExternalLinkIcon } from "lucide-react";

// import { motion } from "framer-motion";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";

// import type {
//   Certification,
//   CertificationsSectionProps,
// } from "@/app/modules//certifications/types/certifications.types";

// function formatDate(date: string): string {
//   return new Intl.DateTimeFormat("en-US", {
//     month: "short",
//     year: "numeric",
//   }).format(new Date(date));
// }

// function isExpired(certification: Certification): boolean {
//   if (certification.neverExpires || !certification.expiryDate) {
//     return false;
//   }

//   return new Date(certification.expiryDate) < new Date();
// }

// interface CertificationCardProps {
//   certification: Certification;

//   index: number;
// }

// function CertificationCard({
//   certification,
//   index,
// }: Readonly<CertificationCardProps>): React.JSX.Element {
//   const expired = isExpired(certification);

//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         y: 24,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//       }}
//       viewport={{
//         once: true,
//       }}
//       transition={{
//         duration: 0.4,
//         delay: index * 0.08,
//       }}
//     >
//       {" "}
//       <Card className="group flex h-full flex-col overflow-hidden border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl">
//         {certification.certificateImage?.url && (
//           <div className="relative aspect-[16/9] overflow-hidden border-b">
//             <Image
//               src={certification.certificateImage.url}
//               alt={certification.title}
//               fill
//               sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
//               className="object-cover transition-transform duration-500 group-hover:scale-105"
//             />{" "}
//           </div>
//         )}

//         <CardHeader className="space-y-4">
//           <div className="flex items-start justify-between gap-3">
//             <div>
//               <h3 className="line-clamp-2 text-lg font-semibold">
//                 {certification.title}
//               </h3>

//               <p className="mt-1 text-sm text-primary">
//                 {certification.issuer}
//               </p>
//             </div>

//             <AwardIcon className="size-5 shrink-0 text-primary" />
//           </div>

//           <div className="flex flex-wrap gap-2">
//             <Badge variant={expired ? "destructive" : "secondary"}>
//               {expired ? "Expired" : "Valid"}
//             </Badge>

//             {certification.neverExpires && (
//               <Badge variant="outline">Never Expires</Badge>
//             )}
//           </div>
//         </CardHeader>

//         <CardContent className="flex-1 space-y-4">
//           {certification.description && (
//             <p className="line-clamp-4 text-sm leading-relaxed text-muted-foreground">
//               {certification.description}
//             </p>
//           )}

//           <div className="space-y-2 text-sm text-muted-foreground">
//             <div className="flex items-center gap-2">
//               <CalendarIcon className="size-4" />

//               <span>Issued {formatDate(certification.issueDate)}</span>
//             </div>

//             {certification.expiryDate && !certification.neverExpires && (
//               <div className="flex items-center gap-2">
//                 <CalendarIcon className="size-4" />

//                 <span>Expires {formatDate(certification.expiryDate)}</span>
//               </div>
//             )}
//           </div>

//           {certification.skills.length > 0 && (
//             <div className="flex flex-wrap gap-2">
//               {certification.skills.map((skill) => (
//                 <Badge key={skill} variant="outline">
//                   {skill}
//                 </Badge>
//               ))}
//             </div>
//           )}
//         </CardContent>

//         <CardFooter>
//           {certification.credentialUrl ? (
//             <Button asChild variant="outline" className="w-full">
//               <Link
//                 href={certification.credentialUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Verify Credential
//                 <ExternalLinkIcon className="ml-2 size-4" />
//               </Link>
//             </Button>
//           ) : (
//             <div className="h-10 w-full" />
//           )}
//         </CardFooter>
//       </Card>
//     </motion.div>
//   );
// }

// export function CertificationsSection({
//   certifications,
// }: Readonly<CertificationsSectionProps>): React.JSX.Element {
//   if (certifications.length === 0) {
//     return <></>;
//   }

//   return (
//     <section
//       id="certifications"
//       className="py-24 sm:py-32"
//       aria-labelledby="certifications-heading"
//     >
//       {" "}
//       <div className="container mx-auto px-4">
//         {" "}
//         <div className="mx-auto mb-16 max-w-3xl text-center">
//           {" "}
//           <Badge variant="outline" className="mb-4">
//             Certifications{" "}
//           </Badge>
//           <h2
//             id="certifications-heading"
//             className="text-4xl font-bold tracking-tight sm:text-5xl"
//           >
//             Professional Certifications
//           </h2>
//           <p className="mt-4 text-lg text-muted-foreground">
//             Industry-recognized certifications validating expertise in software
//             development, architecture, cloud technologies, and engineering best
//             practices.
//           </p>
//         </div>
//         <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//           {certifications.map((certification, index) => (
//             <CertificationCard
//               key={certification._id}
//               certification={certification}
//               index={index}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
