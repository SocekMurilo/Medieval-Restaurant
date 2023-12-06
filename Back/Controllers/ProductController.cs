using System;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Back.Controllers;

using Trevisharp.Security.Jwt;

using DTO;
using Model;
using Services;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Validations;
using Microsoft.EntityFrameworkCore.Storage;

[ApiController]
[Route("product")]
public class ProductController : ControllerBase
{
    [HttpPost]
    [EnableCors("DefaultPolicy")]
    public async Task<IActionResult> Create(
        [FromBody]ProductDataRegister product,
        [FromServices]IProductService service)
    {  
        var errors = new List<string>();
        if (product is null || product.Name is null)
            errors.Add("You Product is Invalid");
        if (product.Name.Length < 3 || product.Description.Length < 5)
            errors.Add("Product must contain at least 5 characters.");

        if (errors.Count > 0)
            return BadRequest(errors);

        await service.Create(product);
        return Ok();

    }
    [HttpGet]
    [EnableCors("DefaultPolicy")]
    public async Task<IActionResult> Get(
        [FromServices]IProductService service)
        {
            var product = await service.GetProducts();

            var errors = new List<string>();
            if (errors.Count > 0)
                return BadRequest(errors);

            return Ok(product);
        }
}