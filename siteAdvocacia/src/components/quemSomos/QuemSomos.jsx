import quemSomos from '../../assets/img/imgQuemSomos.svg';
import './QuemSomos.css';
import { useTranslation } from "react-i18next";

function QuemSomos() {
  const { t } = useTranslation();

  return (
    <section id="quemSomos">
      <div id="imgQuemSomos">
        <img src={quemSomos} alt="Quem Somos" />
      </div>
      <div id="txtQuemSomos">
        <h2>{t("quem-somos.titulo")}</h2>
        <p>{t("quem-somos.txt")}</p>
      </div>
    </section>
  );
}

export default QuemSomos;
