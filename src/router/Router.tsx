import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import App from "../App";

function LanguageWrapper() {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const validLangs = ["en", "ua"];

    if (lang && validLangs.includes(lang)) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    } else {
      const savedLang = localStorage.getItem("i18nextLng") || "en";
      const defaultLang = validLangs.includes(savedLang) ? savedLang : "en";
      navigate(`/${defaultLang}`, { replace: true });
    }
  }, [lang, i18n, navigate]);

  return <App />;
}

export default function Router() {
  return (
    <BrowserRouter basename="/Atamanchuk">
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/:lang/*" element={<LanguageWrapper />} />
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
