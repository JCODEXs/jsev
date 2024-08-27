"use client";
import Particles from "../app/components/particles";
import React from "react";

function about() {
  // const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  // const style = { maskImage, WebkitMaskImage: maskImage };
  return (
    <primal className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      <div id="__next">
        <div className="__variable_20b187 group/spotlight relative">
          <div
            className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
            // style={{
            //   background:
            //     " radial-gradient(600px at 901px 446px, rgba(29, 78, 216, 0.15), transparent 80%",
            // }}
          ></div>
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <a
              href="#content"
              className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
            >
              Skip to Content
            </a>
            <div className="lg:flex lg:justify-between lg:gap-4">
              <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                <div>
                  <Particles
                    className="absolute inset-0 -z-10 animate-fade-in"
                    quantity={100}
                  />

                  <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    <a href="/">Juan S. Escobar</a>
                  </h1>
                  <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                    Aerospace & web Engineer
                  </h2>
                  <p className="mt-4 max-w-xs leading-normal">
                    I empower your ideas to grow and fly, integrating the
                    virtual and physical realms
                  </p>
                  <nav
                    className="nav hidden lg:block"
                    aria-label="In-page jump links"
                  >
                    <ul className="mt-16 w-max">
                      <li>
                        <a
                          className="group flex items-center py-3 active"
                          href="#about"
                        >
                          <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                          <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                            About
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="group flex items-center py-3"
                          href="#experience"
                        >
                          <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                          <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                            Experience
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="group flex items-center py-3"
                          href="#projects"
                        >
                          <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                          <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                            Projects
                          </span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <ul
                  className="ml-1 mt-8 flex items-center"
                  aria-label="Social media"
                >
                  <li className="mr-5 text-xs">
                    <a
                      className="block hover:text-slate-200"
                      href="https://github.com/JCODEXs"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="sr-only">GitHub</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                      </svg>
                    </a>
                  </li>
                  <li className="mr-5 text-xs">
                    <a
                      className="block hover:text-slate-200"
                      href="https://instagram.com/MettaAttrezzo"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1000 1000"
                        fill="currentColor"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
                      </svg>
                    </a>
                  </li>
                  {/* <li className="mr-5 text-xs"><a className="block hover:text-slate-200" href="https://twitter.com/" target="_blank" rel="noreferrer">
            <span className="sr-only">Twitter</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 204" fill="currentColor" className="h-6 w-6" aria-hidden="true">
            <path id="white_background" d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z">
            </path></svg></a></li> */}
                  <li className="mr-5 text-xs">
                    <a
                      className="block hover:text-slate-200"
                      href="https://www.linkedin.com/in/juanSEscobarVega"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </header>
              <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
                <section
                  id="about"
                  className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                  aria-label="About me"
                >
                  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                      About
                    </h2>
                  </div>
                  <div>
                    <p className="mb-4">
                      Results-oriented FullStack NextJs Developer and
                      accomplished Master of Science in Mechanical Engineering,
                      poised to elevate my career in software development. With
                      over 8 years of experience in industrial and academic
                      sectors, I have held pivotal coordination roles in project
                      management and research. My responsibilities encompassed
                      the mechanical design and simulation, Acoustics nobile
                      properties research and planing development, and
                      implementation of{" "}
                      <a
                        className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                        href="#projects"
                      >
                        Projects
                      </a>
                      .
                    </p>
                    <p className="mb-4">
                      Focused on developing applications with advanced features,
                      including data analytics for earnings, automated legal
                      documentation for asset administration, personalized staff
                      goals and evaluations, cost and budget generation, news
                      broadcasting, product store integration, and streamlined
                      automations.
                    </p>
                    <p>
                      Passionate about exploring the potential of Web3 and
                      blockchain technologies,for organizational transparency,
                      fostering interconnected and accountable societies.
                      <span className="group/korok inline-flex  lg:font-medium lg:text-slate-200">
                        <span className="sr-only">BitCoin</span>
                        <span
                          className="group-hover/korok:text-orange-400 transition duration-75 group-hover/korok:-translate-y-px delay-[50ms]"
                          aria-hidden="true"
                        >
                          B
                        </span>
                        <span
                          className="group-hover/korok:text-orange-400 transition duration-75 group-hover/korok:-translate-y-px delay-[75ms]"
                          aria-hidden="true"
                        >
                          l
                        </span>
                        <span
                          className="group-hover/korok:text-white transition duration-75 group-hover/korok:-translate-y-px delay-[100ms]"
                          aria-hidden="true"
                        >
                          o
                        </span>
                        <span
                          className="group-hover/korok:text-white transition duration-75 group-hover/korok:-translate-y-px delay-[125ms]"
                          aria-hidden="true"
                        >
                          c
                        </span>
                        <span
                          className="group-hover/korok:text-gray-700 transition duration-75 group-hover/korok:-translate-y-px delay-[150ms]"
                          aria-hidden="true"
                        >
                          k
                        </span>
                        <span
                          className="group-hover/korok:text-gray-700 transition duration-75 group-hover/korok:-translate-y-px delay-[175ms]"
                          aria-hidden="true"
                        >
                          c
                        </span>
                        <span
                          className="group-hover/korok:text-blue-500 transition duration-75 group-hover/korok:-translate-y-px delay-[200ms]"
                          aria-hidden="true"
                        >
                          h
                        </span>
                        <span
                          className="group-hover/korok:text-blue-500 transition duration-75 group-hover/korok:-translate-y-px delay-[225ms]"
                          aria-hidden="true"
                        >
                          a
                        </span>
                        <span
                          className="group-hover/korok:text-green-500 transition duration-75 group-hover/korok:-translate-y-px delay-[250ms]"
                          aria-hidden="true"
                        >
                          i
                        </span>
                        <span
                          className="group-hover/korok:text-green-500 transition duration-75 group-hover/korok:-translate-y-px delay-[275ms]"
                          aria-hidden="true"
                        >
                          n
                        </span>
                      </span>
                      .
                    </p>
                  </div>
                </section>
                <section
                  id="experience"
                  className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                  aria-label="Work experience"
                >
                  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                      Experience
                    </h2>
                  </div>
                  <div>
                    <ol className="group/list">
                      <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                          <header
                            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                            aria-label="2022"
                          >
                            2023 — Present
                          </header>
                          <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-slate-200">
                              <div>
                                <a
                                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                                  href="https://joinery.cap.mettalecode.site/"
                                  target="_blank"
                                  rel="noreferrer"
                                  aria-label="full stack in metallecode "
                                >
                                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                  <span>
                                    Director {""}
                                    <span className="inline-block">
                                      Metallecode
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                        aria-hidden="true"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                          clipRule="evenodd"
                                        ></path>
                                      </svg>
                                    </span>
                                  </span>
                                </a>
                              </div>

                              <div>
                                <div
                                  className="text-slate-500"
                                  aria-hidden="true"
                                >
                                  FullStack Engineer
                                </div>
                              </div>
                            </h3>
                            <p className="mt-2 text-sm leading-normal">
                              Deliver high-quality, robust production code for a
                              diverse array of projects for clients including
                              law firms, wood forniture store, bakery, and
                              events.
                            </p>
                            <ul
                              className="mt-2 flex flex-wrap"
                              aria-label="Related links"
                            >
                              <li className="mr-4">
                                <a
                                  className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                                  href="https://maderafi.mettalecode.site/"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="mr-1 h-3 w-3"
                                    aria-hidden="true"
                                  >
                                    <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                                    <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                                  </svg>
                                  <span>Maderafina</span>
                                </a>
                              </li>
                              <li className="mr-4">
                                <a
                                  className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                                  href="https://pensionescolombianos.co/"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="mr-1 h-3 w-3"
                                    aria-hidden="true"
                                  >
                                    <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                                    <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                                  </svg>
                                  <span>Pensiones Colombianos</span>
                                </a>
                              </li>
                              <li className="mr-4">
                                <a
                                  className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                                  href="http://delicipes.mettalecode.site/"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="mr-1 h-3 w-3"
                                    aria-hidden="true"
                                  >
                                    <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                                    <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                                  </svg>
                                  <span>Nine Pasteleria</span>
                                </a>
                              </li>
                            </ul>
                            <ul
                              className="mt-2 flex flex-wrap"
                              aria-label="Technologies used"
                            >
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                  React
                                </div>
                              </li>
                              {/* <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                  React Native
                                </div>
                              </li> */}
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                  Tailwind CSS
                                </div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                  JavaScript
                                </div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                  TypeScript
                                </div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                  NextJs
                                </div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                  MongoDb
                                </div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                  Drizle
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                          <header
                            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                            aria-label="June 2022 — October 2023"
                          >
                            June 2022 — October 2023
                          </header>
                          <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-slate-200">
                              <div>
                                <a
                                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                                  href="https://www.instagram.com/imperialstudio_md/"
                                  target="_blank"
                                  rel="noreferrer"
                                  aria-label="Imperial Studio"
                                >
                                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                  <span>
                                    FullStack developer {""}
                                    <span className="inline-block">
                                      Imperial Studio
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                        aria-hidden="true"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                          clipRule="evenodd"
                                        ></path>
                                      </svg>
                                    </span>
                                  </span>
                                </a>
                              </div>
                              <div>
                                <div
                                  className="text-slate-500"
                                  aria-hidden="true"
                                >
                                  FrontEnd Engineer
                                </div>
                              </div>
                            </h3>
                            <p className="mt-2 text-sm leading-normal">
                              Design, develop, and maintainment a comprehensive
                              dashboard integrating large data APIs and
                              real-time data management systems. This dashboard
                              is utilized for the administration of rooms and
                              the monitoring of employee performance indicators.
                              I have leveraged MongoDB, AWS S3 services, and
                              internal communication tools to ensure a seamless
                              and efficient user experience.
                            </p>

                            <ul
                              className="mt-2 flex flex-wrap"
                              aria-label="Technologies used"
                            >
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                  NextJs
                                </div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                  CSS
                                </div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                  MongoDB
                                </div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                  Docker
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                          <header
                            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                            aria-label="2016 to 2017"
                          >
                            November 2021-January 2022
                          </header>
                          <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-slate-200">
                              <div>
                                <a
                                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                                  href="https://www.univalle.edu.co/"
                                  target="_blank"
                                  rel="noreferrer"
                                  aria-label="Univalle"
                                >
                                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                  <span>
                                    Professional services for the support of
                                    technical activities of research{" "}
                                    <span className="inline-block">
                                      Universidad del valle
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                        aria-hidden="true"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                          clipRule="evenodd"
                                        ></path>
                                      </svg>
                                    </span>
                                  </span>
                                </a>
                              </div>
                              <div>
                                <div
                                  className="text-slate-500"
                                  aria-hidden="true"
                                >
                                  Research Engineer
                                </div>
                              </div>
                            </h3>
                            <p className="mt-2 text-sm leading-normal">
                              Preparation of a proposal based on maritime
                              electomobility to apply to investment funds such
                              as MGA y PFAN
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                          <header
                            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                            aria-label="July to December 2016"
                          >
                            March 2021 - July de 2021
                          </header>
                          <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-slate-200">
                              <div>
                                <a
                                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                                  href="https://parquesoft.com/"
                                  target="_blank"
                                  rel="noreferrer"
                                  aria-label="3d Designer"
                                >
                                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                  <span>
                                    3D-Designer{""}
                                    <span className="inline-block">
                                      {""}Parquesoft
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                        aria-hidden="true"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                          clipRule="evenodd"
                                        ></path>
                                      </svg>
                                    </span>
                                  </span>
                                </a>
                              </div>
                              <div>
                                <div
                                  className="text-slate-500"
                                  aria-hidden="true"
                                >
                                  CAD Engineer
                                </div>
                              </div>
                            </h3>
                            <p className="mt-2 text-sm leading-normal">
                              Create detailed 2D drawings for each part,
                              including dimensions, tolerances, and material
                              specifications,Create exploded views and assembly
                              instructions,For sheet metal components, create
                              flat patterns and specify bending operations.
                            </p>

                            <ul
                              className="mt-2 flex flex-wrap"
                              aria-label="Technologies used"
                            >
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                  Solid Works
                                </div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                  Ansys
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                          <header
                            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                            aria-label="July to December 2015"
                          >
                            January 2019- July 2019
                          </header>
                          <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-slate-200">
                              <div>
                                <a
                                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                                  href="https://uetingenieria.com/"
                                  target="_blank"
                                  rel="noreferrer"
                                  aria-label="Uet"
                                >
                                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                  <span>
                                    Projects Manager{" "}
                                    <span className="inline-block">
                                      UET Ingenieria
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                        aria-hidden="true"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                          clipRule="evenodd"
                                        ></path>
                                      </svg>
                                    </span>
                                  </span>
                                </a>
                              </div>
                              <div>
                                <div
                                  className="text-slate-500"
                                  aria-hidden="true"
                                >
                                  Projects Engineer
                                </div>
                              </div>
                            </h3>
                            <p className="mt-2 text-sm leading-normal">
                              Led a team of 10 in the successful completion of a
                              several projects, delivering on time and within
                              budget. Developed project plans, timelines, and
                              budgets, ensuring alignment with business
                              objectives. Coordinated with stakeholders.
                              Utilized project management software to monitor
                              progress and manage resources efficiently.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                          <header
                            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                            aria-label="July to December 2015"
                          >
                            August 2011-February 2015
                          </header>
                          <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-slate-200">
                              <div>
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>
                                  Sales Engineer{" "}
                                  <span className="inline-block">
                                    Reyser ltda
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                      aria-hidden="true"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                        clipRule="evenodd"
                                      ></path>
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </h3>
                            <p className="mt-2 text-sm leading-normal">
                              Design and assembly of electromechanical systems.
                              selection and adaptation of power transmission
                              systems,Conducted product demonstrations and
                              presentations to potential clients. Managed a
                              portfolio of 15+ clients, providing exceptional
                              customer service and support.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ol>
                    <div>
                      <div className="mt-12 mb-4">
                        <a
                          className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
                          aria-label="View Full Résumé"
                          href="https://jcodexs.github.io/hoja-de-vida/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span>
                            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                              View Full{" "}
                            </span>
                            <span className="whitespace-nowrap">
                              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                                Résumé
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </a>
                      </div>
                      <a
                        className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
                        aria-label="View Full Project Archive"
                        href="/certificates"
                      >
                        <span>
                          <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                            View Certificates{""}
                          </span>
                          <span className="whitespace-nowrap">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </section>
                <section
                  id="projects"
                  className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                  aria-label="Selected projects"
                >
                  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                      Projects
                    </h2>
                  </div>
                  <div>
                    <ul className="group/list">
                      <li className="mb-12">
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                          href="https://delicipes.mettalecode.site/"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Build a Spotify Connected App"
                        >
                          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <div className="z-10 sm:order-2 sm:col-span-6">
                              <h3>
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>
                                  Delicipes Plan. Shop. Eat.
                                  <span className="inline-block">
                                    {""}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                      aria-hidden="true"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                        clipRule="evenodd"
                                      ></path>
                                    </svg>
                                  </span>
                                </span>
                              </h3>
                              <p className="mt-2 text-sm leading-normal">
                                meal planning with detailed recipes, cost
                                calculations, and easy-to-use planners. Generate
                                grocery lists based on your weekly meal plan and
                                stay within budget effortlessly
                              </p>
                              <ul
                                className="mt-2 flex flex-wrap"
                                aria-label="Technologies used:"
                              >
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                    S3
                                  </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                    NextJs
                                  </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                    MongoDB
                                  </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                    Tailwind
                                  </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                    Shadcn
                                  </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                    Clerk
                                  </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                    Docker
                                  </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                    Zustand
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <img
                              alt="Delicipes"
                              loading="lazy"
                              width="200"
                              height="48"
                              decoding="async"
                              data-nimg="1"
                              className=" transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                              style={{ color: "transparent" }}
                              src="/Il_nostro_matrimonio (1).png"
                            />
                          </div>
                        </a>
                      </li>
                      <li className="mb-12">
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                          href="https://pensionescolombianos.com"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Pensiones Colombianos"
                        >
                          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <div className="z-10 sm:order-2 sm:col-span-6">
                              <h3>
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>
                                  Pensiones Colombianos{""}
                                  <span className="inline-block">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                      aria-hidden="true"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                        clipRule="evenodd"
                                      ></path>
                                    </svg>
                                  </span>
                                </span>
                              </h3>
                              <p className="mt-2 text-sm leading-normal">
                                Creating a web application to attract clients,
                                collect their data, and host past legal
                                sentences in PDF
                              </p>
                              {/* <a
                              className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                              href="https://joinery.cap.mettalecode.site/"
                              target="_blank"
                              rel="noreferrer"
                              aria-label="580 stars on GitHub"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="mr-1 h-3 w-3"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                              <span>Maderafina</span>
                            </a> */}
                              <ul
                                className="mt-2 flex flex-wrap"
                                aria-label="Technologies used:"
                              >
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                    React
                                  </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                    NextJs
                                  </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                    MongoDB
                                  </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                    Docker
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <img
                              alt=""
                              loading="lazy"
                              width="200"
                              height="48"
                              decoding="async"
                              data-nimg="1"
                              className=" transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                              style={{ color: "transparent" }}
                              src="/pensiones.png"
                            />
                          </div>
                        </a>
                      </li>
                      <li className="mb-12">
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                          href="https://maderafi.mettalecode.site"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="maderafi"
                        >
                          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <div className="z-10 sm:order-2 sm:col-span-6">
                              <h3>
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>
                                  Maderafina
                                  <span className="inline-block">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                      aria-hidden="true"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                        clipRule="evenodd"
                                      ></path>
                                    </svg>
                                  </span>
                                </span>
                              </h3>
                              <p className="mt-2 text-sm leading-normal">
                                Landing page used to show products and prices of
                                wood forniture
                              </p>
                              {/* <a
                              className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                              href="https://maderafi.mettalecode.site"
                              target="_blank"
                              rel="noreferrer"
                              aria-label="Over 100,000 installs on Visual Studio Code Marketplace"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="mr-1 h-4 w-4"
                                aria-hidden="true"
                              >
                                <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"></path>
                                <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"></path>
                              </svg>
                              <span>Maderafina</span>
                            </a> */}
                              <ul
                                className="mt-2 flex flex-wrap"
                                aria-label="Technologies used:"
                              >
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                    ThreeJs
                                  </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                    NextJs
                                  </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                    Tailwind
                                  </div>
                                </li>
                              </ul>
                            </div>

                            <img
                              alt=""
                              loading="lazy"
                              width="200"
                              height="48"
                              decoding="async"
                              data-nimg="1"
                              className=" transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                              style={{ color: "transparent" }}
                              src="/maderafina.png"
                            />
                          </div>
                        </a>
                      </li>
                    </ul>

                    <div className="mt-12 ">
                      <a
                        className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
                        aria-label="View Full Project Archive"
                        href="/archive"
                      >
                        <span>
                          <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                            View Full Project{" "}
                          </span>
                          <span className="whitespace-nowrap">
                            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                              Archive
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </section>

                <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
                  <blockquote className="relative p-4 text-xl italic text-gray-100 ">
                    <span className="absolute top-0 left-0 -ml-4 text-5xl text-gray-50">
                      &ldquo;
                    </span>
                    The will to win, the desire to succeed, the urge to reach
                    your full potential… these are the keys that will unlock the
                    door to personal excellence.
                    <span className="absolute bottom-0 right-0 -mr-4 text-5xl text-gray-50">
                      &rdquo;
                    </span>
                  </blockquote>
                  <cite className="block mt-4 text-sm text-right text-gray-100">
                    - Confucius
                  </cite>
                </footer>
              </main>
            </div>
          </div>
        </div>
      </div>
    </primal>
  );
}

export default about;
