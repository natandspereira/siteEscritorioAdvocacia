import banner from "../../assets/img/banner.svg"
import './Banner.css';


function Banner() {
    return (
        <>
            <section id="imgBanner">
                <img src={banner} alt="Banner" />
            </section>
        </>
    )
}

export default Banner;