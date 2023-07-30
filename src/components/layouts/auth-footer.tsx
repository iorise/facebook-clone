"use client";
import Link from "next/link";

import { siteConfig } from "@/components/config/site";
import { Shell } from "@/components/shell";

export function AuthFooter() {
  const links = siteConfig.map((e) => e.authFooterNav).flat();
  return (
    <footer className="w-full border-t bg-card">
      <Shell>
        <div className="flex flex-wrap px-0 sm:px-32 ">
          {links.map((e) => (
            <div key={e.title}>
              <Link
                className=" hover:underline mr-2 text-xs font-light text-muted-foreground"
                href={e.href}
                target={e.external === true ? "_blank" : ""}
              >
                {e.title}
              </Link>
            </div>
          ))}
        </div>
      </Shell>
    </footer>
  );
}
