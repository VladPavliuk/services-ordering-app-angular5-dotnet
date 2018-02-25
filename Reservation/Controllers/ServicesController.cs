using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Reservation.Models;
using System;

namespace Reservation.Controllers
{   
    [Route("api/[controller]")]
    public class ServicesController : Controller
    {
        private readonly ReservationDbContext dbContext;

        public ServicesController()
        {
            this.dbContext = new ReservationDbContext();
        }

        [HttpGet]
        public IEnumerable<Service> GetAll()
        { 
            return this.dbContext.Service.ToList();
        }

        [HttpPost]
        public bool Create([FromBody] Service service)
        {
            service.CreatedAt = DateTime.Now;

            dbContext.Service.Add(service);
            dbContext.SaveChanges();

            return true;
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] Service service)
        {
            var serviceToUpdate = dbContext.Service.FirstOrDefault(t => t.ID == id);
            if (serviceToUpdate == null)
            {
                return NotFound();
            }

            serviceToUpdate.Title = service.Title;
            service.ID = (int) id;

            dbContext.Service.Update(serviceToUpdate);
            dbContext.SaveChanges();

            return new ObjectResult(service);
        }

        [HttpGet("{id}")]
        public Service GetById(long id)
        {
            return dbContext.Service.FirstOrDefault(t => t.ID == id);
        }

        [HttpDelete("{id}")]
        public bool Delete(long id)
        {
            var service = dbContext.Service.FirstOrDefault(t => t.ID == id);
            if (service == null)
            {
                return false;
            }

            dbContext.Service.Remove(service);
            dbContext.SaveChanges();
            return true;
        }
    }
}