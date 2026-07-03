// "use client";

// import * as React from "react";

// import Link from "next/link";

// import {
//   ArrowRightIcon,
//   CodeIcon,
//   DatabaseIcon,
//   GlobeIcon,
//   SmartphoneIcon,
//   WrenchIcon,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";

// import { SectionHeader } from "@/components/common/section-header";
// import { EmptyState } from "@/components/common/empty-state";

// import { ROUTES } from "@/app/shared/constants/routes";

// import type {
//   Service,
//   ServicesSectionProps,
// } from "@/app/modules//services/types/services.types";

// interface ExtendedServicesSectionProps extends ServicesSectionProps {
//   title?: string;

//   description?: string;

//   showViewAll?: boolean;

//   viewAllHref?: string;

//   emptyTitle?: string;

//   emptyDescription?: string;

//   className?: string;
// }

// const ICON_MAP = {
//   code: CodeIcon,
//   globe: GlobeIcon,
//   database: DatabaseIcon,
//   smartphone: SmartphoneIcon,
//   tools: WrenchIcon,
// } as const;

// function getServiceIcon(icon?: string): React.ComponentType<{
//   className?: string;
// }> {
//   if (!icon) {
//     return CodeIcon;
//   }

//   return ICON_MAP[icon.toLowerCase() as keyof typeof ICON_MAP] ?? CodeIcon;
// }

// function ServiceCard({
//   service,
// }: Readonly<{
//   service: Service;
// }>): React.JSX.Element {
//   const Icon = getServiceIcon(service.icon);

//   return (
//     <Card className="group h-full border-border/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg">
//       {" "}
//       <CardHeader>
//         {" "}
//         <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10">
//           {" "}
//           {/* <Icon className="size-7 text-primary" />{" "} */}
//         </div>{" "}
//       </CardHeader>
//       <CardContent className="flex h-full flex-col space-y-4">
//         <h3 className="text-xl font-semibold">{service.title}</h3>

//         <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
//           {service.shortDescription}
//         </p>

//         <div className="mt-auto">
//           <Button asChild variant="ghost" className="px-0">
//             <Link
//               href={ROUTES.SERVICES}
//               aria-label={`Learn more about ${service.title}`}
//             >
//               Learn More
//               <ArrowRightIcon className="ml-2 size-4" />
//             </Link>
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// export function ServicesSection({
//   services,
//   title = "Services I Offer",
//   description = "End-to-end development services focused on performance, scalability, maintainability, and exceptional user experiences.",
//   showViewAll = true,
//   viewAllHref = ROUTES.SERVICES,
//   emptyTitle = "No Services Available",
//   emptyDescription = "Service information will be available soon.",
//   className,
// }: Readonly<ExtendedServicesSectionProps>): React.JSX.Element {
//   const sortedServices = React.useMemo(
//     () =>
//       [...services].sort((a, b) => {
//         if (a.sortOrder !== b.sortOrder) {
//           return a.sortOrder - b.sortOrder;
//         }

//         return (
//           new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//         );
//       }),
//     [services],
//   );

//   if (sortedServices.length === 0) {
//     return (
//       <section
//         id="services"
//         className={className}
//         aria-labelledby="services-heading"
//       >
//         {" "}
//         <div className="container mx-auto px-4">
//           {" "}
//           <SectionHeader
//             badge="Services"
//             title={title}
//             description={description}
//             align="center"
//           />
//           <EmptyState title={emptyTitle} description={emptyDescription} />
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section
//       id="services"
//       className={className}
//       aria-labelledby="services-heading"
//     >
//       {" "}
//       <div className="container mx-auto px-4">
//         {" "}
//         <SectionHeader
//           badge="Services"
//           title={title}
//           description={description}
//           align="center"
//         />
//         <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {sortedServices.map((service) => (
//             <ServiceCard key={service._id} service={service} />
//           ))}
//         </div>
//         {showViewAll && (
//           <div className="mt-12 flex justify-center">
//             <Button asChild size="lg">
//               <Link href={viewAllHref}>
//                 View All Services
//                 <ArrowRightIcon className="ml-2 size-4" />
//               </Link>
//             </Button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
