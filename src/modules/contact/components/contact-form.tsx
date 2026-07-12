// // src/modules/contact/components/contact-form.tsx

// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";

// import { Loader2, Send } from "lucide-react";

// import { useForm } from "react-hook-form";

// import { toast } from "sonner";

// import { Button } from "@/components/ui/button";

// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";

// import { Input } from "@/components/ui/input";

// import { Textarea } from "@/components/ui/textarea";

// import { useCreateContact } from "../hooks/use-contact";

// import {
//   contactSchema,
//   type ContactFormValues,
// } from "../schemas/contact.schema";

// export function ContactForm() {
//   const createContactMutation =
//     useCreateContact();

//   const form =
//     useForm<ContactFormValues>({
//       resolver: zodResolver(
//         contactSchema,
//       ),

//       defaultValues: {
//         name: "",
//         email: "",
//         phone: "",
//         company: "",
//         subject: "",
//         message: "",
//       },
//     });

//   const onSubmit = async (
//     values: ContactFormValues,
//   ) => {
//     try {
//       await createContactMutation.mutateAsync(
//         {
//           ...values,

//           source: "Website",
//         },
//       );

//       toast.success(
//         "Message sent successfully",
//       );

//       form.reset();
//     } catch (error) {
//       console.error(error);

//       toast.error(
//         "Failed to send message. Please try again.",
//       );
//     }
//   };

//   return (
//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(
//           onSubmit,
//         )}
//         className="space-y-6"
//       >
//         <div className="grid gap-6 md:grid-cols-2">
//           <FormField
//             control={form.control}
//             name="name"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>
//                   Full Name
//                 </FormLabel>

//                 <FormControl>
//                   <Input
//                     placeholder="John Doe"
//                     autoComplete="name"
//                     {...field}
//                   />
//                 </FormControl>

//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>
//                   Email Address
//                 </FormLabel>

//                 <FormControl>
//                   <Input
//                     type="email"
//                     placeholder="john@example.com"
//                     autoComplete="email"
//                     {...field}
//                   />
//                 </FormControl>

//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>

//         <div className="grid gap-6 md:grid-cols-2">
//           <FormField
//             control={form.control}
//             name="phone"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>
//                   Phone Number
//                 </FormLabel>

//                 <FormControl>
//                   <Input
//                     placeholder="+91 9876543210"
//                     autoComplete="tel"
//                     {...field}
//                   />
//                 </FormControl>

//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="company"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>
//                   Company
//                 </FormLabel>

//                 <FormControl>
//                   <Input
//                     placeholder="Company Name"
//                     autoComplete="organization"
//                     {...field}
//                   />
//                 </FormControl>

//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>

//         <FormField
//           control={form.control}
//           name="subject"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>
//                 Subject
//               </FormLabel>

//               <FormControl>
//                 <Input
//                   placeholder="Project Inquiry"
//                   {...field}
//                 />
//               </FormControl>

//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="message"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>
//                 Message
//               </FormLabel>

//               <FormControl>
//                 <Textarea
//                   placeholder="Tell me about your project..."
//                   className="min-h-[180px] resize-none"
//                   {...field}
//                 />
//               </FormControl>

//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <Button
//           type="submit"
//           size="lg"
//           className="w-full md:w-auto"
//           disabled={
//             createContactMutation.isPending
//           }
//         >
//           {createContactMutation.isPending ? (
//             <>
//               <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//               Sending Message...
//             </>
//           ) : (
//             <>
//               <Send className="mr-2 h-4 w-4" />
//               Send Message
//             </>
//           )}
//         </Button>
//       </form>
//     </Form>
//   );
// }