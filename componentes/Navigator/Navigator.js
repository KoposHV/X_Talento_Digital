import "./Navigator.css";

const template = () => {
    return `
    <div class="container">
     <a href="https://portalentodigital.fundaciononce.es/"><img class="fundacion" src="/images/fundacion once.png"/></a>
    
     

    <div class="rrss">
     <a href="https://es-es.facebook.com/"><img class="facebook" src="/iconos/facebook.png"/></a>

     <a href="https://twitter.com/?lang=es"><img class="twitter" src="/iconos/twitter.png"/></a>

     <a href="https://www.youtube.com/"><img class="youtube" src="/iconos/youtube.png"/></a>

     <a href="https://www.instagram.com/"><img class="instagram" src="/iconos/instagram.png"/></a>

     <a href="https://es.linkedin.com/"><img class="linkedIn" src="/iconos/linkedin.png"/></a>
     </div>
     <img class="grupo" src="/images/grupo social once.png"/>
    </div>


    <nav>
     <ul>
      <li>
       <a href="#null" id="¿qué es XTD?-link">¿Qué es XTD?</a>
      </li>
      <li>
       <a href="#null" id="cursos-link">Cursos</a>
      </li>
    <li>
      <a href="#null" id="becas-link">Becas</a>
    </li>
    <li>
      <a href="#null" id="blog-link">Blog</a>
    </li>
    <li>
      <a href="#null" id="alumni-link">Alumni</a>
    </li>
    <li>
      <a href="#null" id="colaboradores-link">Colaboradores</a>
    </li>
   </ul>
  </nav>
    `;
};
const Navigator = () => {
    document.querySelector("header").innerHTML = template();
  };
  
  export default Navigator;