import './Header.css';
import { useTranslation } from "react-i18next";



function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div className="container">
      <nav>
        <label>
          <p>{t("logo.name")}</p>
          <p>{t("logo.subtitle")}</p>
        </label>

        <ul>
          <li>{t("menu-header.home")}</li>
          <li>{t("menu-header.about")}</li>
          <li>{t("menu-header.contact")}</li>
          <li>{t("menu-header.practice")}</li>
          <li>
            <select onChange={(e) => changeLanguage(e.target.value)} id='selectLanguage'>
              <option value="pt">PT-BR</option>
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Header;
