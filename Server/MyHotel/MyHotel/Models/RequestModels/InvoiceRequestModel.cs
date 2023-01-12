using System.ComponentModel.DataAnnotations;

namespace MyHotel.Models.RequestModels
{
    public class InvoiceRequestModel
    {
        [StringLength(15)]
        public string FirstName { get; set; }

        [StringLength(15)]
        public string LastName { get; set; }
        public int Amount { get; set; }
        public string CardHolder { get; set; }
        public CardType CardType { get; set; }
        public string CardNumber { get; set; }

        public DateTime CheckIn { get; set; }

        public DateTime CheckOut { get; set; }

        public Guests Guest { get; set; }
        public NoRooms NoRoom { get; set; }


    }
}
