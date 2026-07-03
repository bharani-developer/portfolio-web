// // app\modules\about\components\about-section.ts
// "use client";

// /* ============================================================================
//    React
// ============================================================================ */

// import { memo, useMemo } from "react";

// /* ============================================================================
//    Next.js
// ============================================================================ */

// import Image from "next/image";
// import Link from "next/link";

// /* ============================================================================
//    Motion
// ============================================================================ */

// import { motion } from "motion/react";
// import type { Variants } from "motion/react";
// /* ============================================================================
//    Icons
// ============================================================================ */

// import {
//   ArrowUpRight,
//   BriefcaseBusiness,
//   Download,
//   Mail,
//   MapPin,
//   Phone,
//   Sparkles,
//   UserRound,
// } from "lucide-react";

// /* ============================================================================
//    Hooks
// ============================================================================ */

// import { useAbout } from "@/app/modules/about";

// /* ============================================================================
//    Shared Components
// ============================================================================ */

// import SectionHeading from "@/components/section-heading";
// import SectionContainer from "@/components/section-container";

// /* ============================================================================
//    Shared Utilities
// ============================================================================ */

// import { cn } from "@/app/shared/lib/utils";

// /* ============================================================================
//    Types
// ============================================================================ */

// import type { About, AboutStat } from "@/app/modules/about";

// /* ============================================================================
//    Section Configuration
// ============================================================================ */

// const SECTION_ID = "about";

// const PROFILE_IMAGE_SIZE = 520;

// const DEFAULT_EXPERIENCE = 0;

// const DEFAULT_RESUME_LABEL = "Download Resume";

// const DEFAULT_DESCRIPTION =
//   "Passionate Full Stack Developer building scalable, modern, and high-performance web applications.";

// /* ============================================================================
//    Layout Configuration
// ============================================================================ */

// const MAX_STATS = 4;

// const GRID_BREAKPOINT = 1024;

// const IMAGE_PRIORITY = true;

// /* ============================================================================
//    Animation Configuration
// ============================================================================ */

// const STAGGER_DELAY = 0.12;

// const CARD_DELAY = 0.18;

// const IMAGE_DELAY = 0.24;

// const CONTENT_DELAY = 0.32;

// /* ============================================================================
//    Contact Icons
// ============================================================================ */

// const CONTACT_ICONS = {
//   email: Mail,
//   phone: Phone,
//   address: MapPin,
// } as const;

// /* ============================================================================
//    Statistic Icons
// ============================================================================ */

// const STAT_ICONS = [
//   BriefcaseBusiness,
//   Sparkles,
//   UserRound,
//   ArrowUpRight,
// ] as const;

// /* ============================================================================
//    Helpers
// ============================================================================ */

// function hasValue(value?: string | null): value is string {
//   return Boolean(value?.trim());
// }

// function yearsExperience(years?: number): string {
//   if (!years) {
//     return "0+";
//   }

//   return `${years}+`;
// }

// function experienceLabel(years?: number): string {
//   if (!years) {
//     return "Years Experience";
//   }

//   return years === 1 ? "Year Experience" : "Years Experience";
// }

// function profileImage(about: About) {
//   return about.profileImage?.url ?? "/images/about/profile-placeholder.webp";
// }

// function profileAlt(about: About) {
//   return about.fullName || "Profile";
// }

// function resumeHref(about: About) {
//   return about.resumeUrl ?? "#";
// }

// function hasResume(about: About): boolean {
//   return Boolean(about.resumeUrl);
// }

// function stats(about: About): AboutStat[] {
//   return about.stats.slice(0, MAX_STATS);
// }

// /* ============================================================================
//    Contact Items
// ============================================================================ */

// function contactItems(about: About) {
//   return [
//     {
//       key: "email",
//       icon: CONTACT_ICONS.email,
//       value: about.email,
//     },
//     {
//       key: "phone",
//       icon: CONTACT_ICONS.phone,
//       value: about.phone,
//     },
//     {
//       key: "address",
//       icon: CONTACT_ICONS.address,
//       value: about.address,
//     },
//   ].filter(
//     (
//       item,
//     ): item is {
//       key: string;
//       icon: typeof Mail;
//       value: string;
//     } => hasValue(item.value),
//   );
// }
// /* ============================================================================
//    Motion Configuration
// ============================================================================ */

// const SPRING = {
//   type: "spring",
//   stiffness: 120,
//   damping: 18,
//   mass: 0.8,
// } as const;

// const EASE = [0.22, 1, 0.36, 1] as const;

// const DEFAULT_TRANSITION = {
//   duration: 0.6,
//   ease: EASE,
// } as const;

// /* ============================================================================
//    Section Variants
// ============================================================================ */

// const SECTION_VARIANTS = {
//   hidden: {
//     opacity: 0,
//   },

//   visible: {
//     opacity: 1,

//     transition: {
//       staggerChildren: STAGGER_DELAY,
//       delayChildren: 0.1,
//     },
//   },
// } as const;

// /* ============================================================================
//    Container Variants
// ============================================================================ */

// const CONTAINER_VARIANTS = {
//   hidden: {},

//   visible: {
//     transition: {
//       staggerChildren: STAGGER_DELAY,
//       delayChildren: CARD_DELAY,
//     },
//   },
// } as const;

// /* ============================================================================
//    Fade Up
// ============================================================================ */

// const FADE_UP = {
//   hidden: {
//     opacity: 0,
//     y: 32,
//   },

//   visible: {
//     opacity: 1,
//     y: 0,

//     transition: DEFAULT_TRANSITION,
//   },
// } as const;

// /* ============================================================================
//    Fade Left
// ============================================================================ */

// const FADE_LEFT = {
//   hidden: {
//     opacity: 0,
//     x: -48,
//   },

//   visible: {
//     opacity: 1,
//     x: 0,

//     transition: DEFAULT_TRANSITION,
//   },
// } as const;

// /* ============================================================================
//    Fade Right
// ============================================================================ */

// const FADE_RIGHT = {
//   hidden: {
//     opacity: 0,
//     x: 48,
//   },

//   visible: {
//     opacity: 1,
//     x: 0,

//     transition: DEFAULT_TRANSITION,
//   },
// } as const;

// /* ============================================================================
//    Scale
// ============================================================================ */

// const SCALE_VARIANTS = {
//   hidden: {
//     opacity: 0,
//     scale: 0.92,
//   },

//   visible: {
//     opacity: 1,
//     scale: 1,

//     transition: SPRING,
//   },
// } as const;

// /* ============================================================================
//    Profile Image
// ============================================================================ */

// const IMAGE_VARIANTS = {
//   hidden: {
//     opacity: 0,
//     scale: 0.85,
//     rotate: -4,
//   },

//   visible: {
//     opacity: 1,
//     scale: 1,
//     rotate: 0,

//     transition: {
//       ...SPRING,
//       delay: IMAGE_DELAY,
//     },
//   },

//   hover: {
//     scale: 1.03,

//     rotate: -1,

//     transition: {
//       duration: 0.3,
//     },
//   },
// } as const;

// /* ============================================================================
//    About Content
// ============================================================================ */

// const CONTENT_VARIANTS = {
//   hidden: {
//     opacity: 0,
//     x: 40,
//   },

//   visible: {
//     opacity: 1,
//     x: 0,

//     transition: {
//       ...DEFAULT_TRANSITION,
//       delay: CONTENT_DELAY,
//     },
//   },
// } as const;

// /* ============================================================================
//    Stat Card
// ============================================================================ */

// const STAT_CARD_VARIANTS = {
//   hidden: {
//     opacity: 0,
//     y: 20,
//     scale: 0.95,
//   },

//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,

//     transition: SPRING,
//   },

//   hover: {
//     y: -6,
//     scale: 1.02,

//     transition: {
//       duration: 0.25,
//     },
//   },
// } as const;

// /* ============================================================================
//    Contact Item
// ============================================================================ */

// const CONTACT_VARIANTS = {
//   hidden: {
//     opacity: 0,
//     x: -20,
//   },

//   visible: {
//     opacity: 1,
//     x: 0,

//     transition: DEFAULT_TRANSITION,
//   },
// } as const;

// /* ============================================================================
//    Resume Button
// ============================================================================ */

// const BUTTON_VARIANTS = {
//   rest: {
//     scale: 1,
//   },

//   hover: {
//     scale: 1.04,

//     transition: {
//       duration: 0.2,
//     },
//   },

//   tap: {
//     scale: 0.97,
//   },
// } as const;

// /* ============================================================================
//    Floating Glow
// ============================================================================ */
// const GLOW_VARIANTS: Variants = {
//   animate: {
//     opacity: [0.35, 0.65, 0.35],
//     scale: [1, 1.08, 1],
//     transition: {
//       duration: 5,
//       repeat: Infinity,
//       ease: [0.42, 0, 0.58, 1],
//     },
//   },
// };
// /* ============================================================================
//    Divider
// ============================================================================ */

// const DIVIDER_VARIANTS = {
//   hidden: {
//     scaleX: 0,
//     opacity: 0,
//   },

//   visible: {
//     scaleX: 1,
//     opacity: 1,

//     transition: {
//       duration: 0.7,
//       ease: EASE,
//     },
//   },
// } as const;
// /* ============================================================================
//    Profile Image
// ============================================================================ */

// interface ProfileImageProps {
//   about: About;
// }

// function ProfileImage({ about }: ProfileImageProps) {
//   return (
//     <motion.div
//       variants={IMAGE_VARIANTS}
//       whileHover="hover"
//       className="group relative mx-auto w-full max-w-md"
//     >
//       {/* Glow */}
//       <motion.div
//         variants={GLOW_VARIANTS}
//         animate="animate"
//         aria-hidden="true"
//         className="
//           absolute
//           inset-8
//           rounded-full
//           bg-cyan-500/20
//           blur-3xl
//         "
//       />

//       {/* Border */}
//       <div
//         className="
//           relative
//           overflow-hidden
//           rounded-[2rem]
//           border
//           border-white/10
//           bg-white/5
//           p-2
//           backdrop-blur-xl
//         "
//       >
//         <div
//           className="
//             relative
//             aspect-square
//             overflow-hidden
//             rounded-[1.5rem]
//             bg-zinc-900
//         "
//         >
//           <Image
//             src={profileImage(about)}
//             alt={profileAlt(about)}
//             fill
//             priority={IMAGE_PRIORITY}
//             sizes="(max-width:768px) 100vw, 520px"
//             className="
//               object-cover
//               transition-transform
//               duration-700
//               group-hover:scale-105
//             "
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// /* ============================================================================
//    Stat Card
// ============================================================================ */

// interface StatCardProps {
//   stat: AboutStat;
//   index: number;
// }

// function StatCard({ stat, index }: StatCardProps) {
//   const Icon = STAT_ICONS[index % STAT_ICONS.length];

//   return (
//     <motion.article
//       variants={STAT_CARD_VARIANTS}
//       whileHover="hover"
//       className="
//         group
//         relative
//         overflow-hidden
//         rounded-2xl
//         border
//         border-white/10
//         bg-white/5
//         p-5
//         backdrop-blur-xl
//       "
//     >
//       <div
//         aria-hidden="true"
//         className="
//           absolute
//           inset-0
//           opacity-0
//           transition-opacity
//           duration-500
//           group-hover:opacity-100
//           bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.15),transparent_60%)]
//         "
//       />

//       <div className="relative flex items-start gap-4">
//         <div
//           className="
//             flex
//             h-12
//             w-12
//             items-center
//             justify-center
//             rounded-xl
//             border
//             border-cyan-500/20
//             bg-cyan-500/10
//         "
//         >
//           <Icon className="h-5 w-5 text-cyan-400" />
//         </div>

//         <div className="min-w-0 flex-1">
//           <h3
//             className="
//               text-2xl
//               font-bold
//               text-white
//             "
//           >
//             {stat.value}
//           </h3>

//           <p
//             className="
//               mt-1
//               text-sm
//               text-zinc-400
//             "
//           >
//             {stat.label}
//           </p>
//         </div>
//       </div>
//     </motion.article>
//   );
// }

// /* ============================================================================
//    Contact Item
// ============================================================================ */

// interface ContactItemProps {
//   icon: React.ComponentType<{
//     className?: string;
//   }>;

//   value: string;
// }

// function ContactItem({ icon: Icon, value }: ContactItemProps) {
//   return (
//     <motion.div
//       variants={CONTACT_VARIANTS}
//       className="
//         flex
//         items-center
//         gap-4
//       "
//     >
//       <div
//         className="
//           flex
//           h-11
//           w-11
//           items-center
//           justify-center
//           rounded-xl
//           border
//           border-white/10
//           bg-white/5
//         "
//       >
//         <Icon
//           className="
//             h-5
//             w-5
//             text-cyan-400
//           "
//         />
//       </div>

//       <p
//         className="
//           break-all
//           text-sm
//           text-zinc-300
//         "
//       >
//         {value}
//       </p>
//     </motion.div>
//   );
// }
// /* ============================================================================
//    Resume Button
// ============================================================================ */

// interface ResumeButtonProps {
//   about: About;
// }

// function ResumeButton({ about }: ResumeButtonProps) {
//   if (!hasResume(about)) {
//     return null;
//   }

//   return (
//     <motion.div
//       variants={BUTTON_VARIANTS}
//       initial="rest"
//       whileHover="hover"
//       whileTap="tap"
//     >
//       <Link
//         href={resumeHref(about)}
//         target="_blank"
//         rel="noopener noreferrer"
//         className={cn(
//           "group inline-flex items-center gap-3",
//           "rounded-2xl",
//           "border border-cyan-500/20",
//           "bg-cyan-500/10",
//           "px-6 py-3",
//           "font-medium text-cyan-300",
//           "transition-all duration-300",
//           "hover:border-cyan-400/40",
//           "hover:bg-cyan-500/15",
//         )}
//       >
//         <Download className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />

//         <span>{DEFAULT_RESUME_LABEL}</span>

//         <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
//       </Link>
//     </motion.div>
//   );
// }

// /* ============================================================================
//    Experience Card
// ============================================================================ */

// interface ExperienceCardProps {
//   years?: number;
// }

// function ExperienceCard({ years }: ExperienceCardProps) {
//   return (
//     <motion.article
//       variants={STAT_CARD_VARIANTS}
//       whileHover="hover"
//       className={cn(
//         "relative overflow-hidden rounded-3xl",
//         "border border-cyan-500/20",
//         "bg-gradient-to-br",
//         "from-cyan-500/10",
//         "via-sky-500/5",
//         "to-transparent",
//         "p-8",
//         "backdrop-blur-xl",
//       )}
//     >
//       <div
//         aria-hidden="true"
//         className={cn(
//           "absolute -right-10 -top-10",
//           "h-40 w-40 rounded-full",
//           "bg-cyan-500/10 blur-3xl",
//         )}
//       />

//       <div className="relative space-y-2">
//         <span
//           className={cn(
//             "block text-5xl font-black tracking-tight",
//             "text-white",
//           )}
//         >
//           {yearsExperience(years)}
//         </span>

//         <p className={cn("text-base font-medium", "text-zinc-300")}>
//           {experienceLabel(years)}
//         </p>
//       </div>
//     </motion.article>
//   );
// }

// /* ============================================================================
//    Loading State
// ============================================================================ */

// function LoadingState() {
//   return (
//     <section
//       className="py-24"
//       aria-busy="true"
//       aria-label="Loading about section"
//     >
//       <div className={cn("grid gap-16", "lg:grid-cols-[460px_1fr]")}>
//         <div
//           className={cn(
//             "aspect-square rounded-[2rem]",
//             "animate-pulse",
//             "bg-white/5",
//           )}
//         />

//         <div className="space-y-6">
//           <div className="h-8 w-44 animate-pulse rounded bg-white/5" />

//           <div className="h-14 w-80 animate-pulse rounded bg-white/5" />

//           <div className="h-5 w-full animate-pulse rounded bg-white/5" />

//           <div className="h-5 w-11/12 animate-pulse rounded bg-white/5" />

//           <div className="h-5 w-10/12 animate-pulse rounded bg-white/5" />

//           <div className="grid gap-4 sm:grid-cols-2">
//             {Array.from({
//               length: 4,
//             }).map((_, index) => (
//               <div
//                 key={index}
//                 className={cn(
//                   "h-28 rounded-2xl",
//                   "animate-pulse",
//                   "bg-white/5",
//                 )}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ============================================================================
//    Error State
// ============================================================================ */

// interface ErrorStateProps {
//   error?: Error | null;
// }

// function ErrorState({ error }: ErrorStateProps) {
//   return (
//     <section className="py-24" aria-live="polite">
//       <div
//         className={cn(
//           "rounded-3xl border",
//           "border-red-500/20",
//           "bg-red-500/5",
//           "p-10 text-center",
//         )}
//       >
//         <h2 className={cn("text-2xl font-bold", "text-white")}>
//           Unable to load about information
//         </h2>

//         <p className={cn("mx-auto mt-4 max-w-2xl", "text-zinc-400")}>
//           {error?.message ?? "Something went wrong while loading this section."}
//         </p>
//       </div>
//     </section>
//   );
// }

// /* ============================================================================
//    Empty State
// ============================================================================ */

// function EmptyState() {
//   return (
//     <section className="py-24" aria-live="polite">
//       <div
//         className={cn(
//           "rounded-3xl border border-dashed border-white/10",
//           "bg-white/5",
//           "p-10 text-center",
//         )}
//       >
//         <h2 className={cn("text-2xl font-bold", "text-white")}>
//           About information unavailable
//         </h2>

//         <p className={cn("mx-auto mt-4 max-w-2xl", "text-zinc-400")}>
//           The about section hasn&apos;t been published yet.. Please check back
//           later.
//         </p>
//       </div>
//     </section>
//   );
// }
// /* ============================================================================
//    About Section
// ============================================================================ */

// function AboutSection() {
//   const { about, isLoading, isFetching, isError, error } = useAbout();

//   const sectionStats = useMemo(() => (about ? stats(about) : []), [about]);

//   const contacts = useMemo(() => (about ? contactItems(about) : []), [about]);

//   const isBusy = isLoading || isFetching;

//   /* --------------------------------------------------------------------------
//      Loading
//   -------------------------------------------------------------------------- */

//   if (isBusy) {
//     return <LoadingState />;
//   }

//   /* --------------------------------------------------------------------------
//      Error
//   -------------------------------------------------------------------------- */

//   if (isError) {
//     return <ErrorState error={error} />;
//   }

//   /* --------------------------------------------------------------------------
//      Empty
//   -------------------------------------------------------------------------- */

//   if (!about) {
//     return <EmptyState />;
//   }

//   /* --------------------------------------------------------------------------
//      Render
//   -------------------------------------------------------------------------- */

//   return (
//     <SectionContainer
//       id={SECTION_ID}
//       as="section"
//       width="full"
//       aria-labelledby="about-heading"
//       className="relative w-full overflow-hidden py-24 lg:py-32"
//     >
//       {/* Background Glow */}

//       <div
//         aria-hidden="true"
//         className={cn(
//           "absolute inset-0 overflow-hidden",
//           "pointer-events-none",
//         )}
//       >
//         <div
//           className={cn(
//             "absolute -left-40 top-20",
//             "h-96 w-96 rounded-full",
//             "bg-cyan-500/10 blur-[140px]",
//           )}
//         />

//         <div
//           className={cn(
//             "absolute -right-40 bottom-0",
//             "h-[30rem] w-[30rem] rounded-full",
//             "bg-sky-500/10 blur-[160px]",
//           )}
//         />
//       </div>

//       <motion.div
//         variants={SECTION_VARIANTS}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{
//           once: true,
//           amount: 0.15,
//         }}
//         className="relative z-10"
//       >
//         <SectionHeading
//           badge="About Me"
//           title="Building Modern Digital Experiences"
//           description={about.designation ?? DEFAULT_DESCRIPTION}
//           align="center"
//         />

//         <motion.div
//           variants={CONTAINER_VARIANTS}
//           className={cn(
//             "mt-16 grid gap-16",
//             "items-center",
//             "lg:grid-cols-[480px_minmax(0,1fr)]",
//           )}
//         >
//           {/* Left Column */}

//           <motion.div variants={FADE_LEFT} className="relative">
//             <ProfileImage about={about} />
//           </motion.div>

//           {/* Right Column starts in Part 2A.2 */}

//           {/* ==================================================================
//               Right Column
//           ================================================================== */}

//           <motion.div variants={CONTENT_VARIANTS} className="flex flex-col">
//             {/* ---------------------------------------------------------------
//                 Header
//             ---------------------------------------------------------------- */}

//             <motion.div variants={FADE_UP} className="space-y-5">
//               <span
//                 className={cn(
//                   "inline-flex w-fit items-center gap-2",
//                   "rounded-full border border-cyan-500/20",
//                   "bg-cyan-500/10",
//                   "px-4 py-2",
//                   "text-xs font-semibold uppercase tracking-[0.24em]",
//                   "text-cyan-300",
//                 )}
//               >
//                 <Sparkles className="h-4 w-4" />
//                 About Me
//               </span>

//               <h2
//                 id="about-heading"
//                 className={cn(
//                   "text-4xl font-black tracking-tight",
//                   "text-white",
//                   "sm:text-5xl",
//                 )}
//               >
//                 {about.fullName}
//               </h2>

//               <p className={cn("text-xl font-semibold", "text-cyan-400")}>
//                 {about.designation}
//               </p>

//               <p
//                 className={cn(
//                   "max-w-3xl",
//                   "text-base leading-8",
//                   "text-zinc-400",
//                 )}
//               >
//                 {about.bio}
//               </p>
//             </motion.div>

//             {/* ---------------------------------------------------------------
//                 Experience
//             ---------------------------------------------------------------- */}

//             <motion.div variants={FADE_UP} className="mt-10">
//               <ExperienceCard years={about.yearsOfExperience} />
//             </motion.div>

//             {/* ---------------------------------------------------------------
//                 Contact Information
//             ---------------------------------------------------------------- */}

//             {contacts.length > 0 && (
//               <motion.div variants={FADE_UP} className="mt-10">
//                 <h3
//                   className={cn("mb-6", "text-lg font-semibold", "text-white")}
//                 >
//                   Contact Information
//                 </h3>

//                 <motion.div variants={CONTAINER_VARIANTS} className="space-y-5">
//                   {contacts.map(({ key, icon, value }) => (
//                     <ContactItem key={key} icon={icon} value={value!} />
//                   ))}
//                 </motion.div>
//               </motion.div>
//             )}

//             {/* Remaining content continues in Part 2A.2.2 */}
//             {/* ===============================================================
//                 Divider
//             ================================================================ */}

//             <motion.div variants={DIVIDER_VARIANTS} className="mt-10">
//               <div
//                 className={cn(
//                   "h-px w-full",
//                   "bg-gradient-to-r",
//                   "from-transparent",
//                   "via-white/10",
//                   "to-transparent",
//                 )}
//               />
//             </motion.div>

//             {/* ===============================================================
//                 Statistics
//             ================================================================ */}

//             {sectionStats.length > 0 && (
//               <motion.div variants={FADE_UP} className="mt-10">
//                 <div className={cn("grid gap-5", "sm:grid-cols-2")}>
//                   {sectionStats.map((stat, index) => (
//                     <StatCard
//                       key={`${stat.label}-${index}`}
//                       stat={stat}
//                       index={index}
//                     />
//                   ))}
//                 </div>
//               </motion.div>
//             )}

//             {/* ===============================================================
//                 Resume Button
//             ================================================================ */}

//             {hasResume(about) && (
//               <motion.div
//                 variants={FADE_UP}
//                 className="mt-10 flex flex-wrap items-center gap-4"
//               >
//                 <ResumeButton about={about} />

//                 <p className={cn("text-sm", "text-zinc-500")}>
//                   Download my latest resume to explore my experience, projects,
//                   and technical expertise.
//                 </p>
//               </motion.div>
//             )}
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </SectionContainer>
//   );
// }
// AboutSection.displayName = "AboutSection";

// export default memo(AboutSection);
