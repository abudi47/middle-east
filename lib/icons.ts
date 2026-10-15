import {
  Cpu,
  HardHat,
  Wheat,
  Landmark,
  Gavel,
  GraduationCap,
  Building2,
  HeartHandshake,
  Factory,
  BadgeCheck,
  Wrench,
  Truck,
  Scale,
  Layers,
  MapPinned,
  Coins,
  Smartphone,
  Tablet,
  Laptop,
  Tv,
  Watch,
  Printer,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";

export const serviceIcons: Record<string, LucideIcon> = {
  "ict-digital-hardware": Cpu,
  "industrial-construction": HardHat,
  "agri-commodities-supply-chain": Wheat,
};

export const partnerIcons: Record<string, LucideIcon> = {
  "Federal Commissions": Landmark,
  "Supreme Courts & Justice Bureaus": Gavel,
  "Universities & Colleges": GraduationCap,
  "Regional Bureaus": Building2,
  "International NGOs": HeartHandshake,
  "Construction & Agri Projects": Factory,
};

export const commitmentIcons: LucideIcon[] = [BadgeCheck, Wrench, Truck, Scale];

export const whyPartnerIcons: LucideIcon[] = [Layers, MapPinned, Coins];

export const productCategoryIcons: Record<string, LucideIcon> = {
  All: LayoutGrid,
  Smartphones: Smartphone,
  Tablets: Tablet,
  Laptops: Laptop,
  "TVs & Displays": Tv,
  "Wearables & Storage": Watch,
  "Office & Infrastructure": Printer,
};
