import { useTranslation } from "react-i18next";
import { FadeInSection, FadeRightSection } from "../UI/FramerAnimation";

export default function About() {
  const { t } = useTranslation();

  const skills = [
    "Html",
    "CSS",
    "JS",
    "React",
    "Next.js",
    "React-native",
    "Expo",
    "TypeScript",
    "Vite",
    "React Router",
    "Zustand",
    "Responsive Development",
    "Tailwind",
  ];

  return (
    <section
      id="about"
      className="min-h-screen   flex justify-center  pt-30 pb-10 bg-[#F5F5F5] dark:bg-second-dark-bg dark:text-text-dark"
    >
      <FadeInSection>
        <div className="flex flex-col px-4 mx-auto max-w-7xl lg:flex-row">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-5xl">{t("about.title")}</h2>
            <div className="flex flex-col space-y-6">
              <p>{t("about.paragraph1")}</p>
              <p>{t("about.paragraph2")}</p>
              <p>{t("about.paragraph3")}</p>
            </div>
            <div className="">
              <h3 className="mb-2 text-2xl">{t("about.skillsTitle")}</h3>
              <FadeRightSection>
                <ul className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <li
                      key={index}
                      className="px-5 py-2 text-sm bg-white dark:bg-card"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </FadeRightSection>
            </div>
          </div>
          <div className="w-full lg:max-w-[400px] p-10 border-l-6 mt-5 border-[#D4C4A8] dark:border-border-dark h-fit bg-white dark:bg-card space-y-4 flex flex-col ">
            <blockquote className="text-2xl italic">
              {t("about.quote")}
            </blockquote>
            <div className="text-sm text-right text-black/50 dark:text-text-dark/50">
              {t("about.quoteAuthor")}
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
