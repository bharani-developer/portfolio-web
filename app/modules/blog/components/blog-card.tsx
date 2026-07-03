// // src/modules/blog/components/blog-card.tsx

// import Image from "next/image";
// import Link from "next/link";

// import {
//   ArrowRight,
//   BookOpen,
//   CalendarDays,
//   Eye,
//   Sparkles,
//   User,
// } from "lucide-react";

// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";

// import { formatDate } from "@/app/shared/lib/utils";

// import type { BlogCardProps } from "../types/blog.types";

// export function BlogCard({ blog }: BlogCardProps) {
//   const imageUrl = blog.featuredImage?.url ?? "/images/blog-placeholder.webp";

//   return (
//     <Card
//       className="
//         group
//         h-full
//         overflow-hidden
//         border-border/50
//         bg-background/60
//         backdrop-blur-sm
//         transition-all
//         duration-300
//         hover:-translate-y-1
//         hover:border-primary/30
//         hover:shadow-xl
//       "
//     >
//       <Link
//         href={`/blogs/${blog.slug}`}
//         aria-label={`Read ${blog.title}`}
//         className="block"
//       >
//         <div className="relative aspect-[16/10] overflow-hidden">
//           <Image
//             src={imageUrl}
//             alt={blog.title}
//             fill
//             priority={false}
//             sizes="
//               (max-width: 768px) 100vw,
//               (max-width: 1280px) 50vw,
//               33vw
//             "
//             className="
//               object-cover
//               transition-transform
//               duration-500
//               group-hover:scale-105
//             "
//           />

//           <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

//           <div className="absolute left-4 top-4 flex flex-wrap gap-2">
//             <Badge
//               variant="secondary"
//               className="
//                 bg-background/90
//                 backdrop-blur
//               "
//             >
//               {blog.category}
//             </Badge>

//             {blog.isFeatured && (
//               <Badge
//                 className="
//                   gap-1
//                 "
//               >
//                 <Sparkles className="size-3" />
//                 Featured
//               </Badge>
//             )}
//           </div>
//         </div>
//       </Link>

//       <CardContent className="space-y-4 p-6">
//         <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
//           <div className="flex items-center gap-1">
//             <CalendarDays className="size-3.5" />

//             <span>
//               {blog.publishedAt ? formatDate(blog.publishedAt) : "Draft"}
//             </span>
//           </div>

//           <div className="flex items-center gap-1">
//             <BookOpen className="size-3.5" />

//             <span>{blog.readTime} min read</span>
//           </div>

//           <div className="flex items-center gap-1">
//             <Eye className="size-3.5" />

//             <span>{blog.viewCount.toLocaleString()}</span>
//           </div>
//         </div>

//         <div className="space-y-3">
//           <Link href={`/blogs/${blog.slug}`} className="block">
//             <h3
//               className="
//                 line-clamp-2
//                 text-xl
//                 font-bold
//                 leading-snug
//                 tracking-tight
//                 transition-colors
//                 group-hover:text-primary
//               "
//             >
//               {blog.title}
//             </h3>
//           </Link>

//           <p
//             className="
//               line-clamp-3
//               text-sm
//               leading-relaxed
//               text-muted-foreground
//             "
//           >
//             {blog.excerpt}
//           </p>
//         </div>

//         {blog.tags.length > 0 && (
//           <div className="flex flex-wrap gap-2">
//             {blog.tags.slice(0, 3).map((tag) => (
//               <Badge
//                 key={tag}
//                 variant="outline"
//                 className="
//                     text-xs
//                   "
//               >
//                 #{tag}
//               </Badge>
//             ))}

//             {blog.tags.length > 3 && (
//               <Badge variant="outline" className="text-xs">
//                 +{blog.tags.length - 3}
//               </Badge>
//             )}
//           </div>
//         )}
//       </CardContent>

//       <CardFooter
//         className="
//           mt-auto
//           flex
//           items-center
//           justify-between
//           border-t
//           px-6
//           py-4
//         "
//       >
//         <div className="flex items-center gap-2 text-sm text-muted-foreground">
//           <User className="size-4" />

//           <span>{blog.author}</span>
//         </div>

//         <Link
//           href={`/blogs/${blog.slug}`}
//           className="
//             inline-flex
//             items-center
//             gap-2
//             text-sm
//             font-medium
//             text-primary
//             transition-all
//             hover:gap-3
//           "
//         >
//           Read More
//           <ArrowRight className="size-4" />
//         </Link>
//       </CardFooter>
//     </Card>
//   );
// }
