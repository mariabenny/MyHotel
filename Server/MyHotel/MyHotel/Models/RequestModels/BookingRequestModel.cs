using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Xml.Linq;

namespace MyHotel.Models.RequestModels
{
    public class BookingRequestModel
    {
        [Required]
        [StringLength(50)]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [Required]
        [StringLength(50)]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }

        public string CustomerId { get; set; }

        public int RoomId { get; set; }


        [Required]
        [StringLength(100)]
        [Display(Name = "Address")]

        public string Address { get; set; }

        public DateTime CheckIn { get; set; }

        public DateTime CheckOut { get; set; }

        public Guests Guest { get; set; }
        public NoRooms NoRoom { get; set; }
    }
}
