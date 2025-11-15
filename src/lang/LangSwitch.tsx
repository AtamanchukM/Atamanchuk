import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

export default function LangSwitch() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const changeLanguage = (lng: string) => {
    // Оновлюємо URL
    const currentPath = location.pathname;
    const newPath = currentPath.replace(/^\/(en|ua)/, `/${lng}`);
    
    navigate(newPath);
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center md:gap-2 px-2  lg:pl-4 pr-4 ">
      <button
        onClick={() => changeLanguage('en')}
        className={`lg:px-3 px-1 pt-1 text-sm font-medium transition-colors duration-200 ${
          i18n.language === 'en'
            ? 'text-[#D4C4A8] font-bold'
            : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-gray-300 dark:text-gray-600 ">|</span>
      <button
        onClick={() => changeLanguage('ua')}
        className={`lg:px-3 px-1 pt-1 text-sm font-medium transition-colors duration-200 ${
          i18n.language === 'ua'
            ? 'text-[#D4C4A8] font-bold'
            : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
        }`}
        aria-label="Switch to Ukrainian"
      >
        UA
      </button>
    </div>
  );
}
