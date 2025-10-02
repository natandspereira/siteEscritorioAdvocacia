// CSS
import './Equipe.css';

// IMAGEM
import ana from '../../assets/img/equipe/ana.svg'
import flavia from '../../assets/img/equipe/flavia.svg'
import marcelo from '../../assets/img/equipe/marcelo.svg'
import maria from '../../assets/img/equipe/maria.svg'
import pedro from '../../assets/img/equipe/pedro.svg'

// TRADUÇÃO
import { useTranslation } from 'react-i18next';

function Equipe() {
    const { t } = useTranslation();

    return (
        <>
            <div id="divEquipe">
                <h2>{t("Equipe.titulo")}</h2>
                <div id="imgEquipe">
                    <img src={ana} alt="Imagem de Ana" />
                    <img src={flavia} alt="Imagem de Flavia" />
                    <img src={marcelo} alt="Imagem de Marcelo" />
                    <img src={maria} alt="Imagem de Maria" />
                    <img src={pedro} alt="Imagem de Pedro" />
                </div>
            </div>
        </>
    )
}

export default Equipe;