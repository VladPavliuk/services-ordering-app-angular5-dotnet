using Microsoft.EntityFrameworkCore;

namespace Reservation.Models
{
    public class ReservationDbContext : DbContext
    {
        // public ReservationDbContext (DbContextOptions<ReservationDbContext> options)
        //     : base(options)
        // {
        // }

        //public DbSet<Reservation.Models.Admin> Admin { get; set; }
        public DbSet<Reservation.Models.User> User { get; set; }
        public DbSet<Reservation.Models.Organization> Organization { get; set; }
        public DbSet<Reservation.Models.Service> Service { get; set; }
        public DbSet<Reservation.Models.OrganizationServiceRelation> OrganizationServiceRelation { get; set; }
        public DbSet<Reservation.Models.Order> Order { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=blogging.db");
        }
    }
}