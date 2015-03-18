using HabitAdmin.Models;
using Raven.Client.Document;
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
        public HabitDataModel Get()
        {
            HabitDataModel model = new HabitDataModel();

            using (var store = new DocumentStore
            {
                Url = "http://localhost:8451/",
                DefaultDatabase = "Habit"
            }.Initialize())
            {
                using (var session = store.OpenSession())
                {
                    model = session.Load<HabitDataModel>("habits/1");
                }
            }

            return model;
        }

        // POST api/<controller>
        public void Post(HabitDataModel habitDataModel)
        {
            //This will take in a diff of new data for all the habits.
            Console.WriteLine(habitDataModel);

            using (var store = new DocumentStore
            {
                Url = "http://localhost:8451/",
                DefaultDatabase = "Habit"
            }.Initialize())
            {
                using (var session = store.OpenSession())
                {
                    HabitDataModel updateModel = session.Load<HabitDataModel>("habits/1");   

                    for (int i = 0; i < updateModel.Habits.Count; i++)
                    {
                        //TODO: so habitDataModel's and updateModel's CompletionDates
                        //could be null.  I need to handle making them not be null to 
                        //get this code to work.  Also need to test that the HashSet is
                        //working by preventing duplicate dates.

                        if (habitDataModel.Habits[i].CompletionDates == null)
                        {
                            continue;
                        }
                        
                        foreach (var newDate in habitDataModel.Habits[i].CompletionDates)
	                    {
                            if (updateModel.Habits[i].CompletionDates == null)
                            {
                                updateModel.Habits[i].CompletionDates = new HashSet<DateTime>();
                            }

                            updateModel.Habits[i].CompletionDates.Add(newDate);
	                    }
                    }

                    session.SaveChanges();
                }
            }


        }
    }
}