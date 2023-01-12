using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace MyHotel.Models
{
    public class ApplicationUser : IdentityUser
    {
        [StringLength(15)]
        [Required]
        public string FirstName { get; set; }

        [StringLength(15)]
        [Required]
        public string LastName { get; set; }

        [Required]
        public int Age { get; set; }

        [Required]

        public string Aadhar { get; set; }

        [Required]

        public IEnumerable<Booking> Bookings { get; set; }

    }
}
