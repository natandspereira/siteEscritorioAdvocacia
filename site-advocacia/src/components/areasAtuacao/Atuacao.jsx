// CSS
import './Atuacao.css';

// TRADUÇÃO
import { useTranslation } from 'react-i18next'

function Atuacao() {
    const { t } = useTranslation();

    return (
        <>
            <div id="divAtuacao">
                <div id="txtAtuacao">
                    <h2>{t("Atuacao.titulo")}</h2>
                    <p>{t("Atuacao.txtAtuacao")}</p>
                </div>
                <div id="areas">
                    <div>
                        <p>{t("Atuacao.direitoCivil")}</p>
                    </div>
                    <div>
                        <p>{t("Atuacao.direitoTrabalhista")}</p>
                    </div>
                    <div>
                        <p>{t("Atuacao.direitoEmpresarial")}</p>
                    </div>
                    <div>
                        <p>{t("Atuacao.direitoFamiliar")}</p>
                    </div>
                    <div>
                        <p>{t("Atuacao.direitoTributario")}</p>
                    </div>
                    <div>
                        <p>{t("Atuacao.direitoPenal")}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Atuacao;