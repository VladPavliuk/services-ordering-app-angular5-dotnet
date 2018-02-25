using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Reservation.Models;
using System;
using Microsoft.EntityFrameworkCore;

namespace Reservation.Controllers
{   
    [Route("api/[controller]")]
    public class OrganizationsController : Controller
    {
        private readonly ReservationDbContext dbContext;

        public OrganizationsController()
        {
            this.dbContext = new ReservationDbContext();
        }

        [HttpPost("pin-service/{organizationId}/{serviceId}")]
        public IActionResult PinService(int organizationId, int serviceId)
        {
            Organization organization = dbContext.Organization.FirstOrDefault(t => t.ID == organizationId);
            Service service = dbContext.Service.FirstOrDefault(t => t.ID == serviceId);

            if(organization == null || service == null) {
                return NotFound();
            } 

            OrganizationServiceRelation organizationServiceRelation = new OrganizationServiceRelation() {
                Organization_ID = organization,
                Service_ID = service,
                Price = service.Price,
                Duration = service.Duration
            };

            dbContext.OrganizationServiceRelation.Add(organizationServiceRelation);
            dbContext.SaveChanges();

            return new ObjectResult(organizationServiceRelation);
        } 

        [HttpDelete("unpin-service/{organizationId}/{serviceId}")]
        public IActionResult UnpinService(int organizationId, int serviceId)
        {
            Organization organization = dbContext.Organization.FirstOrDefault(t => t.ID == organizationId);
            Service service = dbContext.Service.FirstOrDefault(t => t.ID == serviceId);

            if(organization == null || service == null) {
                return NotFound();
            } 

            dbContext.OrganizationServiceRelation.RemoveRange(
                dbContext.OrganizationServiceRelation.Where(t => t.Organization_ID == organization && t.Service_ID == service)
            );
            dbContext.SaveChanges();
            return Ok();
        }

        [HttpGet("{id}/available-services")]
        public IEnumerable<Service> OtherSerivcesInOrganization(int id)
        {
            Organization organization = dbContext.Organization.FirstOrDefault(t => t.ID == id);

            if(organization == null) {
                return Enumerable.Empty<Service>();
            }

            return dbContext.Service
                .Where(t => !dbContext.OrganizationServiceRelation
                    .Any(b => t.ID == b.Service_ID.ID && organization == b.Organization_ID))
                .ToList();
        }

        [HttpGet("{id}/services-list")]
        public IEnumerable<OrganizationServiceRelation> ServicesList(int id)
        {
            Organization organization = dbContext.Organization.FirstOrDefault(t => t.ID == id);

            if(organization == null) {
                return Enumerable.Empty<OrganizationServiceRelation>();
            }

            return dbContext.OrganizationServiceRelation
                .Include(t => t.Service_ID)
                .Include(t => t.Organization_ID)
                .Where(b => b.Organization_ID == organization)
                .ToList();
        }

        [HttpGet]
        public IEnumerable<Organization> GetAll()
        { 
            return this.dbContext.Organization.ToList();
        }

        [HttpPost]
        public bool Create([FromBody] Organization organization)
        {
            dbContext.Organization.Add(organization);
            dbContext.SaveChanges();

            return true;
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] Organization organization)
        {
            var organizationToUpdate = dbContext.Organization.FirstOrDefault(t => t.ID == id);
            if (organizationToUpdate == null)
            {
                return NotFound();
            }

            organizationToUpdate.Title = organization.Title;
            organization.ID = (int) id;

            dbContext.Organization.Update(organizationToUpdate);
            dbContext.SaveChanges();

            return new ObjectResult(organization);
        }

        [HttpGet("{id}")]
        public Organization GetById(long id)
        {
            return dbContext.Organization.FirstOrDefault(t => t.ID == id);
        }

        [HttpDelete("{id}")]
        public bool Delete(long id)
        {
            var organization = dbContext.Organization.FirstOrDefault(t => t.ID == id);
            if (organization == null)
            {
                return false;
            }

            dbContext.Organization.Remove(organization);
            dbContext.SaveChanges();
            return true;
        }
    }
}