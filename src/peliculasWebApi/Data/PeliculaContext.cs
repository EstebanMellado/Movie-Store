using Microsoft.EntityFrameworkCore;
using peliculasWebApi.Models;

namespace peliculasWebApi.Data
{
    public class PeliculaContext: DbContext
    {
        public PeliculaContext(DbContextOptions<PeliculaContext> options) : base(options)
        {

        }

        public DbSet<Pelicula> Peliculas { get; set; }
        public DbSet<Actor> Actores { get; set; }
        public DbSet<Genero> Generos { get; set; }
    }
}
