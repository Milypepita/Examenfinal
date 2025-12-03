async function obtenerAnimales(){
    let respuesta = await fetch("http://localhost:3000/animales");
    let data = await respuesta.json();
    console.log("Animales recibidos:", data);}

obtenerAnimales();