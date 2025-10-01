import './Footer.css';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';

function Footer() {
    return (
        <>
            <div id="divFooter">
                <div id="logoFooter">
                    <p>Abreu e Lima</p>
                    <p>Advogados</p>
                </div>
                <div id="txtFooter">
                    <p>Abreu & Lima Advogados. Todos os direitos reservados</p>
                </div>
                <div id="redesSociais">
                    <FaInstagramSquare size={15} color='white' />
                    <FaFacebookSquare size={15} color='white' />
                    <BsYoutube size={15} color='white' />
                </div>
            </div>
        </>
    )
}

export default Footer;