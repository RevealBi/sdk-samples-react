using Reveal.Sdk;
using System;
using System.IO;
using System.Threading.Tasks;

namespace Reveal.WebApi.Server.Reveal
{
    public class SdkContext : RevealSdkContextBase
    {
        public override Task<Dashboard> GetDashboardAsync(string dashboardId)
        {
            Dashboard dashboard = null;
            var path = Path.Combine(Environment.CurrentDirectory, $"Dashboards/{dashboardId}.rdash");
            using (var stream = new FileStream(path, FileMode.Open))
            {
                dashboard = new Dashboard(stream);
            }

            return Task.FromResult(dashboard);            
        }

        public override Task SaveDashboardAsync(string userId, string dashboardId, Dashboard dashboard)
        {
            return Task.CompletedTask;
        }
    }
}
