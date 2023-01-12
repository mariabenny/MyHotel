using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyHotel.Models
{

    public class Booking
    {
        public int Id { get; set; }

        [Required]

        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]

        public string Address { get; set; }

        

        public ApplicationUser Customer { get; set; }
        [ForeignKey(nameof(Customer))]
        public string CustomerId { get; set; }

        public Room Rooms { get; set; }
        [ForeignKey(nameof(Rooms))]
        public int RoomId { get; set; }

        [Required]

        public DateTime CheckIn { get; set; }

        [Required]

        public DateTime CheckOut { get; set; }

        [Required]

        public Guests Guest { get; set; }

        [Required]

        public NoRooms NoRoom { get; set; }

        [Required]

        public Payment Payment { get; set; }

    }
}
