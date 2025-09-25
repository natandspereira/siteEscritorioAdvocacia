import './Atuacao.css'



function Atuacao() {
    return (
        <>
            <div id="container">
                <div id='atuacao'>
                    <h2>ÁREAS DE ATUAÇÃO</h2>
                    <p>
                        Atuamos de forma estratégica e personalizada em diversas áreas do Direito, oferecendo soluções jurídicas eficazes para pessoas físicas e jurídicas. Nosso compromisso é com a excelência, ética e agilidade na defesa dos interesses de nossos clientes.
                    </p>
                </div>
                <div id='divAtuacao'>
                    <div className="areas">Direito Cívil</div>
                    <div className="areas">Direito trabalhista</div>
                    <div className="areas">Direito Empresarial</div>
                    <div className="areas">Direito Tributario</div>
                    <div className="areas">Direito Familia</div>
                    <div className="areas">Direito Penal</div>
                </div>
            </div>
        </>
    )
}

export default Atuacao;