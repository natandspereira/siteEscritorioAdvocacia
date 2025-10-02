// CSS
import './QuemSomos.css'

// IMAGEM
import imgQS from '../../assets/img/img_qs.svg';

// TRADUÇÃO
import { useTranslation } from 'react-i18next'

function QuemSomos() {
    const { t } = useTranslation();
    return (
        <>
            <div id="divQS">
                <div id="imgQS">
                    <img src={imgQS} alt="" />
                </div>
                <div id="txtQS">
                    <h2>{t("QS.titulo")}</h2>
                    <p>{t("QS.txtQS")}</p>
                </div>
            </div>
        </>
    )
}

export default QuemSomos;