using System;
using System.ComponentModel.DataAnnotations;

namespace Reservation.Models
{
    public class Organization
    {
        public int ID { get; set; }
        [Required]
        public string Title { get; set; }
        //public Admin CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}