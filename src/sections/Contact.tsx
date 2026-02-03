import { useTranslation } from "react-i18next";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { FaRegFileAlt } from "react-icons/fa";

import {
  FadeInSection,
  FadeLeftSection,
  FadeRightSection,
} from "../UI/FramerAnimation";

import resume from "../assets/resume.pdf";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="flex justify-center overflow-x-hidden dark:bg-dark-bg dark:text-text-dark py-15"
    >
      <div className="flex flex-col items-center justify-between w-full px-4 max-w-7xl">
        <FadeInSection>
          <div className="flex flex-col items-center gap-4 mb-20 sm:w-xl">
            <h2 className="text-5xl text-center">{t("contact.title")}</h2>
          </div>
        </FadeInSection>
        <div className="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          {/* LinkedIn Card */}
          <FadeLeftSection>
            <a
              href="https://www.linkedin.com/in/maksym-atamanchuk-435a8b352/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F5F5F5] dark:bg-second-dark-bg p-8 flex flex-col gap-4 items-center text-center rounded-lg hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(212,196,168,0.15)] transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-5xl text-[#0A66C2] group-hover:scale-110 transition-transform duration-300">
                <SlSocialLinkedin />
              </div>
              <h3 className="text-2xl font-bold">{t("contact.connect")}</h3>
              <p className="text-black/60 dark:text-text-dark/70">
                {t("contact.connectLinkedIn")}
              </p>
            </a>
          </FadeLeftSection>

          {/* GitHub Card */}
          <FadeInSection>
            <a
              href="https://github.com/Babanadiaa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F5F5F5] dark:bg-second-dark-bg p-8 flex flex-col gap-4 items-center text-center rounded-lg hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(212,196,168,0.15)] transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-5xl text-gray-800 transition-transform duration-300 dark:text-white group-hover:scale-110">
                <FiGithub />
              </div>
              <h3 className="text-2xl font-bold">{t("contact.connect")}</h3>
              <p className="text-black/60 dark:text-text-dark/70">
                {t("contact.followGitHub")}
              </p>
            </a>
          </FadeInSection>

          {/* Resume Card */}
          <FadeRightSection>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F5F5F5] dark:bg-second-dark-bg p-8 flex flex-col gap-4 items-center text-center rounded-lg hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(212,196,168,0.15)] transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-5xl text-[#D4C4A8] group-hover:scale-110 transition-transform duration-300">
                <FaRegFileAlt />
              </div>
              <h3 className="text-2xl font-bold">{t("contact.connect")}</h3>
              <p className="text-black/60 dark:text-text-dark/70">
                {t("contact.downloadResume")}
              </p>
            </a>
          </FadeRightSection>
        </div>
      </div>
    </section>
  );
}
