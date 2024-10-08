import {Navbar} from "@/components/navbar";
import {Link} from "@nextui-org/link";
import {siteConfig} from "@/config/site.ts";
import {GithubIcon} from "@/components/icons.tsx";
import type {ReactNode} from "react";

export default function DefaultLayout({children,}: { children: ReactNode; }) {
  return (
      <div className="relative flex flex-col h-screen">
        <Navbar/>
        <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
          {children}
        </main>
        <footer className="w-full flex items-center justify-center py-3 gap-1 text-current">
          <Link isExternal href={siteConfig.links.github}>
            <GithubIcon className="text-default-500"/>
          </Link>
          <span className="text-default-600">Created by</span>
          <p className="text-primary flex items-center gap-1.5">
            <Link isExternal href="https://ujjwal-new-portfolio.vercel.app/">Ujjwal Garg,</Link>
            <Link isExternal href="https://github.com/namanrath2003">Naman Rath,</Link>
            <Link isExternal href="https://github.com/utkarsh-shukla2003">Utkarsh Shukla.</Link>
          </p>
        </footer>
      </div>
  );
}
