using System;

namespace Reservation.Requests {
    public class OrderCreateRequest
    {
        public int Organization_ID { get; set; }
        public int Service_ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public decimal Price { get; set; }
        public double Duration { get; set; }
        public DateTime StartedAt { get; set; }
    }
}