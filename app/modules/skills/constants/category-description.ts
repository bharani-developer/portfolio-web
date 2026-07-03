import type { SkillCategory } from "../types/skills.types";

export const CATEGORY_DESCRIPTIONS: Record<
  SkillCategory,
  string
> = {
  Frontend:
    "Crafting responsive, accessible and interactive user interfaces with modern frontend technologies.",

  Backend:
    "Building secure, scalable and high-performance server-side applications, APIs and business logic.",

  Database:
    "Designing, managing and optimizing relational and NoSQL databases for reliable data storage.",

  Mobile:
    "Developing cross-platform mobile applications with a native-like user experience.",

  DevOps:
    "Automating deployment, cloud infrastructure and development workflows for reliable delivery.",

  Tools:
    "Using modern development tools to improve productivity, collaboration and software quality.",

  Other:
    "Additional technologies, platforms and frameworks that complement my full-stack development expertise.",
    
  "API Integration":
    "Building secure REST APIs, GraphQL integrations, payment gateways, OAuth, and third-party services.",

  Cloud:
    "Deploying scalable applications using cloud platforms, storage, CI/CD, and serverless infrastructure.",
};