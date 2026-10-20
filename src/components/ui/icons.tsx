import {
  Archive,
  BadgeCheck,
  Bone,
  Brain,
  Building2,
  Clock,
  CloudUpload,
  FileCheck2,
  FileText,
  Handshake,
  Layers,
  Monitor,
  Network,
  Receipt,
  ScanLine,
  Server,
  ShieldCheck,
  UserPlus,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";

/**
 * Content files refer to icons by name so they stay serialisable and free of
 * component imports. Only icons listed here are bundled.
 */
const icons = {
  scan: ScanLine,
  brain: Brain,
  bone: Bone,
  users: Users,
  "user-plus": UserPlus,
  "user-round": UserRound,
  monitor: Monitor,
  clock: Clock,
  handshake: Handshake,
  server: Server,
  "file-check": FileCheck2,
  "file-text": FileText,
  "shield-check": ShieldCheck,
  archive: Archive,
  receipt: Receipt,
  network: Network,
  building: Building2,
  layers: Layers,
  upload: CloudUpload,
  badge: BadgeCheck,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Component = icons[name];
  return <Component className={className} aria-hidden="true" strokeWidth={1.75} />;
}
