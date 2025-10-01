import './Premios.css';

import imgPremio1 from '../../assets/img/premios/image1.svg';
import imgPremio2 from '../../assets/img/premios/image2.svg';
import imgPremio3 from '../../assets/img/premios/image3.svg';
import imgPremio4 from '../../assets/img/premios/image4.svg';
import imgPremio5 from '../../assets/img/premios/image5.svg';

function Premios(){
    return(
        <>
            <div id="divPremios">
                <div id="txtPremios">
                    <h2>NOSSOS PRÊMIOS</h2>
                    <p>Dedicação que leva a excelência.</p>
                </div>
                <div id='imgPremios'>
                    <img src={imgPremio1} alt="" />
                    <img src={imgPremio2} alt="" />
                    <img src={imgPremio3} alt="" />
                    <img src={imgPremio4} alt="" />
                    <img src={imgPremio5} alt="" />
                </div>
            </div>
        </>
    )
}

export default Premios;