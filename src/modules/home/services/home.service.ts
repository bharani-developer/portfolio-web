import { aboutService } from "@/src/modules/about/services/about.service";
import { blogService } from "@/src/modules/blog/services/blog.service";
import { experienceService } from "@/src/modules/experience/services/experience.service";
import { heroService } from "@/src/modules/hero/services/hero.service";
import { projectsService } from "@/src/modules/projects/services/projects.service";
import { servicesService } from "@/src/modules/services/services/services.service";
import { skillsService } from "@/src/modules/skills/services/skills.service";
import { testimonialsService } from "@/src/modules/testimonials/services/testimonials.service";

export class HomeService {
  async getHomeData() {
    const [
      hero,
      about,
      skills,
      services,
      experiences,
      projects,
      testimonials,
      blogs,
    ] = await Promise.all([
      heroService.getHero(),
      aboutService.getAbout(),
      skillsService.getSkills(),
      servicesService.getHomepageServices(),
      experienceService.getHomepageExperiences(),
      projectsService.getHomepageProjects(),
      testimonialsService.getHomepageTestimonials(),
      blogService.getHomepageBlogs(),
    ]);

    return {
      hero,
      about,
      skills,
      services,
      experiences,
      projects,
      testimonials,
      blogs,
    };
  }
}

export const homeService =
  new HomeService();