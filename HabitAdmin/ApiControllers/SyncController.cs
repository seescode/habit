using HabitAdmin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HabitAdmin.ApiControllers
{
    public class SyncController : ApiController
    {
        // GET api/<controller>
        public List<HabitModel> Get()
        {
            //This will return a full list of habits.

            List<HabitModel> model = new List<HabitModel>();

            var habitModel = new HabitModel();
            habitModel.StateText = new string[3];
            habitModel.StateText[0] = "1";
            habitModel.StateText[1] = "2";
            habitModel.StateText[2] = "3";
            model.Add(habitModel);

            var habitModel2 = new HabitModel();
            habitModel2.StateText = new string[3];
            habitModel2.StateText[0] = "4";
            habitModel2.StateText[1] = "5";
            habitModel2.StateText[2] = "6";
            model.Add(habitModel2);

            return model;
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
            //This will take in a diff of new data for all the habits.


        }
    }
}