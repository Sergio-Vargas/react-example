import './Header.css';
import foto from './foto.jpg';


function Header(){
    return(
        <header>
        <div className="header">
            <div >
                <img className="header-foto" src={foto} alt="" />
                <div className="header-me">
                <h2 className="header-name">SERGIO DAVID VARGAS SÁENZ</h2>
                <p>Desarrollador web</p>
            </div>
            </div>
        </div>
              
        </header>

    );
}

export default Header;