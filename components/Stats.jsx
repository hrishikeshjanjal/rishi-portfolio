"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 3,
    text: "Years across full-stack & data",
  },
  {
    num: 5,
    text: "K+ daily users supported",
  },
  {
    num: 93,
    text: "% test coverage on core apps",
  },
  {
    num: 10,
    text: "K+ daily ETL queries automated",
  },
];

const Stats = () => {
  return (
    <section className="py-10 border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-8 max-w-[90vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 min-w-[220px] flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[140px]" : "max-w-[200px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
