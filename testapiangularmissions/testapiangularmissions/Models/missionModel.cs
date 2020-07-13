using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace testapiangularmissions.Models
{
    public class missionModel
    {
        [Key]
        public int id { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string missionname { get; set; }

        [Required]
        [Column(TypeName = "varchar(8000)")]
        public string misiondescription { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string missiondate { get; set; }
    }
}
