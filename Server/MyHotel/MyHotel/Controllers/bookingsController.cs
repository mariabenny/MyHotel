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


        /// <summary>
        /// Displays the rooms for a customer.
        /// </summary>
        /// <returns>Returns the list of rooms</returns>

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


        /// <summary>
        /// Displays the bookings to admin
        /// </summary>
        /// <returns>Returns the list of booking</returns>

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


        /// <summary>
        /// Display the room with corresponding id
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Returns the room with the given id</returns>
        [HttpGet("rooms")]

        public async Task<ActionResult> FindRoom(int id)

        {
            var roomId = _db.Rooms.Where(i => i.Id == id).FirstOrDefault();
            return Ok(new ResponseModel<Room>()
            {
                Data = roomId
            });
        }


        /// <summary>
        /// Room Booking for customer
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>


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





        /// <summary>
        /// Payment by Customer
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>

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




        /// <summary>
        /// Generating Invoice
        /// </summary>
        /// <param name="Id"></param>
        /// <returns>   Returns invoice with details</returns>

        [HttpGet("invoice")]
        public async Task<IActionResult> Invoice(int Id)
        {
            Console.WriteLine(Id);
            var bill = _db.Payments
                .Include(m => m.Book)
                .Where(m => m.Id == Id).ToList();

            return Ok(bill);
        }





        /// <summary>
        /// Feedback from Customer
        /// </summary>
        /// <param name="feedback"></param>
        /// <returns></returns>
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

