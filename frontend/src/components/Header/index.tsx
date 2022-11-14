import logo from '../../assets/img/logo.svg'
import "./styles.css"

function Header() {
    return(
        <div className='dsmeta-logo-container'>
            <img src={logo} alt="Logo DSMeta" />
            <h1>DSMeta</h1>

            <p>Desenvolvido por 
                <a href="https://github.com/lucimarNeves/dsmeta-semana-react"> @github/lucimarNeves
                </a>
            </p>
        </div>
    )
}

export default Header