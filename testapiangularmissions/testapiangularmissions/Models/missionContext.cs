using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace testapiangularmissions.Models
{
    public class missionContext :DbContext
    {
        public missionContext(DbContextOptions<missionContext> options) :base(options)
        {

        }
        public DbSet<missionModel> mission { get; set; }
    }
}
