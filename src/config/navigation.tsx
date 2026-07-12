// app/config/navigation.tsx

import type { ReactNode } from "react";

import {
  Award,
  BriefcaseBusiness,
  Code2,
  FolderKanban,
  House,
  Mail,
  MessageSquareQuote,
  User,
} from "lucide-react";

export interface NavItem {
  name: string;
  link: string;
  icon?: ReactNode;
}

export const NAV_ITEMS: ReadonlyArray<NavItem> = [
  {
    name: "Home",
    link: "#hero",
    icon: <House className="h-4 w-4" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <User className="h-4 w-4" />,
  },
  {
    name: "Skills",
    link: "#skills",
    icon: <Code2 className="h-4 w-4" />,
  },
  {
    name: "Services",
    link: "#services",
    icon: <BriefcaseBusiness className="h-4 w-4" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <FolderKanban className="h-4 w-4" />,
  },
  {
    name: "Experience",
    link: "#experience",
    icon: <Award className="h-4 w-4" />,
  },
  {
    name: "Testimonials",
    link: "#testimonials",
    icon: <MessageSquareQuote className="h-4 w-4" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <Mail className="h-4 w-4" />,
  },
];