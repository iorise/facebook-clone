"use client";

import Link from "next/link";
import { User as userDb } from "@prisma/client";

import { Icons } from "@/components/icons";
import { MainNav } from "@/components/layouts/main-nav";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ProfileDropdown } from "@/components/nav-dropdowns/profile-dropdown";
import { NotificationsDropdown } from "@/components/nav-dropdowns/notificatioin-dropdown";
import { SearchBar } from "@/components/search-bar";
import { useRouter } from "next/navigation";
import { SearchInput } from "../search-input";

interface SiteHeaderProps {
  currentUser: userDb | null;
}

export function SiteHeader({ currentUser }: SiteHeaderProps) {
  const router = useRouter();
  return (
    <header className="sticky h-14 top-0 z-40 w-full border-b bg-secondaryBackground">
      <div className="px-1 sm:px-4 h-full flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <Link aria-label="Home" href="/">
            <Icons.logo className="w-10 h-10" />
          </Link>
          <SearchInput />
        </div>
        <div className="flex-1 md:flex-none">
          <MainNav items={siteConfig.MainNav} />
        </div>
        <div className="flex items-center space-x-2">
          <Button
            disabled
            variant="outline"
            size="icon"
            className="rounded-full hidden lg:flex"
          >
            <Icons.menu className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full lg:hidden flex"
          >
            <Icons.plus className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full flex lg:hidden duration-0 active:scale-95 transition-all active:opacity-80"
            onClick={() => router.push("/friends")}
          >
            <Icons.people className="w-5 h-5" />
          </Button>
          <Button
            disabled
            variant="outline"
            size="icon"
            className="rounded-full hidden lg:flex"
          >
            <Icons.message className="w-5 h-5" />
          </Button>
          <NotificationsDropdown />
          <ProfileDropdown currentUser={currentUser} />
        </div>
      </div>
    </header>
  );
}
