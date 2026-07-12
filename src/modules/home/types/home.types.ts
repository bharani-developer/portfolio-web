import type { About } from "@/src/modules/about/types/about.types";
import type { Blog } from "@/src/modules/blog/types/blog.types";
import type { Experience } from "@/src/modules/experience/types/experience.types";
import type { Hero } from "@/src/modules/hero/types/hero.types";
import type { Project } from "@/src/modules/projects/types/projects.types";
import type { Service } from "@/src/modules/services/types/services.types";
import type { Skill } from "@/src/modules/skills/types/skills.types";
import type { Testimonial } from "@/src/modules/testimonials/types/testimonials.types";

export interface HomeData {
  hero: Hero | null;

  about: About | null;

  skills: Skill[];

  services: Service[];

  experiences: Experience[];

  projects: Project[];

  testimonials: Testimonial[];

  blogs: Blog[];

  isLoading: boolean;

  isFetching: boolean;

  isError: boolean;

  error: Error | null;

  refetch: () => Promise<unknown>;
}