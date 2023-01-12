using System.ComponentModel.DataAnnotations.Schema;

namespace MyHotel.Models.RequestModels
{
    public class PaymentRequestModel
    {

        public string CustomerId { get; set; }

        public int BookId { get; set; }
        public int Amount { get; set; }
        public string CardHolder { get; set; }
        public CardType CardType { get; set; }
        public string CardNumber { get; set; }

        public string ExpiryDate { get; set; }
        public string CVV { get; set; }


    }
}
