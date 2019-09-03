using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace peliculasWebApi.Models
{
    public class PeliculaGenero
    {
        public long Id { get; set; }
        public long PeliculaId { get; set; }
        public long GeneroId { get; set; }


        public Pelicula Pelicula { get; set; }
        public Genero Genero { get; set; }
    }
}
