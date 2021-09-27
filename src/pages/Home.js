import { Link } from "react-router-dom";
import './Home.css';

function Home(){
    return (
        <div className="home">
            <h1 className="titleh">Página principal</h1>
            <a className="bottom"><Link to="/portafolio">Portafolio</Link></a>
            
        </div>
       
    );
}

export default Home;