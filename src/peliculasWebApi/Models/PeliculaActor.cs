using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace peliculasWebApi.Models
{
    public class PeliculaActor
    {
        public long Id { get; set; }
        public long PeliculaId { get; set; }
        public long ActorId { get; set; }

        public Pelicula Pelicula { get; set; }
        public Actor Actor { get; set; }
    }
}
