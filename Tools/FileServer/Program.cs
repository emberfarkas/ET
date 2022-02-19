using System;
using System.IO;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;


namespace ETFileServer
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var config = new ConfigurationBuilder()
               .SetBasePath(Directory.GetCurrentDirectory())
               .AddJsonFile("appsettings.json", true)
               .Build();
            WebHost.CreateDefaultBuilder(args)
                .UseConfiguration(config)
                .UseUrls(config["urls"])
                .UseStartup<Startup>()
                .Build()
                .Run();
        }
    }
}