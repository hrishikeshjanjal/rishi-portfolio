import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Services from "./services/page";
import Resume from "./resume/page";
import Work from "./work/page";
import Contact from "./contact/page";

const sectionBaseClasses = "scroll-mt-28 border-b border-white/10 py-20";

const Home = () => {
  return (
    <main className="space-y-0">
      <section id="home" data-section className={`${sectionBaseClasses} pt-16`}>
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-12">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none space-y-6">
              <div>
                <span className="text-sm uppercase tracking-[0.3em] text-white/60">
                  Software Engineer
                </span>
                <h1 className="h1 mb-4 leading-tight">
                  Hello, I&apos;m <br />{" "}
                  <span className="text-accent">Hrishikesh Janjal</span>
                </h1>
                <p className="max-w-2xl mx-auto xl:mx-0 text-lg text-white/80">
                  Full-stack and data engineering specialist who ships scalable products with Next.js,
                  Node.js, and cloud-first data pipelines. I turn raw data into reliable, user-facing
                  experiences that stay fast in production.
                </p>
              </div>
              {/* btn and socials */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 tracking-wide"
                >
                  <a
                    href="/assets/resume/Rishi_cv.pdf"
                    download="Hrishikesh_Janjal_Resume.pdf"
                    className="flex gap-2"
                  >
                    <span>Download Resume</span>
                    <FiDownload className="text-xl" />
                  </a>
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            {/* photo */}
            <div className="order-1 xl:order-none">
              <Photo />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <Stats />
        </div>
      </section>

      <section id="services" data-section className={sectionBaseClasses}>
        <Services />
      </section>

      <section id="resume" data-section className={sectionBaseClasses}>
        <Resume />
      </section>

      <section id="work" data-section className={sectionBaseClasses}>
        <Work />
      </section>

      <section id="contact" data-section className={`${sectionBaseClasses} border-b-0 pb-10`}>
        <Contact />
      </section>
    </main>
  );
};

export default Home;
