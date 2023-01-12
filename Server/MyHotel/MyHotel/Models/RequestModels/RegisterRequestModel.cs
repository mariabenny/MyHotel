using System.ComponentModel.DataAnnotations;
using System.Data;

namespace MyHotel.Models.RequestModels
{
    public class RegisterRequestModel
    {
        [Required]
        [StringLength(15)]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [Required]
        [StringLength(15)]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }

        [Required]
        [StringLength(50)]
        [Display(Name = "Email")]
        public string Email { get; set; }
        
        
        [Required]
        [Display(Name = "Age")]

        public int Age { get; set; }

        [Required]
        [Display(Name = "Contact Number")]

        public string PhoneNumber { get; set; }

        [Required]
        public string Aadhar { get; set; }

        [Required]
        [StringLength(25)]
        [Display(Name = "Password")]
        public string Password { get; set; }

    }
}
