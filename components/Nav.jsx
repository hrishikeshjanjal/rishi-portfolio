"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { name: "home", id: "home" },
  { name: "services", id: "services" },
  { name: "resume", id: "resume" },
  { name: "work", id: "work" },
  { name: "contact", id: "contact" },
];

const Nav = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

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

  const handleScroll = (event, id) => {
    if (pathname !== "/") return;

    event.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  return (
    <nav className="flex gap-8">
      {links.map((link) => {
        const isActive =
          pathname === "/"
            ? activeSection === link.id
            : pathname.includes(link.id) && link.id !== "home";

        return (
          <Link
            href={`/#${link.id}`}
            key={link.id}
            onClick={(event) => handleScroll(event, link.id)}
            className={`${
              isActive && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
