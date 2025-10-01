import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next'

// CSS
import './Header.css'
// ICONES
import { MdMenu, MdClose } from 'react-icons/md';
// IMAGEM





function Header() {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);

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
            <div id="containerMobile">
                <div id="divbtnMenuHeader">
                    <div id="logo">
                        <p>Abreu & Lima</p>
                        <p>Advogados</p>
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
                            <li>INICIO</li>
                            <li>QUEM SOMOS</li>
                            <li>CONTATOS</li>
                            <li>ÁREAS DE ATUAÇÃO</li>
                            <li>
                                <select id='selecMobile'>
                                    <option value="">PT-BR</option>
                                    <option value="">EN</option>
                                    <option value="">ES</option>
                                </select>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </>
    )
}

export default Header;