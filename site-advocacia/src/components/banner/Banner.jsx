import './Banner.css';
import banner from '../../assets/img/banner.svg';


function Banner(){
    return(
        <>
         <div id="banner">
            <img src={banner} alt="Imagem do Banner" />
         </div>
        </>
    )
}

export default Banner;