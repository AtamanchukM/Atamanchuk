import { useTranslation } from "react-i18next";
import profile_image from "../assets/profile_image.jpg";
import { SlArrowDown } from "react-icons/sl";
import { FadeDownSection } from "../UI/FramerAnimation";

export default function Home() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen pt-20 dark:bg-dark-bg dark:text-text-dark lg:flex-row gap-9 lg:gap-18 "
    >
      <FadeDownSection>
        <div className="flex flex-col items-center justify-center lg:flex-row gap-9 lg:gap-18 ">
          <div className="z-10 flex items-center px-4 overflow-hidden text-center ">
            <img
              loading="lazy"
              className=" mt-20 object-cover w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]  rounded-full   
                          lg:m-0  "
              src={profile_image}
              alt="Profile Image"
            />
          </div>
          <div className="z-10 flex flex-col gap-4 px-4 mb-30">
            <h1 className="text-4xl md:text-5xl lg:text-6xl lg:max-w-w[500px] font-semibold mb-6 pb-2 border-b-2 border-[#D4C4A8] dark:border-border-dark">
              {t("home.name")}
            </h1>
            <p className="text-2xl text-[#675c4a] dark:text-text-dark/90 ">
              {t("home.title")}
            </p>
            <p className="max-w-lg mb-8 text-lg text-black/70 dark:text-text-dark/70 ">
              {t("home.description")}
            </p>
            <div className="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-x-6 sm:space-y-0 ">
              <a
                href="#project"
                className="bg-black dark:bg-card border text-white w-full flex justify-center px-20 sm:px-8 py-4  font-bold sm:text-lg hover:bg-[#D4C4A8] transition  duration-300"
              >
                {t("home.viewWork")}
              </a>
              <a
                href="#contact"
                className="border dark:bg-card border-[#D4C4A8] w-full flex justify-center px-20 sm:px-8 py-4  font-bold sm:text-lg hover:bg-[#D4C4A8] hover:text-white transition duration-300"
              >
                {t("home.getInTouch")}
              </a>
            </div>
          </div>
          <a
            href="#about"
            className="absolute inset-x-0 flex flex-col items-center justify-center space-y-3 bottom-5"
          >
            <span className="tracking-[6px] text-black/70 dark:text-text-dark">
              {t("home.scroll")}
            </span>
            <SlArrowDown className="text-3xl text-black/50 dark:text-text-dark animate-bounce " />
          </a>
        </div>
      </FadeDownSection>
    </section>
  );
}
