import { useState, useEffect } from "react"
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
    const savedDarkTheme = localStorage.getItem('darkTheme') === 'true';

    const [darkTheme, setDarkTheme] = useState(savedDarkTheme);
    const body = document.body;

    useEffect(() => {
        if (darkTheme) {
            body.classList.add('dark');
            body.classList.remove('light');
            document.querySelector("body")?.setAttribute("data-theme", "dark");
        } else {
            body.classList.add('light');
            body.classList.remove('dark');
            document.querySelector("body")?.setAttribute("data-theme", "light");
        }
        localStorage.setItem("darkTheme", darkTheme);
    }, [darkTheme, body.classList]);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    return (
        <div className="dark_mode">
            <button
                id="darktheme-toggle"
                className="dark_theme_input cursor-pointer"
                onClick={toggleTheme}
                aria-label="Toggle Dark Mode" >
                {darkTheme ? <FaMoon /> : <CiSun />}
            </button>

        </div>
    )
}
