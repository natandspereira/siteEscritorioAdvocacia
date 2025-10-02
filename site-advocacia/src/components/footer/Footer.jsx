// CSS
import './Footer.css';

// ICONES
import { FaInstagramSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';

// TRADUÇÃO
import { useTranslation } from 'react-i18next';


function Footer() {
    const { t } = useTranslation();

    return (
        <>
            <div id="divFooter">
                <div id="logoFooter">
                    <p>{t("Footer.logo")}</p>
                    <p>{t("Footer.subLogo")}</p>
                </div>
                <div id="txtFooter">
                    <p>{t("Footer.txtFooter")}</p>
                </div>
                <div id="redesSociais">
                    <FaInstagramSquare className='icon' color='white' />
                    <FaFacebookSquare className='icon' color='white' />
                    <BsYoutube className='icon' color='white' />
                </div>
            </div>
        </>
    )
}

export default Footer;