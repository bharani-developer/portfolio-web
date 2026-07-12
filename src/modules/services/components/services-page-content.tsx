// // src/modules/services/components/services-page-content.tsx

// "use client";

// import * as React from "react";

// import Link from "next/link";

// import {
//   ArrowRightIcon,
//   Code2Icon,
//   DatabaseIcon,
//   GlobeIcon,
//   Layers3Icon,
//   MonitorSmartphoneIcon,
//   ServerIcon,
//   SettingsIcon,
// } from "lucide-react";

// import { EmptyState } from "@/components/common/empty-state";
// import { ErrorState } from "@/components/common/error-state";
// import { PageHeader } from "@/components/common/page-header";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// import { useServices } from "@/app/modules//services/hooks/use-services";

// import { ROUTES } from "@/app/shared/constants/routes";

// import type { Service } from "@/app/modules//services/types/services.types";

// interface ServiceCardProps {
//   service: Service;
// }

// function ServiceIcon({ icon }: { icon?: string }): React.JSX.Element {
//   const iconKey = icon?.toLowerCase();

//   switch (iconKey) {
//     case "web":
//     case "globe":
//       return <GlobeIcon className="size-7 text-primary" />;

//     case "frontend":
//       return <Layers3Icon className="size-7 text-primary" />;

//     case "backend":
//     case "server":
//       return <ServerIcon className="size-7 text-primary" />;

//     case "database":
//       return <DatabaseIcon className="size-7 text-primary" />;

//     case "mobile":
//       return <MonitorSmartphoneIcon className="size-7 text-primary" />;

//     case "devops":
//       return <SettingsIcon className="size-7 text-primary" />;

//     default:
//       return <Code2Icon className="size-7 text-primary" />;
//   }
// }

// function ServiceCard({
//   service,
// }: Readonly<ServiceCardProps>): React.JSX.Element {
//   return (
//     <Card className="group h-full border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
//       <CardHeader className="space-y-4">
//         <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15"></div>

//         <CardTitle className="text-xl">{service.title}</CardTitle>
//       </CardHeader>

//       <CardContent className="flex h-full flex-col">
//         <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
//           {service.shortDescription}
//         </p>

//         <Button asChild variant="ghost" className="justify-start px-0">
//           <Link href={ROUTES.CONTACT}>
//             Get Started
//             <ArrowRightIcon className="ml-2 size-4" />
//           </Link>
//         </Button>
//       </CardContent>
//     </Card>
//   );
// }

// function ServicesSkeleton(): React.JSX.Element {
//   return (
//     <section className="pb-20">
//       <div className="container mx-auto px-4">
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {Array.from({ length: 6 }).map((_, index) => (
//             <Card key={index} className="h-72 animate-pulse">
//               <CardContent className="h-full" />
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export function ServicesPageContent(): React.JSX.Element {
//   const { services, isLoading, isError, error, refetch } = useServices({
//     isActive: true,
//     sort: "sortOrder",
//   });

//   if (isLoading) {
//     return (
//       <main className="min-h-screen">
//         <PageHeader
//           title="Services"
//           description="Professional software development services tailored to modern businesses and startups."
//         />

//         <ServicesSkeleton />
//       </main>
//     );
//   }

//   if (isError) {
//     return (
//       <main className="min-h-screen">
//         <PageHeader
//           title="Services"
//           description="Professional software development services tailored to modern businesses and startups."
//         />

//         <section className="pb-20">
//           <div className="container mx-auto px-4">
//             <ErrorState
//               title="Failed to load services"
//               description={
//                 error?.message ?? "Something went wrong while loading services."
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

//   if (services.length === 0) {
//     return (
//       <main className="min-h-screen">
//         <PageHeader
//           title="Services"
//           description="Professional software development services tailored to modern businesses and startups."
//         />

//         <section className="pb-20">
//           <div className="container mx-auto px-4">
//             <EmptyState
//               title="No Services Available"
//               description="Services will be published soon."
//             />
//           </div>
//         </section>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen">
//       <PageHeader
//         title="Services"
//         description="Comprehensive software development solutions focused on performance, scalability, maintainability, and user experience."
//       />

//       <section className="pb-20">
//         <div className="container mx-auto px-4">
//           <div className="mx-auto mb-16 max-w-3xl text-center">
//             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
//               Solutions Designed for Growth
//             </h2>

//             <p className="mt-4 text-muted-foreground">
//               From frontend experiences to backend architecture, I help
//               businesses build reliable, scalable, and modern digital products.
//             </p>
//           </div>

//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {services.map((service) => (
//               <ServiceCard key={service._id} service={service} />
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="border-t py-20">
//         <div className="container mx-auto px-4">
//           <div className="mx-auto max-w-3xl rounded-3xl border bg-card p-10 text-center">
//             <h2 className="text-3xl font-bold">Have a Project in Mind?</h2>

//             <p className="mt-4 text-muted-foreground">
//               Whether you&apos;re building a new product, improving an existing
//               platform, or need technical guidance, let&apos;s discuss how we
//               can work together.
//             </p>

//             <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
//               <Button asChild size="lg">
//                 <Link href={ROUTES.CONTACT}>
//                   Start a Project
//                   <ArrowRightIcon className="ml-2 size-4" />
//                 </Link>
//               </Button>

//               <Button asChild size="lg" variant="outline">
//                 <Link href={ROUTES.PROJECTS}>View Projects</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
