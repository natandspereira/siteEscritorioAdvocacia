import './Equipe.css';

import ana from '../../assets/img/equipe/ana.svg'
import flavia from '../../assets/img/equipe/flavia.svg'
import marcelo from '../../assets/img/equipe/marcelo.svg'
import maria from '../../assets/img/equipe/maria.svg'
import pedro from '../../assets/img/equipe/pedro.svg'

function Equipe() {
    return (
        <>
            <div id="divEquipe">
                <h2>EQUIPE</h2>
                <div id="imgEquipe">
                    <img src={ana} alt="" />
                    <img src={flavia} alt="" />
                    <img src={marcelo} alt="" />
                    <img src={maria} alt="" />
                    <img src={pedro} alt="" />
                </div>
            </div>
        </>
    )
}

export default Equipe;