import './Header.css';

function Header() {
    return (
        <div className="container">
            <nav>
                <label>
                    <p>Abreu & Lima</p>
                    <p>Advogados</p>
                </label>

                <ul>
                    <li>INÍCIO</li>
                    <li>QUEM SOMOS</li>
                    <li>CONTATOS</li>
                    <li>ÁREAS DE ATUAÇÃO</li>
                    <li>PT-BR</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;