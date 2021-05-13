using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;

namespace Reveal.WebApi.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DashboardsController
    {
        [HttpGet]
        [Route("Names")]
        public string[] GetNames()
        {
            var path = Path.Combine(Environment.CurrentDirectory, "Dashboards");
            var dashboards = Directory.GetFiles(path);

            var names = new List<string>();
            foreach (var dashboard in dashboards)
            {
                var name = Path.GetFileNameWithoutExtension(dashboard);
                names.Add(name);
            }

            return names.ToArray();
        }

        [HttpGet]
        public FileContentResult Get(string name)
        {            
            string mimeType = "application/octet-stream";

            var path = Path.Combine(Environment.CurrentDirectory, $"Dashboards/{name}.rdash");

            byte[] byteArr = File.ReadAllBytes(path);

            return new FileContentResult(byteArr, mimeType)
            {
                FileDownloadName = name
            };
        }
    }
}
