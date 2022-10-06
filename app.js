const cargarPeliculas = async () => {
  try {
    const respuesta = await fetch(
      "https://api.themoviedb.org/3/movie/550?api_key=858744fc3a30dc03e67454b1158f5b72&language=es-MX"
    );
    console.log(respuesta);

    const datos = await respuesta.json()
    console.log(datos);

  } catch (error) {
    console.log(error);
  }
};

cargarPeliculas();
