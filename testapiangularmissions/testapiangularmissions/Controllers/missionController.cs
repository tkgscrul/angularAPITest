using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using testapiangularmissions.Models;

namespace testapiangularmissions.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class missionController : ControllerBase
    {
        private readonly missionContext _context;

        public missionController(missionContext context)
        {
            _context = context;
        }

        // GET: api/mission
        [HttpGet]
        public IEnumerable<missionModel> Getmission()
        {
            return _context.mission;
        }

        // GET: api/mission/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetmissionModel([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var missionModel = await _context.mission.FindAsync(id);

            if (missionModel == null)
            {
                return NotFound();
            }

            return Ok(missionModel);
        }

        // PUT: api/mission/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutmissionModel([FromRoute] int id, [FromBody] missionModel missionModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != missionModel.id)
            {
                return BadRequest();
            }

            _context.Entry(missionModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!missionModelExists(id))
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

        // POST: api/mission
        [HttpPost]
        public async Task<IActionResult> PostmissionModel([FromBody] missionModel missionModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.mission.Add(missionModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetmissionModel", new { id = missionModel.id }, missionModel);
        }

        // DELETE: api/mission/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletemissionModel([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var missionModel = await _context.mission.FindAsync(id);
            if (missionModel == null)
            {
                return NotFound();
            }

            _context.mission.Remove(missionModel);
            await _context.SaveChangesAsync();

            return Ok(missionModel);
        }

        private bool missionModelExists(int id)
        {
            return _context.mission.Any(e => e.id == id);
        }
    }
}