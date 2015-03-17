using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HabitAdmin.Models
{
    public class HabitModel
    {
        public string[] StateText { get; set; }
        public int Index { get; set; }
        public HashSet<DateTime> CompletionDates { get; set; }
    }
}