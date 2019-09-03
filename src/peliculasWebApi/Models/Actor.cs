using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace peliculasWebApi.Models
{
    public class Actor
    {
        public long Id { get; set; }
        public EstadoEnum Estado { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Foto { get; set; }
    }
}
