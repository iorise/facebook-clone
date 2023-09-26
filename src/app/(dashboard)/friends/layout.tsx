import { Metadata } from "next";

import { SidebarShell } from "@/components/shell";
import { SidebarNavFriends } from "@/components/sidebar-nav-friends";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Friends | ${siteConfig.title}`,
};

interface FriendsLayoutProps {
  children: React.ReactNode;
}

export default function FriendsLayout({ children }: FriendsLayoutProps) {
  return (
    <div className="mx-auto min-h-[calc(100vh_-_3.5rem)] px-0 flex-1 items-start justify-between grid grid-cols-1 sm:grid-cols-[260px_minmax(0,1fr)] p-0 m-0">
      <SidebarShell className="py-0 pl-0 border-r hidden sm:block">
        <SidebarNavFriends />
      </SidebarShell>
      <main>{children}</main>
    </div>
  );
}
