// // src/modules/testimonials/components/testimonial-card.tsx

// "use client";

// import Image from "next/image";
// import Link from "next/link";

// import { Building2, ExternalLink, Quote, Star, BadgeCheck } from "lucide-react";

// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";

// import { Badge } from "@/components/ui/badge";

// import { cn } from "@/app/shared/lib/utils";

// import type { TestimonialCardProps } from "@/app/modules//testimonials/types/testimonials.types";

// function StarRating({ rating }: { rating: number }) {
//   return (
//     <div
//       className="flex items-center gap-1"
//       aria-label={`Rating ${rating} out of 5`}
//     >
//       {Array.from({
//         length: 5,
//       }).map((_, index) => (
//         <Star
//           key={index}
//           className={cn(
//             "size-4",
//             index < rating ? "fill-current" : "text-muted-foreground/30",
//           )}
//         />
//       ))}
//     </div>
//   );
// }

// export function TestimonialCard({ testimonial }: TestimonialCardProps) {
//   const {
//     clientName,
//     clientPosition,
//     clientCompany,
//     clientImage,
//     clientWebsite,
//     projectName,
//     review,
//     rating,
//     clientType,
//     isFeatured,
//   } = testimonial;

//   return (
//     <Card
//       className={cn(
//         "group relative flex h-full flex-col overflow-hidden border transition-all duration-300",
//         "hover:-translate-y-1 hover:shadow-xl",
//       )}
//     >
//       {isFeatured && (
//         <div className="absolute right-4 top-4 z-10">
//           <Badge variant="secondary" className="gap-1">
//             <BadgeCheck className="size-3.5" />
//             Featured
//           </Badge>
//         </div>
//       )}

//       <CardHeader className="pb-4">
//         <div className="mb-4 flex items-center justify-between">
//           <StarRating rating={rating} />

//           <Quote className="size-8 text-muted-foreground/30" />
//         </div>

//         <blockquote className="line-clamp-6 text-sm leading-7 text-muted-foreground">
//           “{review}”
//         </blockquote>
//       </CardHeader>

//       <CardContent className="flex-1">
//         {projectName && (
//           <div className="mb-4">
//             <Badge variant="outline" className="font-medium">
//               {projectName}
//             </Badge>
//           </div>
//         )}
//       </CardContent>

//       <CardFooter className="mt-auto border-t pt-5">
//         <div className="flex w-full items-center gap-4">
//           <div className="relative size-14 overflow-hidden rounded-full border bg-muted">
//             {clientImage?.url ? (
//               <Image
//                 src={clientImage.url}
//                 alt={clientName}
//                 fill
//                 sizes="56px"
//                 className="object-cover"
//               />
//             ) : (
//               <div className="flex h-full w-full items-center justify-center text-lg font-semibold">
//                 {clientName.charAt(0).toUpperCase()}
//               </div>
//             )}
//           </div>

//           <div className="min-w-0 flex-1">
//             <h3 className="truncate font-semibold">{clientName}</h3>

//             {(clientPosition || clientCompany) && (
//               <p className="truncate text-sm text-muted-foreground">
//                 {clientPosition}
//                 {clientPosition && clientCompany && " • "}
//                 {clientCompany}
//               </p>
//             )}

//             <div className="mt-2 flex flex-wrap items-center gap-2">
//               <Badge variant="secondary" className="text-xs">
//                 {clientType}
//               </Badge>

//               {clientCompany && (
//                 <Badge variant="outline" className="gap-1 text-xs">
//                   <Building2 className="size-3" />
//                   {clientCompany}
//                 </Badge>
//               )}
//             </div>
//           </div>

//           {clientWebsite && (
//             <Link
//               href={clientWebsite}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label={`Visit ${clientName} website`}
//               className={cn(
//                 "inline-flex size-9 items-center justify-center rounded-md border transition-colors",
//                 "hover:bg-accent hover:text-accent-foreground",
//               )}
//             >
//               <ExternalLink className="size-4" />
//             </Link>
//           )}
//         </div>
//       </CardFooter>
//     </Card>
//   );
// }
