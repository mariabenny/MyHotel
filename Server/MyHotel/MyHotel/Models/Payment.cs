using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyHotel.Models
{
    public class Payment
    {
        public int Id { get; set; }

        public ApplicationUser Customer { get; set; }
        [ForeignKey(nameof(Customer))]
        public string CustomerId { get; set; }

        //public Room Rooms { get; set; }
        //[ForeignKey(nameof(Rooms))]
        //public int RoomId { get; set; }

        public Booking Book { get; set; }
        [ForeignKey(nameof(Book))]
        public int BookId { get; set; }

        [Required]


        public int Amount { get; set; }

        [Required]
        public string CardHolder { get; set; }

        [Required]
        public CardType CardType { get; set; }

        [Required]
        public string CardNumber { get; set; }

        [Required]

        public string ExpiryDate { get; set; }

        [Required]
        public string CVV { get; set; }

    }
}
