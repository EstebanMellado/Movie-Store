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
    [Route("api/[controller]")]
    [ApiController]
    public class GeneroController : ControllerBase
    {
        private readonly PeliculaContext _context;

        public GeneroController(PeliculaContext context)
        {
            _context = context;
        }

        // GET: api/Genero
        [HttpGet]
        public IEnumerable<Genero> GetGeneros()
        {
            return _context.Generos;
        }

        // GET: api/Genero/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetGenero([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var genero = await _context.Generos.FindAsync(id);

            if (genero == null)
            {
                return NotFound();
            }

            return Ok(genero);
        }

        // PUT: api/Genero/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGenero([FromRoute] long id, [FromBody] Genero genero)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != genero.Id)
            {
                return BadRequest();
            }

            _context.Entry(genero).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GeneroExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Genero
        [HttpPost]
        public async Task<IActionResult> PostGenero([FromBody] Genero genero)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Generos.Add(genero);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGenero", new { id = genero.Id }, genero);
        }

        // DELETE: api/Genero/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGenero([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var genero = await _context.Generos.FindAsync(id);
            if (genero == null)
            {
                return NotFound();
            }

            genero.Estado = EstadoEnum.Eliminado;
            _context.Generos.Update(genero);
            await _context.SaveChangesAsync();

            return Ok(genero);
        }

        private bool GeneroExists(long id)
        {
            return _context.Generos.Any(e => e.Id == id);
        }
    }
}