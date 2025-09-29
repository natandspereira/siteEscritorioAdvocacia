import './Footer.css'
import instagram from '../../assets/img/redesSociais/instagram.svg'
import facebook from '../../assets/img/redesSociais/facebook.svg'
import youtube from '../../assets/img/redesSociais/youtube.svg'

import { useTranslation} from 'react-i18next'

function Footer(){
    const { t } = useTranslation();

    return(
        <>
        <div id="containerFooter">
            <div id="txtLogo">
                <p>{t("footer.logo")}</p>
                <p>{t("footer.subLogo")}</p>
            </div>
            <div id="txtDireitos">
                <p>{t("footer.txt")}</p>
            </div>
            <div id="redesSociais">
                <img src={instagram} alt="" />
                <img src={facebook} alt="" />
                <img src={youtube} alt="" />
            </div>
        </div>
        </>
    )
}

export default Footer;