import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

export default function LangSwitch() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const changeLanguage = (lng: string) => {
    const currentPath = location.pathname;
    const newPath = currentPath.replace(/^\/(en|ua)/, `/${lng}`);

    navigate(newPath);
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-4 px-4 ">
      <button
        onClick={() => changeLanguage("en")}
        className={` pt-1 text-sm font-medium transition-colors duration-200 ${
          i18n.language === "en"
            ? "text-[#D4C4A8] font-bold"
            : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("ua")}
        className={` pt-1 text-sm font-medium transition-colors duration-200 ${
          i18n.language === "ua"
            ? "text-[#D4C4A8] font-bold"
            : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
        }`}
        aria-label="Switch to Ukrainian"
      >
        UA
      </button>
    </div>
  );
}
