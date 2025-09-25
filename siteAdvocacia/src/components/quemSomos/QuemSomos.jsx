import quemSomos from '../../assets/img/imgQuemSomos.svg';
import './QuemSomos.css';


function QuemSomos() {
    return (
        <>
            <section id="quemSomos">
                <div id="imgQuemSomos">
                    <img src={quemSomos} alt="QuemSomos" />
                </div>
                <div id="txtQuemSomos">
                    <h2>QUEM SOMOS</h2>
                    <p>
                        Com uma trajetória marcada pela excelência e pelo compromisso inabalável com a justiça, nosso escritório consolidou-se como referência no cenário jurídico nacional. Ao longo dos anos, construímos uma reputação sólida baseada na ética, no profissionalismo e na capacidade de entregar resultados consistentes para clientes de diferentes portes e segmentos.
                        Nossa atuação é pautada por uma visão moderna do Direito, que alia tradição e inovação para oferecer soluções jurídicas estratégicas e eficazes. Contamos com uma equipe multidisciplinar de advogados experientes e altamente especializados, preparados para lidar com os desafios mais complexos, sempre com foco em proteger os interesses de nossos clientes e assegurar a melhor tomada de decisão.
                    </p>
                </div>
            </section>
        </>
    )
}

export default QuemSomos;