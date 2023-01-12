using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;

namespace MyHotel.Models.RequestModels
{
    public class LoginRequestModel
    {
        [Required]
        [StringLength(50)]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Required]
        [StringLength(25)]
        [Display(Name = "Password")]
        public string Password { get; set; }
    }
}
