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
      <div className="text-slate-400">
        <p className="mb-4">
          I bridge the gap between{" "}
          <span className="text-slate-200">Mechanical Engineering</span> and{" "}
          <span className="text-slate-200">Software Architecture</span>. My
          background in designing physical systems has shaped how I write code:
          I don't just build apps; I architect digital machinery that is robust,
          predictable, and built to scale.
        </p>

        <p className="mb-4">
          Today, I specialize in developing the{" "}
          <span className="text-teal-300">command centers</span> and{" "}
          <span className="text-teal-300">automation pipelines</span> that power
          modern enterprises. Whether it’s real-time dashboards for the events
          industry, high-precision solar modeling, or complex logistics
          trackers, I focus on turning chaotic data into streamlined, actionable
          insights.
        </p>

        <p className="mb-4">
          Behind every minimalist, high-performance interface I build lies a
          clean, type-safe backend designed for{" "}
          <span className="text-slate-200">maximum uptime and reliability</span>
          —the same principles I applied when designing electromechanical
          systems.
        </p>

        <p>
          Outside of the terminal, I balance technical rigor with movement and
          focus. Whether I’m navigating the complex rhythms of{" "}
          <span className="text-slate-200">salsa</span>, applying strategic
          discipline on the <span className="text-slate-200">tennis court</span>
          , or finding mental clarity through{" "}
          <span className="text-slate-200 font-medium">meditation</span>, I
          believe that high performance—in code or in life—comes from a state of
          total presence and flow.
        </p>
      </div>
    </section>
  );
}
