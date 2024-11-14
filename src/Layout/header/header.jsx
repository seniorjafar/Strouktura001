import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";



export function Header() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('eng');

  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  function handleChange(e) {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
    localStorage.setItem('lang', e.target.value);
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <header className="sticky top-0 flex items-center justify-between bg-white p-4 shadow-md dark:bg-gray-900">
          
          <div className="flex items-center">
              <h1 className={`flex items-center text-3xl ${isOpen ? 'hidden' : 'block'} `}>Brend</h1>
            </div>
          <nav className="flex justify-between">
            <div className="relative 2lg:hidden">
      <button
        type="button"
        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={toggleNavbar}
      >
        <span className="absolute -inset-0.5"></span>
        <span className="sr-only">Open main menu</span>

        <svg className={`block h-6 w-6 ${isOpen ? 'hidden' : ''}`} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        <svg className={`block h-6 w-6 ${isOpen ? '' : 'hidden'}`} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <div className={`2lg:hidden   ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="grid justify-center space-y-1 px-2 pb-3 pt-2">
          <NavLink to={"/"} href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">
            <span>{t('Home')}</span>
          </NavLink>
          <NavLink to={"/about"} href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">
            <span>{t('about')}</span>
          </NavLink>
          <NavLink to={"/products"} href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">
            <span>{t('products')}</span>
          </NavLink>
          <NavLink to={"/downloads"} href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">
            <span>{t('downloads')}</span>
          </NavLink>
          <NavLink to={"/contact"} href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">
            <span>{t('contact')}</span>
          </NavLink>
        </div>
      </div>
    </div>
            <ul className="hidden 2lg:flex items-center justify-center gap-6">
              <li>
                <NavLink to={"/"}
                  className="text-lg font-medium text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                >
                  <span>{t('Home')}</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/about"}
                  className="text-lg font-medium text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                >
                  <span>{t('About')}</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/products"}
                  className="text-lg font-medium text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                >
                  <span>{t('Products')}</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/downloads"}
                  className="text-lg font-medium text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                >
                  <span>{t('Downloads')}</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}
                  className="text-lg font-medium text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                >
                  <span>{t('Contact')}</span>
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className={`flex gap-3 ${isOpen ? 'hidden' : 'block'}`}>
            <button
              onClick={toggleDarkMode}
              className="flex items-center rounded-lg bg-gray-200 px-3 py-2 text-black transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            >
              {darkMode ? (
                <>
                  <FaSun />
                </>
              ) : (
                <>
                  <FaMoon />
                </>
              )}
            </button>
            <div className=" inline-flex rounded-md shadow-sm" role="group">
                <button
                  value="uz"
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-gray-500 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-500 dark:focus:text-white"
                  onClick={handleChange}
                >
                  Uzb
                </button>
                <button
                  value="ru"
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-gray-500 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-500 dark:focus:text-white"
                  onClick={handleChange}
                >
                  Rus
                </button>
                <button
                  value="eng"
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-gray-500 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-500 dark:focus:text-white"
                  onClick={handleChange}
                >
                  Eng
                </button>
            </div>
            {/* <select onChange={handleChange} value={lang} className="form-select">
              <option value="uz">Uzbek</option>
              <option value="ru">Russian</option>
              <option value="eng">USA</option>
            </select> */}
          </div>
        </header>


      </div>
    </>
  );
};
