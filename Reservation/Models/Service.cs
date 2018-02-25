using System;

namespace Reservation.Models
{
    public class Service
    {
        public int ID { get; set; }
        public string Title { get; set; }
        // public Admin CreatedBy { get; set; }
        public decimal Price { get; set; }
        public decimal Duration { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}