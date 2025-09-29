export default function AboutSection() {
  return (
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
          From Mechanical Systems to Software Architecture. I'm a full-stack
          developer who builds the digital machinery that powers businesses. I
          use React, Next.js, and a full suite of modern tools to create
          applications that handle complex tasks—from automated legal docs and
          data analytics to integrated e-commerce and internal tools.some of my
          work can be found in the {""}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="#projects"
          >
            Projects
          </a>
          .
        </p>
        <p className="mb-4">
          My engineering background means I don't just code; I architect
          solutions that are robust, scalable, and efficient. .{""}
        </p>
        <p>
          What I'm exploring next: The principles of Web3 and blockchain to
          create a more transparent and interconnected digital future {""}
          <span className="group/bitcoin inline-flex  lg:font-medium lg:text-slate-200">
            <span className="sr-only">BitCoin</span>
            <span
              className="group-hover/bitcoin:text-orange-400 transition duration-75 group-hover/bitcoin:-translate-y-px delay-[50ms]"
              aria-hidden="true"
            >
              B
            </span>
            <span
              className="group-hover/bitcoin:text-orange-400 transition duration-75 group-hover/bitcoin:-translate-y-px delay-[75ms]"
              aria-hidden="true"
            >
              l
            </span>
            <span
              className="group-hover/bitcoin:text-white transition duration-75 group-hover/bitcoin:-translate-y-px delay-[100ms]"
              aria-hidden="true"
            >
              o
            </span>
            <span
              className="group-hover/bitcoin:text-white transition duration-75 group-hover/bitcoin:-translate-y-px delay-[125ms]"
              aria-hidden="true"
            >
              c
            </span>
            <span
              className="group-hover/bitcoin:text-gray-700 transition duration-75 group-hover/bitcoin:-translate-y-px delay-[150ms]"
              aria-hidden="true"
            >
              k
            </span>
            <span
              className="group-hover/bitcoin:text-gray-700 transition duration-75 group-hover/bitcoin:-translate-y-px delay-[175ms]"
              aria-hidden="true"
            >
              c
            </span>
            <span
              className="group-hover/bitcoin:text-blue-500 transition duration-75 group-hover/bitcoin:-translate-y-px delay-[200ms]"
              aria-hidden="true"
            >
              h
            </span>
            <span
              className="group-hover/bitcoin:text-blue-500 transition duration-75 group-hover/bitcoin:-translate-y-px delay-[225ms]"
              aria-hidden="true"
            >
              a
            </span>
            <span
              className="group-hover/bitcoin:text-green-500 transition duration-75 group-hover/bitcoin:-translate-y-px delay-[250ms]"
              aria-hidden="true"
            >
              i
            </span>
            <span
              className="group-hover/bitcoin:text-green-500 transition duration-75 group-hover/bitcoin:-translate-y-px delay-[275ms]"
              aria-hidden="true"
            >
              n
            </span>
          </span>
          .
        </p>
      </div>
    </section>
  );
}
