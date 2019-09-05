using System.Collections.Generic;

namespace peliculasWebApi.Models
{
    public class Pelicula
    {
        public long Id { get; set; }
        public EstadoEnum Estado { get; set; }
        public string Nombre { get; set; }
        public string Imagen { get; set; }
        public string Resumen { get; set; }
        public ICollection<PeliculaActor> PeliculaActor { get; set; }
        public int Anio { get; set; }
        public Genero Genero { get; set; }
    }
}
