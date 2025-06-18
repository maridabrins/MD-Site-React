import './style.css'
import Logo from '../../assets/react.svg'
const Header = () => {
    return(
        <header>
            <h1>Aprendendo <span>ReactJS </span> 
            <img src={Logo} alt= "Logo azul do react"/>
            </h1>
            <p>Desenvolva suas habilidades de forma moderna e prática</p>
        </header>
    )
}
export default Header