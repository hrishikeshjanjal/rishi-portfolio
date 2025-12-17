"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "Software engineer blending full-stack product delivery with data engineering. I specialize in Next.js, Node.js, and cloud-native ETL that serve production traffic (5K+ daily users, 10K+ daily queries) while keeping performance, testing, and observability tight.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Hrishikesh Janjal",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1) 934 246 0895",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    // {
    //   fieldName: "Skype",
    //   fieldValue: "luke.01",
    // },
    // {
    //   fieldName: "Nationality",
    //   fieldValue: "American",
    // },
    {
      fieldName: "Email",
      fieldValue: "hrishikeshjanjalsbu@gmail.com",
    },
    {
      fieldName: "Location",
      fieldValue: "Stony Brook, NY",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "linkedin.com/in/hrishikesh-janjal",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Shipped production web platforms, data pipelines, and analytics for consumer- and enterprise-scale users. I focus on measurable outcomes: faster deployments, reliable ETL, and UI quality backed by testing.",
  items: [
    {
      company: "Particle41",
      position: "Software Developer (Full Stack — Data Engineering)",
      duration: "Jul 2023 – Jul 2024",
    },
    {
      company: "Reliance Jio Tesseract",
      position: "Full Stack Web Developer",
      duration: "Sep 2021 – Jun 2023",
    },
    {
      company: "Tata Consultancy Services",
      position: "Assistant Systems Engineer",
      duration: "Jan 2021 – Aug 2021",
    },
    // {
    //   company: "Tech Academy",
    //   position: "Teaching Assistant",
    //   duration: "2019 - 2020",
    // },
    // {
    //   company: "Digital Agency",
    //   position: "UI/UX Designer",
    //   duration: "2018 - 2019",
    // },
    // {
    //   company: "Software Development Firm",
    //   position: "Junior Developer",
    //   duration: "2017 - 2018",
    // },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Computer engineering foundation with a focus on ML, computer vision, and data-heavy systems — paired with a strong base in databases, operating systems, and algorithms.",
  items: [
    {
      institution: "Stony Brook University",
      degree: "Master of Science in Computer Engineering (GPA: 3.76/4.0)",
      duration: "Aug 2024 - Dec 2025",
    },
    {
      institution: "Government Engineering College Aurangabad ",
      degree: "Bachelor of Science in Information Technology",
      duration: "Aug 2016 - Oct 2020",
    },
    // {
    //   institution: "Online Course",
    //   degree: "Programming Course",
    //   duration: "2020 - 2021",
    // },
    // {
    //   institution: "Tech Institute",
    //   degree: "Certified Web Developer",
    //   duration: "2019",
    // },
    // {
    //   institution: "Design School",
    //   degree: "Diploma in Graphic Design",
    //   duration: "2016 - 2018",
    // },
    // {
    //   institution: "Community College",
    //   degree: "Associate Degree in Computer Science",
    //   duration: "2014 - 2016",
    // },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "A versatile mix of front-end, back-end, and data technologies - enabling end-to-end software delivery, from interactive user interfaces to optimized data pipelines.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

// FRONTEND
const frontendSkills = {
  title: "Frontend",
  description:
    "Modern, accessible UIs in React/Next.js with reusable components, motion, and testing baked in.",
  skillList: [
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { name: "TypeScript" },
    { icon: <FaJs />, name: "JavaScript (ES6+)" },
    { name: "Redux Toolkit" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { name: "Framer Motion" },
    { name: "AngularJS" },
    { name: "Jest / RTL" },
  ],
};

// BACKEND
const backendSkills = {
  title: "Backend",
  description:
    "API design and platform engineering with Node.js/TypeScript. Auth, caching, and CI/CD for reliable services.",
  skillList: [
    { icon: <FaNodeJs />, name: "Node.js" },
    { name: "REST APIs" },
    { name: "GraphQL" },
    { name: "Auth0 / JWT" },
    { name: "PostgreSQL" },
    { name: "MongoDB" },
    { name: "Redis" },
    { name: "Prisma" },
    { name: "Jest" },
  ],
};

// DATA ENGINEERING
const dataEngineeringSkills = {
  title: "Data Engineering & ETL",
  description:
    "Ingestion, transformation, and orchestration with Python/SQL across lakehouse and streaming workloads.",
  skillList: [
    { name: "Python" },
    { name: "SQL" },
    { name: "Azure Functions" },
    { name: "Databricks" },
    { name: "ETL / ELT" },
    { name: "Power BI / Tableau" },
    { name: "Real-time alerts & analytics" },
    { name: "LLaMA 3 / LoRA" },
  ],
};

// CLOUD & DEVOPS
const cloudSkills = {
  title: "Cloud & DevOps",
  description:
    "CI/CD, containers, and cloud services to ship faster with confidence and observability.",
  skillList: [
    { name: "Azure" },
    { name: "AWS" },
    { name: "Docker" },
    { name: "Git" },
    { name: "CI/CD (GitHub Actions)" },
    { name: "Linux" },
    { name: "Firebase" },
    { name: "Databricks" },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto mb-10">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-5"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[280px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-5"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[280px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 text-left">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[40px] text-center xl:text-left">
                <div className="space-y-4">
                  <h3 className="text-4xl font-bold">My Skills</h3>
                  <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">
                    A balanced mix of frontend, backend, data engineering, and cloud technologies —
                    enabling end-to-end software delivery from UI design to production-grade deployments.
                  </p>
                </div>

                {/* FRONTEND */}
                <div className="space-y-3">
                  <h4 className="text-2xl font-semibold text-accent">{frontendSkills.title}</h4>
                  <p className="text-white/60 max-w-[700px]">{frontendSkills.description}</p>
                  <ul className="flex flex-wrap gap-3 text-sm md:text-base">
                    {frontendSkills.skillList.map((skill, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 rounded-full bg-[#232329] text-white/80 border border-white/10 hover:border-accent hover:text-accent transition-all"
                      >
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BACKEND */}
                <div className="space-y-3">
                  <h4 className="text-2xl font-semibold text-accent">{backendSkills.title}</h4>
                  <p className="text-white/60 max-w-[700px]">{backendSkills.description}</p>
                  <ul className="flex flex-wrap gap-3 text-sm md:text-base">
                    {backendSkills.skillList.map((skill, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 rounded-full bg-[#232329] text-white/80 border border-white/10 hover:border-accent hover:text-accent transition-all"
                      >
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* DATA ENGINEERING */}
                <div className="space-y-3">
                  <h4 className="text-2xl font-semibold text-accent">{dataEngineeringSkills.title}</h4>
                  <p className="text-white/60 max-w-[700px]">{dataEngineeringSkills.description}</p>
                  <ul className="flex flex-wrap gap-3 text-sm md:text-base">
                    {dataEngineeringSkills.skillList.map((skill, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 rounded-full bg-[#232329] text-white/80 border border-white/10 hover:border-accent hover:text-accent transition-all"
                      >
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CLOUD & DEVOPS */}
                <div className="space-y-3">
                  <h4 className="text-2xl font-semibold text-accent">{cloudSkills.title}</h4>
                  <p className="text-white/60 max-w-[700px]">{cloudSkills.description}</p>
                  <ul className="flex flex-wrap gap-3 text-sm md:text-base">
                    {cloudSkills.skillList.map((skill, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 rounded-full bg-[#232329] text-white/80 border border-white/10 hover:border-accent hover:text-accent transition-all"
                      >
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>


            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
