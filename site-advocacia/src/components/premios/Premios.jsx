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

  const premios = [imgPremio1, imgPremio2, imgPremio3, imgPremio4, imgPremio5];

  return (
    <div id="divPremios">
      <div id="txtPremios">
        <h2>{t("Premios.titulo")}</h2>
        <p>{t("Premios.txtPremios")}</p>
      </div>

      <div className="premios-viewport">
        <div className="premios-track">
          {[...Array(4)].map((_, round) => (
            <div className="premios-group" key={round}>
              {premios.map((img, i) => (
                <img key={`${round}-${i}`} src={img} alt="Imagem Premio" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Premios;