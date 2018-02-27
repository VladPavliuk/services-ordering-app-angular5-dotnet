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
            // optionsBuilder.UseSqlite("Data Source=blogging.db");
            // optionsBuilder.UseSqlServer(@"Server=.\;Database=EFCoreWebDemo;Trusted_Connection=True;MultipleActiveResultSets=true");
            optionsBuilder.UseSqlServer(@"Data Source=sql6004.site4now.net; Initial Catalog=DB_A359A7_test;User ID=DB_A359A7_test_admin;Password=qQ!12345");
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<User>()
                .HasIndex(u => u.Phone)
                .IsUnique(true);
        }
    }
}