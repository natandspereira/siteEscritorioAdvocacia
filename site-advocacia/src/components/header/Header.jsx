import { useState, useRef, useEffect } from 'react';

// CSS
import './Header.css'

// ICONES
import { MdMenu, MdClose } from 'react-icons/md';

// TRADUCAO
import { useTranslation } from 'react-i18next'

function Header() {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [language, setLanguage] = useState('');
    const navRef = useRef(null);

    function handleFunction(e) {
        const LANG = e.target.value;
        setLanguage(LANG);
        i18n.changeLanguage(LANG);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        }

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [menuOpen]);

    return (
        <>
            {/* MOBILE */}
            <div id="containerMobile">
                <div id="divbtnMenuHeader">
                    <div id="logo">
                        <p>{t("header.logo")}</p>
                        <p>{t("header.subLogo")}</p>
                    </div>
                    <button id='btnMenuHeader' onClick={() => setMenuOpen(true)}>
                        <MdMenu size={40} color="#333" />
                    </button>
                </div>

                {menuOpen && (
                    <nav id='navMobile' ref={navRef}>
                        <button id='btnCloseMenuHeader' onClick={() => setMenuOpen(false)}>
                            <MdClose size={30} />
                        </button>

                        <ul>
                            <li>{t("header.inicio")}</li>
                            <li>{t("header.quemSomos")}</li>
                            <li>{t("header.contatos")}</li>
                            <li>{t("header.areasAtuacao")}</li>
                            <li>
                                <select id='selecMobile' value={language} onChange={handleFunction}>
                                    <option value="pt">PT-BR</option>
                                    <option value="en">EN</option>
                                    <option value="es">ES</option>
                                </select>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>

            {/* DESKTOP */}
            <div id="divDesktop">
                <div id="logoDesktop">
                    <p>{t("header.logo")}</p>
                    <p>{t("header.subLogo")}</p>
                </div>
                <nav id='navDesktop'>
                    <ul>
                        <li>{t("header.inicio")}</li>
                        <li>{t("header.quemSomos")}</li>
                        <li>{t("header.contatos")}</li>
                        <li>{t("header.areasAtuacao")}</li>
                        <li>
                            <select id='selectDesktop' value={language} onChange={handleFunction}>
                                <option value="pt">PT-BR</option>
                                <option value="en">EN</option>
                                <option value="es">ES</option>
                            </select>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header;