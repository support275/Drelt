"use client";

import { useEffect, useState } from "react";

const stats = [
  { target: 4, format: (n: number) => `${n}`, label: "Assessment Pillars" },
  { target: 3, format: (n: number) => `${n}`, label: "Issue Categories" },
  { target: 6, format: (n: number) => `${n}`, label: "Lifecycle Stages" },
  {
    target: 9,
    format: (n: number) => (n >= 9 ? "6–9" : `${n}`),
    label: "Months Avg. Timeline",
  },
];

function useCountUp(target: number, duration = 1400) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return count;
}

function StatCard({ stat }: { stat: (typeof stats)[number] }) {
  const count = useCountUp(stat.target);
  return (
    <div className="group bg-[#356A4B] rounded-2xl px-6 py-7 transition-colors hover:bg-[#C8973A]">
      <strong className="font-sans font-bold text-white leading-none text-[40px] sm:text-[48px] transition-colors group-hover:text-white">
        {stat.format(count)}
      </strong>
      <span className="block text-white/50 font-semibold tracking-[0.12em] uppercase mt-3 text-[11px] transition-colors group-hover:text-white/70">
        {stat.label}
      </span>
    </div>
  );
}

function HeroArt() {
  return (
    <svg
      className="absolute top-0 right-0 w-[380px] h-[378px] sm:w-[500px] sm:h-[497px] lg:w-[764px] lg:h-[760px] pointer-events-none hidden sm:block"
      viewBox="0 0 764 760"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M75.7529 311.031C85.061 414.932 131.133 508.262 200.842 577.906C270.551 647.551 363.966 693.579 467.961 702.879L468.557 702.933L468.503 702.337C459.195 598.437 413.123 505.108 343.414 435.463C273.705 365.818 180.29 319.789 76.2949 310.489L75.6992 310.436L75.7529 311.031ZM937.771 310.489C833.776 319.789 740.361 365.818 670.652 435.463C600.944 505.108 554.872 598.437 545.563 702.337L545.51 702.933L546.106 702.879C650.102 693.579 743.517 647.551 813.226 577.906C882.934 508.262 929.006 414.932 938.314 311.031L938.367 310.436L937.771 310.489ZM507 -189.5C568.933 -189.5 625.059 -164.363 665.636 -123.823C706.279 -83.2838 731.373 -27.2097 731.373 34.666C731.373 64.4705 725.499 93.0071 714.821 119.144C703.743 146.213 687.46 170.751 667.238 191.421C665.187 193.506 663.359 197.07 661.705 201.561C660.046 206.067 658.54 211.568 657.158 217.579C654.395 229.602 652.117 243.719 650.111 256.11V256.112C648.572 265.874 647.103 274.948 646.304 278.81L646.303 278.812C637.842 320.946 611.664 350.564 578.206 367.744L577.935 367.884V367.949C556.22 379.035 531.71 384.586 507.5 384.661V384.529H507C482.325 384.529 457.522 378.999 435.794 367.812L434.23 366.997C401.522 349.703 376.026 320.355 367.697 278.88L367.696 278.877L367.54 278.093C366.721 273.878 365.395 265.336 363.888 256.176C361.882 243.785 359.605 229.651 356.842 217.612C355.46 211.593 353.954 206.084 352.295 201.571C350.745 197.355 349.041 193.955 347.144 191.829L346.762 191.421C326.54 170.751 310.256 146.213 299.178 119.144C288.5 93.0072 282.627 64.4704 282.627 34.666C282.627 -27.2093 307.787 -83.2834 348.364 -123.823V-123.824C388.941 -164.43 445.067 -189.5 507 -189.5ZM507.067 -115.923C465.393 -115.923 427.744 -99.0943 400.431 -71.8066C373.118 -44.5189 356.272 -6.90386 356.272 34.7324C356.272 54.2807 359.925 72.9511 366.683 90.0107L367.347 91.6572C374.862 109.893 385.733 126.319 399.155 140.063L399.156 140.064C411.314 152.476 419.21 169.845 424.769 188.531C430.326 207.214 433.532 227.162 436.342 244.708C437.279 250.595 438.217 256.014 439.891 264.507V264.508C443.447 282.406 454.61 295.04 468.91 302.47V302.539L469.182 302.678C480.497 308.465 493.687 311.354 507.067 311.354H507.567V311.216C520.904 311.147 533.971 308.328 544.952 302.677C559.383 295.266 570.665 282.586 574.243 264.574L574.242 264.573C575.983 256.077 576.855 250.589 577.792 244.708L577.791 244.707C580.601 227.128 583.808 207.18 589.365 188.506C594.924 169.828 602.82 152.476 614.978 140.064L614.977 140.063C628.045 126.812 638.657 110.983 646.079 93.3662L646.788 91.6553C653.902 74.1553 657.861 54.9125 657.861 34.7324C657.861 -6.90385 641.016 -44.5189 613.703 -71.8066C586.39 -99.0942 548.741 -115.923 507.067 -115.923ZM470.244 776.76L469.78 776.727C345.736 767.718 234.059 714.087 150.803 631.806L148.842 629.856C57.2302 538.262 0.500058 411.755 0.5 272.028V235.307H37.2559C177.112 235.307 303.736 291.918 395.414 383.512C442.79 430.844 480.811 487.523 506.537 550.543L507.001 551.679L507.463 550.543C533.122 487.523 571.21 430.844 618.586 383.512C710.197 291.985 836.888 235.307 976.744 235.307H1013.5V272.028C1013.5 411.755 956.836 538.263 865.158 629.856C781.699 713.239 669.24 767.647 544.22 776.727L543.756 776.76V850.5H470.244V776.76Z"
        stroke="#7CBD42"
      />
    </svg>
  );
}

export default function Hero({ heading }: { heading?: React.ReactNode }) {
  return (
    <section
      className={`relative overflow-hidden bg-green-dark flex items-end ${heading ? "h-64 sm:h-125" : "h-165 sm:h-190"}`}
    >
      <HeroArt />

      <div className="relative z-10 max-w-360 mx-auto px-4 sm:px-6 w-full pb-16 sm:pb-20">
        {heading ? (
          <h1 className="font-heading font-bold text-gold max-w-175 text-[40px] sm:text-[72px] leading-10.5 sm:leading-18.5 tracking-[-0.04em]">
            {heading}
          </h1>
        ) : (
          <>
            {/* Badge */}
            <div className="inline-flex items-center border border-white/25 rounded-full px-4 py-1.5 mb-8 sm:mb-10">
              <span className="text-white text-[11px] font-semibold tracking-[0.15em] uppercase">
                DRELT Master Handbook
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading font-bold text-white max-w-175 mb-10 sm:mb-12 text-[40px] sm:text-[72px] leading-[42px] sm:leading-[74px] tracking-[-0.04em]">
              <span className="block">Distributed</span>
              <span className="block">Renewable Energy</span>
              <span className="block text-gold">Lending Toolkit</span>
            </h1>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {stats.map((stat) => (
                <StatCard key={stat.label} stat={stat} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
