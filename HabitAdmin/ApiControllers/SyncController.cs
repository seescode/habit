using HabitAdmin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace HabitAdmin.ApiControllers
{
    [EnableCors(origins: "http://localhost:8100", headers: "*", methods: "*")]
    public class SyncController : ApiController
    {
        // GET api/<controller>
        public List<HabitModel> Get()
        {
            //This will return a full list of habits.

            List<HabitModel> model = new List<HabitModel>();

            var habitModel = new HabitModel();
            habitModel.StateText = new string[3];
            habitModel.StateText[0] = "Finish shower";
            habitModel.StateText[1] = "Make one commit";
            habitModel.StateText[2] = "Play game";
            habitModel.Index = 0;
            model.Add(habitModel);

            var habitModel2 = new HabitModel();
            habitModel2.StateText = new string[3];
            habitModel2.StateText[0] = "Finish breakfast";
            habitModel2.StateText[1] = "Eat Vitamin";
            habitModel2.StateText[2] = "No reward";
            habitModel2.Index = 1;
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