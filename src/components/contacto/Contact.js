import './Contact.css';



function Contact(){
    return(
        
       <div className="contacto">
           <h3 className="titulo">Información de Contacto</h3><i class="fas fa-id-badge"></i>
           <ul className="contacto__info">
            <li>Fecha de nacimiento:16-enero-2004</li>
            <li>Ciudad: Bogotá D.C</li>
            <li>Email: sdvargas52@misena.edu.co</li>
            <li>Número de celular: 3059132630</li>
           </ul>
           <h3 className="titulo">Referencias familiares</h3>
           <ul className="contacto__info">
            <li>Magdalena Del Pilar Sáenz</li>
            <li>Email: pilarinsaenz@hotmail.com</li>
            <li>Número de celular: 3115354175</li>
            
            <li>Yaneth Rocio Saenz</li>
            <li>Email: yaneth_R@gmail.com</li>
            <li>Número de celular: 3118672249</li>
           </ul>
       </div>

    );
}

export default Contact;