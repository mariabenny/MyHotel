using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyHotel.Data;
using MyHotel.Models;
using MyHotel.Models.RequestModels;
using System.Drawing;
using System;
using System.Security.Claims;
using MyHotel.Models.ResponseModel;
using Microsoft.AspNetCore.Authorization;
using System.Data;

namespace MyHotel.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

   

    public class BookingsController : Controller
    {
        private readonly ApplicationDbContext _db;


        public BookingsController(ApplicationDbContext db)

        {

            _db = db;

        }

       
        [HttpGet]
        [Authorize(Roles = "User")]
        public async Task<ActionResult> GetRooms()

        {
            var rooms = await _db.Rooms.ToListAsync();
            return Ok(new ResponseModel<IEnumerable<Room>>()
            {
                Data = rooms
            });
        }

        [HttpGet("customer-bookings")]

        public async Task<IActionResult> ViewBooking()
        {
            var cid = HttpContext.User.FindFirstValue("UserId");
            var booking = _db.Bookings.Where(i => i.CustomerId == cid).FirstOrDefault();
            return Ok(new ResponseModel<Booking>()
            {
                Data = booking
            });
        }

        [HttpGet("rooms")]

        public async Task<ActionResult> FindRoom(int id)

        {
            var roomId = _db.Rooms.Where(i => i.Id == id).FirstOrDefault();
            return Ok(new ResponseModel<Room>()
            {
                Data = roomId
            });
        }

        [HttpPost]

        [Authorize(Roles = "User")]
        public async Task<IActionResult> Booking(BookingRequestModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var booking = new Booking()
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                Address = model.Address,
                CheckIn = model.CheckIn,
                CheckOut = model.CheckOut,
                Guest = model.Guest,
                NoRoom = model.NoRoom,
                CustomerId = model.CustomerId,
                RoomId = model.RoomId

            }; 


            //logic

            var currentBooking = _db.Bookings
            .Where(b => b.RoomId == booking.RoomId)
            .Where(b => (booking.CheckIn >= b.CheckOut && booking.CheckIn >= b.CheckIn))
            .FirstOrDefault();



            if (currentBooking != null)
            {
                
                return Ok(new ResponseModel<Booking>()
                {
                    Message = "The Room is already out on that date.",
                    Success = false
                });
            }



            _db.Bookings.Add(booking);
            await _db.SaveChangesAsync();

            return Ok(new ResponseModel<Booking>()
            {
                Data = booking
            });
        }

       

        [HttpPost("payment")]

        [Authorize(Roles = "User")]
        public async Task<IActionResult> Payment(PaymentRequestModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var payment = new Payment()
            {



                CustomerId = model.CustomerId,
                BookId= model.BookId,
                Amount = model.Amount,
                CardHolder = model.CardHolder,
                CardNumber = model.CardNumber,
                CardType = model.CardType,
                CVV= model.CVV,
                ExpiryDate= model.ExpiryDate



            };
            await _db.Payments.AddAsync(payment);
            await _db.SaveChangesAsync();
            return Ok(new ResponseModel<string>
            {
                
                Message = "Payment Successful",
            });



        }


        // [HttpGet("Invoice")]
        // public async Task<IActionResult> Invoice()
        // {
        //var bill = await _db.Payments.Include(i => i.Book).Where(i => i.Id == _db.Payments.BookId).FindAsyncAll();
        //return Ok(bill);



        // }


        [HttpGet("invoice")]
        public async Task<IActionResult> Invoice(int Id)
        {
            Console.WriteLine(Id);
            var bill = _db.Payments
                .Include(m => m.Book)
                .Where(m => m.Id == Id).ToList();

            return Ok(bill);
        }


        [HttpPost("feedback")]

        [Authorize(Roles = "User")]
        public async Task<ActionResult<Feedback>> Feedback(Feedback feedback)
        {
            _db.Feedbacks.Add(feedback);
            await _db.SaveChangesAsync();



            return CreatedAtAction("Feedback", new { id = feedback.Id }, feedback);
        }






    }
}

