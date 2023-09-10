import "./Home.css";

const template = () => {
    return `
   <section class="principal"> 
     <img class="fondo1" src="/images/imagefondo1.jpg" />
     <div class="text1">
      <h4>XTalentoDigital ofrece un curso de programación para personas con autismo</h4>
   </section>
  <section class="info">
   <div class="xtd">
     <h1>¿Qué es el Programa Por Talento Digital?</h1>
     <h2><strong>Por Talento Digital es un programa de formación permanente en competencias digitales y profesiones tecnológicas de la <a href="https://www.fundaciononce.es/es"><u>Fundación ONCE</u></a></strong> orientado a la adquisición de conocimientos y cualificación tecnológica y digital de las personas con discapacidad para favorecer así su inclusión laboral en profesiones con alta demanda en el mercado de trabajo, multiplicando de esta forma sus perspectivas profesionales.</h2>
     </div>
   <div class="becas">
       <img class="convocatoria" src="public/images/II convocatoria.png" />
    <div class="text">
       <h3>II Convocatoria de becas</h3>
       <p>¡Ya se ha abierto la II Convocatoria de becas de formación individual. </p>
       <p><a class="oportunidad" href="https://portalentodigital.fundaciononce.es/convocatoria-de-becas-de-formacion-individual-por-talento-digital"><u>No pierdas la oportunidad!</u></a></p>
    </div> 

   </div>
  </section>
     


    
    `;
    
  };
  
  const Home = () => {
    document.querySelector("main").innerHTML = template();
  };
  
  export default Home;