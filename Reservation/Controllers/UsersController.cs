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
    public class UsersController : Controller
    {
        private readonly ReservationDbContext dbContext;

        public UsersController()
        {
            this.dbContext = new ReservationDbContext();
        }

        public IEnumerable<User> index()
        {
            return dbContext
                .User
                .ToList();
        }
    }
}