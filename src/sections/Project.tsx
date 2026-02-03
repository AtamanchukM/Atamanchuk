import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import motionPortfolio from "../assets/motionPortfolio.png";
import myPortfolio from "../assets/myPortfolio.png";
import booxExchange from "../assets/bookExchange.png";
import { FadeInSection, FadeRightSection } from "../UI/FramerAnimation";

export default function Project() {
  const { t } = useTranslation();

  const [project] = useState([
    {
      image: motionPortfolio,
      name: t("projects.motionPortfolio.name"),
      brief: t("projects.motionPortfolio.brief"),
      repoLink: "https://github.com/AtamanchukM/Friend-proj",
      visitSite: "https://atamanchukm.github.io/Friend-proj/",
    },

    {
      image: myPortfolio,
      name: t("projects.myPortfolio.name"),
      brief: t("projects.myPortfolio.brief"),
      repoLink: "https://github.com/AtamanchukM/Atamanchuk",
      visitSite: "https://atamanchukm.github.io/Atamanchuk/",
    },
    {
      image: booxExchange,
      name: t("projects.booxExchange.name"),
      brief: t("projects.booxExchange.brief"),
      repoLink: "https://github.com/AtamanchukM/book-exchange",
    },
  ]);

  return (
    <section
      id="project"
      className="flex flex-col items-center w-full min-h-screen py-20 m-auto max-w-7xl dark:bg-second-dark-bg dark:text-text-dark "
    >
      <FadeInSection>
        <div className="w-full mx-auto ">
          <h2 className="mb-20 text-5xl text-center">{t("projects.title")}</h2>

          <div className="flex flex-col gap-10">
            {project.map((item, index) => (
              <FadeRightSection key={index}>
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 items-center`}
                >
                  <div className="flex-2 ">
                    <div className="relative w-full h-full overflow-hidden rounded-lg group ">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col justify-center flex-1 gap-4">
                    <h3 className="text-3xl font-bold">{item.name}</h3>
                    <p className="text-lg text-gray-300">{item.brief}</p>
                    <div className="flex gap-4">
                      <a
                        href={item.repoLink}
                        className="px-6 py-2 bg-[#D4C4A8] text-black font-bold rounded hover:shadow-lg transition"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
                      </a>
                      {item.visitSite && (
                        <a
                          href={item.visitSite}
                          className="px-6 py-2 border-2 border-[#D4C4A8] text-[#D4C4A8] font-bold rounded hover:bg-[#D4C4A8] hover:text-black transition"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </FadeRightSection>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
