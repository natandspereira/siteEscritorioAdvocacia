import './Footer.css'
import instagram from '../../assets/img/redesSociais/instagram.svg'
import facebook from '../../assets/img/redesSociais/facebook.svg'
import youtube from '../../assets/img/redesSociais/youtube.svg'

function Footer(){
    return(
        <>
        <div id="containerFooter">
            <div id="txtLogo">
                <p>Abreu e Lima</p>
                <p>Advogados</p>
            </div>
            <div id="txtDireitos">
                <p>Abreu & lima Advogados. Todos os dirietos reservados</p>
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