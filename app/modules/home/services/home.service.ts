import { aboutService } from "@/app/modules/about/services/about.service";
import { blogService } from "@/app/modules//blog/services/blog.service";
import { experienceService } from "@/app/modules//experience/services/experience.service";
import { heroService } from "@/app/modules//hero/services/hero.service";
import { projectsService } from "@/app/modules//projects/services/projects.service";
import { servicesService } from "@/app/modules//services/services/services.service";
import { skillsService } from "@/app/modules//skills/services/skills.service";
import { testimonialsService } from "@/app/modules//testimonials/services/testimonials.service";

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