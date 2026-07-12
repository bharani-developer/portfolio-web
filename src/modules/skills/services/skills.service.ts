// src/modules/skills/services/skills.service.ts

import { API_ENDPOINTS } from "@/src/shared/constants/api";
import { get } from "@/src/shared/services/http-client";

import type {
  Skill,
  SkillCategory,
  SkillResponse,
  SkillsQueryParams,
  SkillsResponse,
} from "@/src/modules/skills/types/skills.types";

class SkillsService {
  /**
   * Get all skills
   */
  async getSkills(
    params?: SkillsQueryParams,
  ): Promise<SkillsResponse> {
    const searchParams = new URLSearchParams();

    if (params?.searchTerm) {
      searchParams.set(
        "searchTerm",
        params.searchTerm,
      );
    }

    if (params?.page) {
      searchParams.set(
        "page",
        params.page.toString(),
      );
    }

    if (params?.limit) {
      searchParams.set(
        "limit",
        params.limit.toString(),
      );
    }

    if (params?.sort) {
      searchParams.set("sort", params.sort);
    }

    if (params?.fields) {
      searchParams.set("fields", params.fields);
    }

    if (params?.category) {
      searchParams.set(
        "category",
        params.category,
      );
    }

    if (typeof params?.isActive === "boolean") {
      searchParams.set(
        "isActive",
        String(params.isActive),
      );
    }

    const query = searchParams.toString();

    const response = await get<SkillsResponse>(
      query
        ? `${API_ENDPOINTS.SKILLS}?${query}`
        : API_ENDPOINTS.SKILLS,
    );

    if (process.env.NODE_ENV === "development") {
      console.groupCollapsed(
        "[SkillsService] getSkills",
      );

      console.log("Endpoint:", API_ENDPOINTS.SKILLS);

      console.log("Params:", params);

      console.log("Response:", response);

      console.log("Response.data:", response.data);

      console.groupEnd();
    }

    return response;
  }

  /**
   * Get active skills
   */
  async getActiveSkills(): Promise<Skill[]> {
    const response = await get<SkillsResponse>(
      `${API_ENDPOINTS.SKILLS}/active`,
    );

    if (process.env.NODE_ENV === "development") {
      console.log(
        "================== getActiveSkills ==================",
      );

      console.log(
        "Endpoint:",
        `${API_ENDPOINTS.SKILLS}/active`,
      );

      console.log("Full Response:");
      console.dir(response);

      console.log("response.data:");
      console.dir(response.data);

      console.log(
        "Array.isArray(response.data):",
        Array.isArray(response.data),
      );

      console.log(
        "response.data.length:",
        Array.isArray(response.data)
          ? response.data.length
          : "Not an array",
      );

      if (Array.isArray(response.data)) {
        console.table(
          response.data.map((skill) => ({
            id: skill._id,
            name: skill.name,
            category: skill.category,
            proficiency: skill.proficiency,
            active: skill.isActive,
          })),
        );
      }

      console.log(
        "=====================================================",
      );
    }

    return response.data;
  }
  /**
   * Get skills by category
   */
  async getSkillsByCategory(
    category: SkillCategory,
  ): Promise<Skill[]> {
    const response =
      await get<SkillsResponse>(
        `${API_ENDPOINTS.SKILLS}/category/${category}`,
      );

    if (process.env.NODE_ENV === "development") {
      console.groupCollapsed(
        "[SkillsService] getSkillsByCategory",
      );

      console.log("Category:", category);

      console.log("Response:", response);

      console.groupEnd();
    }

    return response.data;
  }

  /**
   * Get skill by id
   */
  async getSkill(
    id: string,
  ): Promise<Skill> {
    const response =
      await get<SkillResponse>(
        `${API_ENDPOINTS.SKILLS}/${id}`,
      );

    if (process.env.NODE_ENV === "development") {
      console.groupCollapsed(
        "[SkillsService] getSkill",
      );

      console.log("ID:", id);

      console.log("Response:", response);

      console.groupEnd();
    }

    return response.data;
  }

  /**
   * Get featured skills
   */
  async getFeaturedSkills(
    limit = 8,
  ): Promise<Skill[]> {
    const response =
      await this.getSkills({
        page: 1,
        limit,
        sort: "-proficiency,sortOrder",
        isActive: true,
      });

    if (process.env.NODE_ENV === "development") {
      console.groupCollapsed(
        "[SkillsService] getFeaturedSkills",
      );

      console.log("Limit:", limit);

      console.log(
        "Skills Count:",
        response.data.length,
      );

      console.groupEnd();
    }

    return response.data;
  }

  /**
   * Group skills by category
   */
  async getGroupedSkills(): Promise<
    Record<SkillCategory, Skill[]>
  > {
    const skills = await this.getActiveSkills();

    console.log(
      "================ getGroupedSkills =================",
    );

    console.log("Received Skills:");
    console.dir(skills);

    console.log("Total Skills:", skills.length);

    const grouped = skills.reduce(
      (groups, skill) => {
        const category = skill.category;

        groups[category] ??= [];

        groups[category].push(skill);

        return groups;
      },
      {} as Record<SkillCategory, Skill[]>,
    );

    console.log("Grouped Object:");
    console.dir(grouped);

    console.log(
      "Grouped Categories:",
      Object.keys(grouped),
    );

    Object.entries(grouped).forEach(
      ([category, skills]) => {
        console.log(
          `${category}: ${skills.length} skills`,
        );

        console.table(
          skills.map((skill) => ({
            name: skill.name,
            proficiency: skill.proficiency,
          })),
        );
      },
    );

    console.log(
      "===================================================",
    );

    return grouped;
  }
}

export const skillsService =
  new SkillsService();