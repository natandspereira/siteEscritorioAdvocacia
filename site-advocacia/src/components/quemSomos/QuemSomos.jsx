import './QuemSomos.css'
import imgQS from '../../assets/img/img_qs.svg';


function QuemSomos() {
    return (
        <>
            <div id="divQS">
                <div id="imgQS">
                    <img src={imgQS} alt="" />
                </div>
                <div id="txtQS">
                    <h2>QUEM SOMOS</h2>
                    <p>
                        Com uma trajetória marcada pela excelência e pelo compromisso inabalável com a justiça, nosso escritório consolidou-se como referência no cenário jurídico nacional. Ao longo dos anos, construímos uma reputação sólida baseada na ética, no profissionalismo e na capacidade de entregar resultados consistentes para clientes de diferentes portes e segmentos.
                        Nossa atuação é pautada por uma visão moderna do Direito, que alia tradição e inovação para oferecer soluções jurídicas estratégicas e eficazes. Contamos com uma equipe multidisciplinar de advogados experientes e altamente especializados, preparados para lidar com os desafios mais complexos, sempre com foco em proteger os interesses de nossos clientes e assegurar a melhor tomada de decisão.
                    </p>
                </div>
            </div>
        </>
    )
}

export default QuemSomos;