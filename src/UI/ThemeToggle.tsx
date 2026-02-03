import { useState, useEffect } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import "../styles/ThemeToggle.css";

export default function ThemeToggle() {
  const savedDarkTheme = localStorage.getItem("darkTheme") === "true";

  const [darkTheme, setDarkTheme] = useState(savedDarkTheme);
  const body = document.body;

  useEffect(() => {
    if (darkTheme) {
      body.classList.add("dark");
      body.classList.remove("light");
      document.querySelector("body")?.setAttribute("data-theme", "dark");
    } else {
      body.classList.add("light");
      body.classList.remove("dark");
      document.querySelector("body")?.setAttribute("data-theme", "light");
    }
    localStorage.setItem("darkTheme", String(darkTheme));
  }, [darkTheme, body.classList]);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className="flex items-center justify-center ">
      <label className="theme-toggle-switch">
        <input
          type="checkbox"
          checked={darkTheme}
          onChange={toggleTheme}
          aria-label="Toggle Dark Mode"
        />
        <div className="toggle-slider">
          <div className="toggle-icon sun-icon">
            <FaSun />
          </div>
          <div className="toggle-icon moon-icon">
            <FaMoon />
          </div>
        </div>
      </label>
    </div>
  );
}
