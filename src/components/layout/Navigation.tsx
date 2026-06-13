import Link from "next/link";

import { navigationItems } from "@/data/navigation";

export function Navigation() {
  return (
    <nav aria-label="Primary navigation" className="hidden md:block">
      <ul className="flex items-center gap-1">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="rounded-sm px-3 py-2 text-sm font-medium text-foreground-muted transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
