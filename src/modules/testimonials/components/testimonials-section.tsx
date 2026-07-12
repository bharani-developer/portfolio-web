// "use client";

// import * as React from "react";

// import { MessageSquareQuote, Star, Users } from "lucide-react";

// import { Card } from "@/components/ui/card";

// import { TestimonialCard } from "./testimonial-card";

// import type {
//   Testimonial,
//   TestimonialsSectionProps,
// } from "@/app/modules//testimonials/types/testimonials.types";

// interface ExtendedTestimonialsSectionProps extends TestimonialsSectionProps {
//   title?: string;

//   description?: string;

//   showStats?: boolean;

//   maxItems?: number;

//   emptyTitle?: string;

//   emptyDescription?: string;

//   className?: string;
// }

// export function TestimonialsSection({
//   testimonials,
//   title = "Client Testimonials",
//   description = "Feedback and reviews from clients, startups, businesses, and organizations I have worked with.",
//   showStats = true,
//   maxItems,
//   emptyTitle = "No Testimonials Yet",
//   emptyDescription = "Testimonials will appear here once available.",
//   className,
// }: Readonly<ExtendedTestimonialsSectionProps>): React.JSX.Element {
//   const displayedTestimonials = React.useMemo(() => {
//     const sorted = [...testimonials].sort((a, b) => {
//       if (a.isFeatured && !b.isFeatured) {
//         return -1;
//       }

//       if (!a.isFeatured && b.isFeatured) {
//         return 1;
//       }

//       return a.sortOrder - b.sortOrder;
//     });

//     return maxItems ? sorted.slice(0, maxItems) : sorted;
//   }, [testimonials, maxItems]);

//   const stats = React.useMemo(() => {
//     const total = testimonials.length;

//     const featured = testimonials.filter(
//       (testimonial) => testimonial.isFeatured,
//     ).length;

//     const average =
//       total > 0
//         ? testimonials.reduce(
//             (sum, testimonial) => sum + testimonial.rating,
//             0,
//           ) / total
//         : 0;

//     return {
//       total,
//       featured,
//       average,
//     };
//   }, [testimonials]);

//   if (displayedTestimonials.length === 0) {
//     return (
//       <section
//         id="testimonials"
//         aria-labelledby="testimonials-heading"
//         className={className}
//       >
//         <div className="container mx-auto px-4">
//           <Card className="flex flex-col items-center justify-center gap-4 py-16 text-center">
//             <MessageSquareQuote className="size-12 text-muted-foreground" />

//             <div>
//               <h2 className="text-xl font-semibold">{emptyTitle}</h2>

//               <p className="mt-2 text-sm text-muted-foreground">
//                 {emptyDescription}
//               </p>
//             </div>
//           </Card>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section
//       id="testimonials"
//       aria-labelledby="testimonials-heading"
//       className={className}
//     >
//       <div className="container mx-auto px-4">
//         <div className="mx-auto mb-12 max-w-3xl text-center">
//           <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
//             <MessageSquareQuote className="size-4" />
//             Testimonials
//           </div>

//           <h2
//             id="testimonials-heading"
//             className="text-3xl font-bold tracking-tight md:text-5xl"
//           >
//             {title}
//           </h2>

//           <p className="mt-4 text-base text-muted-foreground md:text-lg">
//             {description}
//           </p>
//         </div>

//         {showStats ? (
//           <div className="mb-12 grid gap-4 md:grid-cols-3">
//             <Card className="p-6">
//               <div className="flex items-center gap-4">
//                 <Star className="size-6" />

//                 <div>
//                   <p className="text-sm text-muted-foreground">
//                     Average Rating
//                   </p>

//                   <p className="text-2xl font-bold">
//                     {stats.average.toFixed(1)}
//                     /5
//                   </p>
//                 </div>
//               </div>
//             </Card>

//             <Card className="p-6">
//               <div className="flex items-center gap-4">
//                 <Users className="size-6" />

//                 <div>
//                   <p className="text-sm text-muted-foreground">Total Reviews</p>

//                   <p className="text-2xl font-bold">{stats.total}</p>
//                 </div>
//               </div>
//             </Card>

//             <Card className="p-6">
//               <div className="flex items-center gap-4">
//                 <MessageSquareQuote className="size-6" />

//                 <div>
//                   <p className="text-sm text-muted-foreground">
//                     Featured Reviews
//                   </p>

//                   <p className="text-2xl font-bold">{stats.featured}</p>
//                 </div>
//               </div>
//             </Card>
//           </div>
//         ) : null}

//         <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//           {displayedTestimonials.map((testimonial) => (
//             <TestimonialCard key={testimonial._id} testimonial={testimonial} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
