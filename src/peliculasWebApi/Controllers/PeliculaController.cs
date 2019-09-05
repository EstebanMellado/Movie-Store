using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using peliculasWebApi.Data;
using peliculasWebApi.Models;

namespace peliculasWebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class PeliculaController : ControllerBase
    {
        private PeliculaContext _context;

        public PeliculaController(PeliculaContext context)
        {
            _context = context;

            if(_context.Peliculas.Count() == 0)
            {
                _context.Peliculas.Add(new Pelicula { Nombre = "Prueba", Estado = EstadoEnum.Normal });
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<Pelicula> GetAll()
        {
            return _context.Peliculas.AsNoTracking().ToList();
        }
        
        [HttpGet("{id}", Name = "GetPelicula")]
        public IActionResult GetById(long id)
        {
            var pelicula = _context.Peliculas.FirstOrDefault(p => p.Id == id);
            if (pelicula == null)
            {
                return NotFound();
            }

            return new ObjectResult(pelicula);
        }

        [HttpPost]
        public IActionResult Create([FromBody]Pelicula pelicula)
        {
            if(pelicula == null)
            {
                return BadRequest();
            }

            _context.Peliculas.Add(pelicula);
            _context.SaveChanges();

            return CreatedAtRoute("GetPelicula", new { id = pelicula.Id }, pelicula);
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody]Pelicula peliculaNew)
        {
            if(peliculaNew == null || peliculaNew.Id != id)
            {
                return BadRequest();
            }

            var peliculaOld = _context.Peliculas.FirstOrDefault(p => p.Id == id);
            if(peliculaOld == null)
            {
                return NotFound();
            }

            peliculaOld.Nombre = peliculaNew.Nombre;
            peliculaOld.Estado = peliculaNew.Estado;
            peliculaOld.Imagen = peliculaNew.Imagen;
            peliculaOld.Resumen = peliculaNew.Resumen;
            peliculaOld.PeliculaActor = peliculaNew.PeliculaActor;
            peliculaOld.Anio = peliculaNew.Anio;
            peliculaOld.Genero = peliculaNew.Genero;

            _context.Peliculas.Update(peliculaOld);
            _context.SaveChanges();

            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var peli = _context.Peliculas.FirstOrDefault(p => p.Id == id);
            if(peli == null)
            {
                return NotFound();
            }

            peli.Estado = EstadoEnum.Eliminado;
            _context.Peliculas.Update(peli);
            _context.SaveChanges();

            return new NoContentResult();
        }
    }
}