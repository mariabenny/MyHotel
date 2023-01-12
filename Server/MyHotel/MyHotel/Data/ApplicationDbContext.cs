using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MyHotel.Models;

namespace MyHotel.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
          : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            //builder.Entity<Invoice>()
            //.HasOne(m => m.Payment)
            //.WithMany(m => m.PaymentInvoice)
            //.OnDelete(DeleteBehavior.NoAction);

            //builder.Entity<Invoice>()
            //.HasOne(m => m.Booking)
            //.WithMany(m => m.BookingInvoice)
            //.OnDelete(DeleteBehavior.NoAction);

            builder.Entity<Booking>()
                .HasOne(m => m.Payment)
                .WithOne(m => m.Book)
                .OnDelete(DeleteBehavior.NoAction);

        }




        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        public DbSet<Booking> Bookings { get; set; }

        public DbSet<Room> Rooms { get; set; }

        public DbSet<Feedback> Feedbacks { get; set; }

        public DbSet<Payment> Payments { get; set; }

    }
}
