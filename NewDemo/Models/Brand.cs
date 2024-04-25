using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace NewDemo.Models
{
    public class Brand
    {
        public int Id { get; set; }

        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? Gender { get; set; }

    }
    public class BrandContext : DbContext
    {
        public BrandContext()
        {

        }
        public BrandContext(DbContextOptions<BrandContext> options)
        : base(options)
        {
        }

        // Define DbSet properties for your entities
        public DbSet<Brand> Brands { get; set; }
    }
}
