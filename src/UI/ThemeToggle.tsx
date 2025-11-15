import { useState, useEffect } from "react"
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
// localStorage.theme === "dark" ||
//     (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
export default function ThemeToggle() {
    

    
    const savedDarkTheme = localStorage.getItem('darkTheme') === 'true' ;

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
        <div className=" dark:text-text-dark flex justify-center items-center max-w-5 w-full max-h-5 h-full ">
            <button
                id="darktheme-toggle"
                className="dark_theme_input cursor-pointer text-lg  md:text-sm lg:text-lg"
                onClick={toggleTheme}
                aria-label="Toggle Dark Mode" >
                {darkTheme ? <FaMoon className="    "/> : <FaSun className=" " />}
            </button>

        </div>
    )
}
