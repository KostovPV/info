import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-cover bg-center bg-no-repeat pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        style={{ backgroundImage: "url('/images/hero/tanker4.jpg')" }}
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="pt-8 mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Marine Info page - all the information for seamans on one place
                </h1>
                <p className="dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
                  Info Banner introducing the page content
                </p>
                {/* <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    🔥 Get Pro
                  </Link>
                  <Link
                    href="https://github.com/NextJSTemplates/startup-nextjs"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Star on GitHub
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-32 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 512 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-sky-400/80"   /* inherits Tailwind colour; adjust as needed */
          >
            {/* ------- outer guide ring ------- */}
            <circle cx="256" cy="278" r="245" stroke="currentColor" stroke-opacity=".15" />

            {/* ------- dotted ring (64 ticks) ------- */}
            <g stroke="currentColor" stroke-opacity=".35" stroke-width="2">
              {Array.from({ length: 64 }).map((_, i) => {
                const a = (i / 64) * 2 * Math.PI;
                const r1 = 213,
                  r2 = 223;
                const x1 = 256 + r1 * Math.cos(a);
                const y1 = 278 + r1 * Math.sin(a);
                const x2 = 256 + r2 * Math.cos(a);
                const y2 = 278 + r2 * Math.sin(a);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
              })}
            </g>

            {/* ------- inner ring ------- */}
            <circle cx="256" cy="278" r="154" stroke="currentColor" stroke-opacity=".35" stroke-width="2" />

            {/* ------- eight-point star ------- */}
            <g fill="currentColor">
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 45 * Math.PI) / 180;
                const isMajor = i % 2 === 0;
                const len = isMajor ? 195 : 145;
                const inner = 40;
                const tipX = 256 + len * Math.cos(angle);
                const tipY = 278 + len * Math.sin(angle);
                const base1X = 256 + inner * Math.cos(angle + Math.PI / 16);
                const base1Y = 278 + inner * Math.sin(angle + Math.PI / 16);
                const base2X = 256 + inner * Math.cos(angle - Math.PI / 16);
                const base2Y = 278 + inner * Math.sin(angle - Math.PI / 16);

                return (
                  <polygon
                    key={i}
                    points={`${tipX},${tipY} ${base1X},${base1Y} 256,278 ${base2X},${base2Y}`}
                    opacity={isMajor ? 0.9 : 0.6}
                  />
                );
              })}
            </g>

            {/* ------- centre + thin rim ------- */}
            <circle cx="256" cy="278" r="38" fill="currentColor" fill-opacity=".85" />
            <circle cx="256" cy="278" r="58" stroke="currentColor" stroke-opacity=".35" stroke-width="2" />

            {/* ------- labels ------- */}
            <g
              font-family="serif"
              font-weight="bold"
              fill="currentColor"
              text-anchor="middle"
            >
              <text x="256" y="28" font-size="32">N</text>
              <text x="256" y="546" font-size="32">S</text>
              <text x="18" y="286" font-size="32">W</text>
              <text x="494" y="286" font-size="32">E</text>

              <text x="412" y="110" font-size="20">NE</text>
              <text x="412" y="462" font-size="20">SE</text>
              <text x="100" y="110" font-size="20">NW</text>
              <text x="100" y="462" font-size="20">SW</text>
            </g>
          </svg>

        </div>



      </section>
    </>
  );
};

export default Hero;
