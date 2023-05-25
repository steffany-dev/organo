// Importando o arquivo CSS
import './Banner.css'

function Banner() {
    // JSX (parecido com HTML)
    return (
        // class é uma palavra reservada no JS então precisa ser className
        <header className="banner">
            <img src="/imagens/banner.png" alt="Banner principal da página da Organo" />
        </header>
    )
}

export default Banner;