import prem1 from '../../assets/img/prem1.svg';
import prem2 from '../../assets/img/prem2.svg';
import prem3 from '../../assets/img/prem3.svg';
import prem4 from '../../assets/img/prem4.svg';
import prem5 from '../../assets/img/prem5.svg';
import './Premios.css';
import { useTranslation } from 'react-i18next';

function Premios() {
    const {t, i18n} = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <>
            <section id='premios'>
                <h2>{t("premios.titulo")}</h2>
                <p>{t("premios.txt")}</p>
                <div id="imgPremios">
                    <div id='scrollLinear'>
                        <img src={prem1} alt="" />
                        <img src={prem2} alt="" />
                        <img src={prem3} alt="" />
                        <img src={prem4} alt="" />
                        <img src={prem5} alt="" />

                        <img src={prem1} alt="" />
                        <img src={prem2} alt="" />
                        <img src={prem3} alt="" />
                        <img src={prem4} alt="" />
                        <img src={prem5} alt="" />

                        <img src={prem1} alt="" />
                        <img src={prem2} alt="" />
                        <img src={prem3} alt="" />
                        <img src={prem4} alt="" />
                        <img src={prem5} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Premios;