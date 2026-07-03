// // src/modules/home/components/home-loading.tsx

// import { Skeleton } from "@/components/ui/skeleton";

// export function HomeLoading() {
//   return (
//     <main className="overflow-hidden">
//       {/* Hero Section */}
//       <section className="container mx-auto min-h-screen px-4 py-24 md:px-6">
//         <div className="grid items-center gap-12 lg:grid-cols-2">
//           <div className="space-y-6">
//             <Skeleton className="h-8 w-32 rounded-full" />

//             <Skeleton className="h-16 w-full max-w-2xl" />

//             <Skeleton className="h-16 w-4/5 max-w-xl" />

//             <div className="space-y-3">
//               <Skeleton className="h-5 w-full max-w-2xl" />
//               <Skeleton className="h-5 w-full max-w-xl" />
//               <Skeleton className="h-5 w-3/4 max-w-lg" />
//             </div>

//             <div className="flex flex-wrap gap-4 pt-4">
//               <Skeleton className="h-12 w-40" />
//               <Skeleton className="h-12 w-40" />
//             </div>

//             <div className="flex gap-4 pt-2">
//               {Array.from({
//                 length: 4,
//               }).map((_, index) => (
//                 <Skeleton
//                   key={index}
//                   className="h-10 w-10 rounded-full"
//                 />
//               ))}
//             </div>
//           </div>

//           <div className="flex justify-center">
//             <Skeleton className="aspect-square h-[420px] w-[420px] rounded-3xl" />
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="container mx-auto px-4 py-24 md:px-6">
//         <div className="mb-12 text-center">
//           <Skeleton className="mx-auto mb-4 h-8 w-32" />
//           <Skeleton className="mx-auto h-12 w-72" />
//         </div>

//         <div className="grid gap-10 lg:grid-cols-2">
//           <Skeleton className="h-[420px] rounded-3xl" />

//           <div className="space-y-5">
//             <Skeleton className="h-10 w-60" />

//             <Skeleton className="h-5 w-full" />
//             <Skeleton className="h-5 w-full" />
//             <Skeleton className="h-5 w-4/5" />

//             <div className="grid grid-cols-2 gap-4 pt-4">
//               {Array.from({
//                 length: 4,
//               }).map((_, index) => (
//                 <Skeleton
//                   key={index}
//                   className="h-28 rounded-xl"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section className="container mx-auto px-4 py-24 md:px-6">
//         <div className="mb-12 text-center">
//           <Skeleton className="mx-auto mb-4 h-8 w-32" />
//           <Skeleton className="mx-auto h-12 w-80" />
//         </div>

//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//           {Array.from({
//             length: 8,
//           }).map((_, index) => (
//             <Skeleton
//               key={index}
//               className="h-40 rounded-2xl"
//             />
//           ))}
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="container mx-auto px-4 py-24 md:px-6">
//         <div className="mb-12 text-center">
//           <Skeleton className="mx-auto mb-4 h-8 w-32" />
//           <Skeleton className="mx-auto h-12 w-72" />
//         </div>

//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {Array.from({
//             length: 6,
//           }).map((_, index) => (
//             <Skeleton
//               key={index}
//               className="h-80 rounded-2xl"
//             />
//           ))}
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section className="container mx-auto px-4 py-24 md:px-6">
//         <div className="mb-12 text-center">
//           <Skeleton className="mx-auto mb-4 h-8 w-36" />
//           <Skeleton className="mx-auto h-12 w-80" />
//         </div>

//         <div className="mx-auto max-w-4xl space-y-6">
//           {Array.from({
//             length: 4,
//           }).map((_, index) => (
//             <Skeleton
//               key={index}
//               className="h-44 rounded-2xl"
//             />
//           ))}
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section className="container mx-auto px-4 py-24 md:px-6">
//         <div className="mb-12 text-center">
//           <Skeleton className="mx-auto mb-4 h-8 w-32" />
//           <Skeleton className="mx-auto h-12 w-72" />
//         </div>

//         <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
//           {Array.from({
//             length: 6,
//           }).map((_, index) => (
//             <div
//               key={index}
//               className="space-y-4"
//             >
//               <Skeleton className="aspect-video rounded-2xl" />

//               <Skeleton className="h-8 w-3/4" />

//               <Skeleton className="h-5 w-full" />

//               <Skeleton className="h-5 w-4/5" />

//               <div className="flex gap-2">
//                 <Skeleton className="h-8 w-20 rounded-full" />
//                 <Skeleton className="h-8 w-20 rounded-full" />
//                 <Skeleton className="h-8 w-20 rounded-full" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="container mx-auto px-4 py-24 md:px-6">
//         <div className="mb-12 text-center">
//           <Skeleton className="mx-auto mb-4 h-8 w-40" />
//           <Skeleton className="mx-auto h-12 w-96" />
//         </div>

//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {Array.from({
//             length: 3,
//           }).map((_, index) => (
//             <Skeleton
//               key={index}
//               className="h-80 rounded-2xl"
//             />
//           ))}
//         </div>
//       </section>

//       {/* Blog Section */}
//       <section className="container mx-auto px-4 py-24 md:px-6">
//         <div className="mb-12 text-center">
//           <Skeleton className="mx-auto mb-4 h-8 w-32" />
//           <Skeleton className="mx-auto h-12 w-72" />
//         </div>

//         <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
//           {Array.from({
//             length: 3,
//           }).map((_, index) => (
//             <div
//               key={index}
//               className="space-y-4"
//             >
//               <Skeleton className="aspect-video rounded-2xl" />

//               <Skeleton className="h-6 w-24" />

//               <Skeleton className="h-8 w-full" />

//               <Skeleton className="h-5 w-full" />

//               <Skeleton className="h-5 w-4/5" />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="container mx-auto px-4 py-24 md:px-6">
//         <div className="mb-12 text-center">
//           <Skeleton className="mx-auto mb-4 h-8 w-32" />
//           <Skeleton className="mx-auto h-12 w-80" />
//         </div>

//         <div className="grid gap-10 lg:grid-cols-5">
//           <div className="space-y-4 lg:col-span-2">
//             {Array.from({
//               length: 4,
//             }).map((_, index) => (
//               <Skeleton
//                 key={index}
//                 className="h-24 rounded-2xl"
//               />
//             ))}
//           </div>

//           <div className="lg:col-span-3">
//             <Skeleton className="h-[600px] rounded-3xl" />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }