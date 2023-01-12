using System.ComponentModel.DataAnnotations;

namespace MyHotel.Models
{

    public class Room
    {
        public int Id { get; set; }

        [Required]
        public string RoomNo { get; set; }

        [Required]
        public string FloorNo { get; set; }

        [Required]
        public string RoomType { get; set; }

        [Required]
        public string BedType { get; set; }

        [Required]

        public int RoomCount { get; set; }

        [Required]
        public string RoomRate { get; set;}

        //public IEnumerable<Invoice> InvoiceDetails { get; set; }
    }
}
