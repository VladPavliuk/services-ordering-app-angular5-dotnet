using System;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Reservation.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Reservation.Requests;

namespace Reservation.Controllers
{   
    [Route("api/[controller]")]
    public class OrdersController : Controller
    {
        private readonly ReservationDbContext dbContext;

        public OrdersController()
        {
            this.dbContext = new ReservationDbContext();
        }

        [HttpPost]
        public IActionResult makeOrder([FromBody] OrderCreateRequest order)
        {
            User user = dbContext.User.FirstOrDefault(t => t.Phone == order.Phone);

            if (user == null) {
                dbContext.User.Add(new User(){ FirstName = order.FirstName, LastName = order.LastName, Phone = order.Phone});
                dbContext.SaveChanges();

                user = dbContext.User.FirstOrDefault(t => t.Phone == order.Phone);
            } 

            Organization organization = dbContext.Organization.FirstOrDefault(t => t.ID == order.Organization_ID);
            Service service = dbContext.Service.FirstOrDefault(t => t.ID == order.Service_ID);

            if(organization == null || service == null) {
                return NotFound();
            } 

            dbContext.Order.Add(new Order() { 
                Organization_ID = organization,
                Service_ID = service,
                Price = order.Price,
                User_ID = user,
                StartedAt = order.StartedAt,
                EndedAt = order.StartedAt.AddMinutes(order.Duration),
            });
            dbContext.SaveChanges();
            
            return Ok();
        }

        public IEnumerable<Order> index()
        {
            return dbContext
                .Order
                .Include(t => t.Service_ID)
                .Include(t => t.Organization_ID)
                .Include(t => t.User_ID)
                .OrderByDescending(t => t.EndedAt)
                .ToList();
        }
    }
}