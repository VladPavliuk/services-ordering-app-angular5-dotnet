using System;

namespace Reservation.Models
{
    public class Order
    {
        public int ID { get; set; }
        
        public User User_ID { get; set; }

        public Organization Organization_ID { get; set; }

        public Service Service_ID { get; set; }
    }
}