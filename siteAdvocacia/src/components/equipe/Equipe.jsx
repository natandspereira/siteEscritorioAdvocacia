import './Equipe.css';
import ana from '../../assets/img/equipe/ana.svg';
import flavia from '../../assets/img/equipe/flavia.svg';
import marcelo from '../../assets/img/equipe/marcelo.svg';
import maria from '../../assets/img/equipe/maria.svg';
import pedro from '../../assets/img/equipe/pedro.svg';


function Equipe(){
    return(
        <>
        <div id="containerEquipe">
            <div id='titleEquipe'>
                <h2>Equipe</h2>
            </div>
            <div id="imgEquipe">
                <div><img src={ana} alt="img de ana" /></div>
                <div><img src={flavia} alt="img de flavia" /></div>
                <div><img src={marcelo} alt="img de marcelo" /></div>
                <div><img src={maria} alt="img de maria" /></div>
                <div><img src={pedro} alt="img de pedro" /></div>
            </div>
        </div>
        </>
    )
}

export default Equipe;