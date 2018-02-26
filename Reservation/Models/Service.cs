using System;
using System.ComponentModel.DataAnnotations;

namespace Reservation.Models
{
    public class Service
    {
        public int ID { get; set; }
        [Required]
        public string Title { get; set; }
        // public Admin CreatedBy { get; set; }
        [Required]
        public decimal Price { get; set; }
        [Required]
        public decimal Duration { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}