// "use client";

// import { memo } from "react";

// import Link from "next/link";

// import { ArrowRight, BookOpen } from "lucide-react";

// import { Button } from "@/components/ui/button";

// import { ROUTES } from "@/app/shared/constants/routes";

// import { BlogCard } from "./blog-card";

// import type { Blog, BlogsSectionProps } from "../types/blog.types";

// interface ExtendedBlogSectionProps extends BlogsSectionProps {
//   title?: string;

//   description?: string;

//   showViewAll?: boolean;

//   viewAllHref?: string;

//   emptyMessage?: string;

//   className?: string;
// }

// function BlogSectionComponent({
//   blogs,
//   title = "Latest Articles",
//   description = "Insights, tutorials, development experiences, and technology articles.",
//   showViewAll = true,
//   viewAllHref = ROUTES.BLOG,
//   emptyMessage = "No blog posts available at the moment.",
//   className,
// }: Readonly<ExtendedBlogSectionProps>): React.JSX.Element {
//   const hasBlogs = blogs.length > 0;

//   return (
//     <section
//       id="blogs"
//       aria-labelledby="blogs-heading"
//       className={["py-24 sm:py-32", className].filter(Boolean).join(" ")}
//     >
//       {" "}
//       <div className="container mx-auto px-4">
//         {" "}
//         <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
//           {" "}
//           <div className="max-w-3xl">
//             {" "}
//             <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium">
//               {" "}
//               <BookOpen className="size-4" />
//               Articles
//             </div>
//             <h2
//               id="blogs-heading"
//               className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
//             >
//               {title}
//             </h2>
//             <p className="mt-4 text-base leading-7 text-muted-foreground">
//               {description}
//             </p>
//           </div>
//           {showViewAll && hasBlogs && (
//             <Button asChild variant="outline">
//               <Link href={viewAllHref}>
//                 View All Articles
//                 <ArrowRight className="ml-2 size-4" />
//               </Link>
//             </Button>
//           )}
//         </div>
//         {!hasBlogs ? (
//           <div className="rounded-3xl border border-dashed bg-muted/20 p-12 text-center">
//             <BookOpen className="mx-auto mb-4 size-12 text-muted-foreground" />

//             <h3 className="text-xl font-semibold">No Articles Found</h3>

//             <p className="mt-2 text-muted-foreground">{emptyMessage}</p>
//           </div>
//         ) : (
//           <>
//             <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//               {blogs.map((blog: Blog) => (
//                 <BlogCard key={blog._id} blog={blog} />
//               ))}
//             </div>

//             {showViewAll && blogs.length >= 6 && (
//               <div className="mt-14 flex justify-center">
//                 <Button asChild size="lg">
//                   <Link href={viewAllHref}>
//                     Explore More Articles
//                     <ArrowRight className="ml-2 size-4" />
//                   </Link>
//                 </Button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </section>
//   );
// }

// export const BlogSection = memo(BlogSectionComponent);
