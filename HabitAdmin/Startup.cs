using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(HabitAdmin.Startup))]
namespace HabitAdmin
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
