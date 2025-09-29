"use client";
import Particles from "../app/components/particles";
import Header from "../app/components/Header";
import AboutSection from "../app/components/AboutSection";
import ExperienceSection from "../app/components/ExperienceSection";
import ProjectsSection from "../app/components/ProjectsSection";
import Footer from "../app/components/Footer";
import React, { useState } from "react";

function About() {
  const [loadedCount, setLoadedCount] = useState(0);

  const handleImageLoad = () => {
    setLoadedCount((prevCount) => prevCount + 1);
  };

  const allImagesLoaded = loadedCount === 4;
  return (
    <primal className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      <div id="__next">
        <div className="__variable_20b187 group/spotlight relative">
          <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"></div>
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <a
              href="#content"
              className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
            >
              Skip to Content
            </a>
            <div className="lg:flex lg:justify-between lg:gap-4 ">
              {allImagesLoaded && (
                <Particles
                  className="absolute inset-0 -z-10 animate-fade-in"
                  quantity={100}
                />
              )}
              <Header
                allImagesLoaded={allImagesLoaded}
                handleImageLoad={handleImageLoad}
              />
              <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
                <AboutSection />
                <ExperienceSection />

                <ProjectsSection handleImageLoad={handleImageLoad} />

                <Footer />
              </main>
            </div>
          </div>
        </div>
      </div>
    </primal>
  );
}

export default About;
