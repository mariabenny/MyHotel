using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyHotel.Data;
using MyHotel.Models;

namespace MyHotel.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
  

    public class RoomsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RoomsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]

        [Authorize]
        public async Task<ActionResult<IEnumerable<Room>>> GetRooms()
        {
            return await _context.Rooms.ToListAsync();
        }



        [HttpGet("bookings")]

        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<IEnumerable<Booking>>> GetBooking()
        {
            return await _context.Bookings.ToListAsync();
        }





        [HttpGet("{RoomType}")]
        public async Task<ActionResult<Room>> GetRoom(string type)
        {
            var room = await _context.Rooms.FindAsync(type);

            if (room == null)
            {
                return NotFound();
            }

            return room;
        }

  

        [HttpPut("{id}")]
        public async Task<IActionResult> PutRoom(int id, Room room)
        {
            if (id != room.Id)
            {
                return BadRequest();
            }

            _context.Entry(room).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RoomExists(id))
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

//ADMIN ADD ROOMS

        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<Room>> PostRoom(Room room)
        {
            _context.Rooms.Add(room);
            await _context.SaveChangesAsync();
            return Ok(room);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRoom(int id)
        {
            var room = await _context.Rooms.FindAsync(id);
            if (room == null)
            {
                return NotFound();
            }

            _context.Rooms.Remove(room);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RoomExists(int id)
        {
            return _context.Rooms.Any(e => e.Id == id);
        }


        
    }
}
