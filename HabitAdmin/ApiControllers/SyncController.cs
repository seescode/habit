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

                    model.Habits.ForEach(n => n.CompletionDates = null);
                }
            }

            return model;
        }

        // POST api/<controller>
        public void Post(HabitDataModel habitDataModel)
        {
            if (habitDataModel == null)
            {
                return;
            }

            using (var store = new DocumentStore
            {
                Url = "http://localhost:8451/",
                DefaultDatabase = "Habit"
            }.Initialize())
            {
                using (var session = store.OpenSession())
                {
                    HabitDataModel updateModel = session.Load<HabitDataModel>("habits/1");   

                    var model =                                   
                            from newInfo in habitDataModel.Habits                            
                            join existingInfo in updateModel.Habits
                            on newInfo.Id equals existingInfo.Id
                            let completionDates = newInfo.CompletionDates ?? new List<DateTime>()
                            select new HabitModel()
                            {                        
                                Id = existingInfo.Id,
                                CompletionDates = existingInfo.CompletionDates.Union(completionDates).ToList(),
                                StateText = existingInfo.StateText,
                                Index = newInfo.Index
                            };

                    updateModel.Habits = model.ToList();
                 
                    session.SaveChanges();
                }
            }


        }
    }
}