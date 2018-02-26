using Microsoft.EntityFrameworkCore;

namespace Reservation.Models
{
    public class ReservationDbContext : DbContext
    {
        //public DbSet<Reservation.Models.Admin> Admin { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<Organization> Organization { get; set; }
        public DbSet<Service> Service { get; set; }
        public DbSet<OrganizationServiceRelation> OrganizationServiceRelation { get; set; }
        public DbSet<Order> Order { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=blogging.db");
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<User>()
                .HasIndex(u => u.Phone)
                .IsUnique();
        }
    }
}