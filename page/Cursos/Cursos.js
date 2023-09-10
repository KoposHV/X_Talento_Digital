import "./Cursos.css";

const template = () => {
    return `
    <section class="cursos">
     <h1>Cursos de formación</h1>
      <div class="curso1">
       <h3 class="fecha1">Inscripción hasta el 31 de Dic de 2023</h3>
       <h2 class="nombre1">Prepárate para el mundo digital</h2>
       <div class="detalles">
        <p><strong>Lugar:</strong> Zona Embajadores (Madrid)</p>
        <p class="duracion"><strong>Duración:</strong>
           <strong>Plazas:</strong>
           <strong>Modalidad:</strong> Presencial</p>
       </div>          
       
       


      </div>
    </section>
    
    
    
    
    `;
};

const Cursos = () => {
    document.querySelector("main").innerHTML = template();
  };
  
  export default Cursos;