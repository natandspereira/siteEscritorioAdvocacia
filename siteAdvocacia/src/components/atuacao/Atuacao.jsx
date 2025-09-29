import './Atuacao.css'
import { useTranslation } from 'react-i18next';


function Atuacao() {
    const {t, i18n} = useTranslation();

    return (
        <>
            <div id="container">
                <div id='atuacao'>
                    <h2>{t("atuacao.titulo")}</h2>
                    <p>{t("atuacao.txt")}</p>
                </div>
                <div id='divAtuacao'>
                    <div className="areas">{t("atuacao.direitoCivil")}</div>
                    <div className="areas">{t("atuacao.direitoTrabalhista")}</div>
                    <div className="areas">{t("atuacao.direitoEmpresarial")}</div>
                    <div className="areas">{t("atuacao.direitoTributario")}</div>
                    <div className="areas">{t("atuacao.direitoFamilia")}</div>
                    <div className="areas">{t("atuacao.direitoPenal")}</div>
                </div>
            </div>
        </>
    )
}

export default Atuacao;