import {
  Monitor,
  HardHat,
  Wheat,
  Landmark,
  Building2,
  GraduationCap,
  Truck,
  HeartHandshake,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

export const serviceIcons: Record<string, LucideIcon> = {
  "information-technology-ecommerce": Monitor,
  "industrial-construction-support": HardHat,
  "agricultural-supply-chain": Wheat,
};

export const partnerIcons: Record<string, LucideIcon> = {
  "Government Offices": Landmark,
  "Supreme Courts & Justice Bureaus": Building2,
  "Universities & Colleges": GraduationCap,
  "Construction Enterprises": HardHat,
  "NGOs & Humanitarian Agencies": HeartHandshake,
  "Private Institutions": Briefcase,
};
