let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible =  false;
}
window.onscroll = function(){
    efectoHabilidades();
}
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("C");
        habilidades[1].classList.add("SqlServer");
        habilidades[2].classList.add("AspNet");
        habilidades[3].classList.add("AspNetCore");
        habilidades[4].classList.add("ReactJS");
    }
}

document.getElementById('descargarPDF').addEventListener('click', function() {
    // Crear un enlace (a) oculto
    var link = document.createElement('a');
    link.href = './pdf/CV.pdf';  // Reemplaza 'ruta/al/archivo.pdf' con la ruta de tu archivo PDF
    link.download = 'CV-ProgramadorE.pdf';  // Puedes establecer el nombre del archivo de descarga
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});