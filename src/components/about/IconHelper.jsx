import React from "react";
import * as Icons from "lucide-react";

export function RenderIcon({ name, className = "w-6 h-6" }) {
  if (!name) return null;
  const IconComponent = Icons[name] || Icons.ShieldCheck;
  return <IconComponent className={className} />;
}
