// CSS
import './Premios.css';

// IMAGEM
import imgPremio1 from '../../assets/img/premios/image1.svg';
import imgPremio2 from '../../assets/img/premios/image2.svg';
import imgPremio3 from '../../assets/img/premios/image3.svg';
import imgPremio4 from '../../assets/img/premios/image4.svg';
import imgPremio5 from '../../assets/img/premios/image5.svg';

// TRADUÇÃO
import { useTranslation } from 'react-i18next'

function Premios(){
    const { t } = useTranslation();

    return(
        <>
            <div id="divPremios">
                <div id="txtPremios">
                    <h2>{t("Premios.titulo")}</h2>
                    <p>{t("Premios.txtPremios")}</p>
                </div>
                <div id='imgPremios'>
                    <img src={imgPremio1} alt="Imagem Premio" />
                    <img src={imgPremio2} alt="Imagem Premio" />
                    <img src={imgPremio3} alt="Imagem Premio" />
                    <img src={imgPremio4} alt="Imagem Premio" />
                    <img src={imgPremio5} alt="Imagem Premio" />
                </div>
            </div>
        </>
    )
}

export default Premios;