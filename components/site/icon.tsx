import {
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  Code2,
  Cpu,
  GraduationCap,
  Landmark,
  Megaphone,
  Network,
  Presentation,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  Code2,
  Cpu,
  GraduationCap,
  Landmark,
  Megaphone,
  Network,
  Presentation,
  ShieldCheck,
  TrendingUp,
};

export function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] || BriefcaseBusiness;
  return <Icon className={className} aria-hidden="true" />;
}
