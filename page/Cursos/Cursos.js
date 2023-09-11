import "./Cursos.css";

const template = () => {
    return `
    <section class="cursos">
     <h1>Cursos de formación</h1>
      <div class="curso1">
       <button class="btn1">INSCRÍBETE</button>
       <h3 class="fecha1">Inscripción hasta el 31 de Dic de 2023</h3>
       <h2 class="nombre1">Prepárate para el mundo digital</h2>
       <div class="detalles1">
        <p class="lugar"><strong>Lugar:</strong> Zona Embajadores (Madrid)</p>
        <div class="duracion1">
        <p class="duracion1"><strong>Duración:</strong></p>
        <p class="duracion1"><strong>Plazas:</strong></p>
        <p class="duracion1"><strong>Modalidad:</strong> Presencial</p>
        </div>
       </div>          
       
       


      </div>
    </section>
    
    
    
    
    `;
};

const Cursos = () => {
    document.querySelector("main").innerHTML = template();
  };
  
  export default Cursos;