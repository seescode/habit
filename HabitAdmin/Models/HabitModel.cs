using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HabitAdmin.Models
{
    public class HabitModel
    {
        public int Id { get; set; }
        public string[] StateText { get; set; }
        public int Index { get; set; }
        public List<DateTime> CompletionDates { get; set; }
    }
}