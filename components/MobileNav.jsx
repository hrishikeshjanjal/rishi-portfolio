"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useEffect, useState } from "react";

const links = [
  { name: "home", id: "home" },
  { name: "services", id: "services" },
  { name: "resume", id: "resume" },
  { name: "work", id: "work" },
  { name: "contact", id: "contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;

    const sectionElements = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (!sectionElements.length) return;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.3;
      let currentSection = sectionElements[0].id;

      for (const section of sectionElements) {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        } else {
          break;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection);
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [pathname]);

  const handleClick = (event, id) => {
    if (pathname === "/") {
      event.preventDefault();
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(id);
      }
    }
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Rishi<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link) => {
            const isActive =
              pathname === "/"
                ? activeSection === link.id
                : pathname.includes(link.id) && link.id !== "home";

            return (
              <Link
                href={`/#${link.id}`}
                key={link.id}
                onClick={(event) => handleClick(event, link.id)}
                className={`${
                  isActive && "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
