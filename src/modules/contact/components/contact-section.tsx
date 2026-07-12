// "use client";

// import * as React from "react";

// import { motion } from "framer-motion";

// import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";

// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";

// // import { ContactForm } from "./contact-form";

// const CONTACT_INFO = [
//   {
//     title: "Email",
//     value: "[bharani@example.com](mailto:bharani@example.com)",
//     href: "mailto:bharani@example.com",
//     icon: Mail,
//   },
//   {
//     title: "Phone",
//     value: "+91 9876543210",
//     href: "tel:+919876543210",
//     icon: Phone,
//   },
//   {
//     title: "Location",
//     value: "Tamil Nadu, India",
//     href: undefined,
//     icon: MapPin,
//   },
//   {
//     title: "Availability",
//     value: "Open for Freelance Projects",
//     href: undefined,
//     icon: MessageSquare,
//   },
// ] as const;

// export function ContactSection(): React.JSX.Element {
//   return (
//     <section
//       id="contact"
//       aria-labelledby="contact-heading"
//       className="relative py-24 sm:py-32"
//     >
//       {" "}
//       <div className="container mx-auto px-4">
//         {" "}
//         <div className="mx-auto max-w-7xl">
//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 20,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//             }}
//             transition={{
//               duration: 0.5,
//             }}
//             className="mb-16 text-center"
//           >
//             {" "}
//             <Badge variant="outline" className="mb-4">
//               Contact{" "}
//             </Badge>
//             <h2
//               id="contact-heading"
//               className="text-4xl font-bold tracking-tight sm:text-5xl"
//             >
//               Lets Work Together
//             </h2>
//             <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
//               Have a project in mind, a freelance opportunity, or simply want to
//               say hello? Id love to hear from you.
//             </p>
//           </motion.div>

//           <div className="grid gap-10 lg:grid-cols-5">
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: -24,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 x: 0,
//               }}
//               viewport={{
//                 once: true,
//               }}
//               transition={{
//                 duration: 0.5,
//               }}
//               className="space-y-6 lg:col-span-2"
//             >
//               <div>
//                 <h3 className="text-2xl font-semibold">Get In Touch</h3>

//                 <p className="mt-3 leading-7 text-muted-foreground">
//                   Whether you need a full-stack application, portfolio website,
//                   admin dashboard, API development, or mobile application, Im
//                   available to help transform your ideas into reliable digital
//                   products.
//                 </p>
//               </div>

//               <div className="space-y-4">
//                 {CONTACT_INFO.map((item) => {
//                   const Icon = item.icon;

//                   return (
//                     <Card
//                       key={item.title}
//                       className="transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
//                     >
//                       <CardContent className="flex items-center gap-4 p-5">
//                         <div className="flex size-12 items-center justify-center rounded-xl border bg-muted">
//                           <Icon className="size-5" />
//                         </div>

//                         <div className="min-w-0 flex-1">
//                           <p className="text-sm text-muted-foreground">
//                             {item.title}
//                           </p>

//                           {item.href ? (
//                             <a
//                               href={item.href}
//                               className="break-all font-medium transition-colors hover:text-primary"
//                             >
//                               {item.value}
//                             </a>
//                           ) : (
//                             <p className="font-medium">{item.value}</p>
//                           )}
//                         </div>
//                       </CardContent>
//                     </Card>
//                   );
//                 })}
//               </div>

//               <Card>
//                 <CardContent className="p-6">
//                   <h4 className="mb-2 font-semibold">Response Time</h4>

//                   <p className="text-sm leading-6 text-muted-foreground">
//                     I typically respond within 24 hours. For urgent projects,
//                     please mention the urgency in your message.
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: 24,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 x: 0,
//               }}
//               viewport={{
//                 once: true,
//               }}
//               transition={{
//                 duration: 0.5,
//               }}
//               className="lg:col-span-3"
//             >
//               <Card className="border shadow-sm">
//                 <CardContent className="p-6 md:p-8">
//                   <div className="mb-6">
//                     <h3 className="text-2xl font-semibold">Send Message</h3>

//                     <p className="mt-2 text-sm text-muted-foreground">
//                       Fill out the form below and Ill get back to you as soon as
//                       possible.
//                     </p>
//                   </div>

//                   {/* <ContactForm /> */}
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
