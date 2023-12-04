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
    // [HttpGet]
    // [EnableCors("DefaultPolicy")]
    // public async Task<IActionResult> Login(
    //     [FromBody]UserData user,
    //     [FromServices]IUserService service,
    //     [FromServices]ISecurityService security,
    //     [FromServices]CryptoService crypto)
    // {
    //     var loggedUser = await service
    //         .GetByLogin(user.Username);
    //     // System.Console.WriteLine(loggedUser);
    //     if (loggedUser == null)
    //         return Unauthorized("Usuário não existe.");
       
    //     var password = await security.HashPassword(
    //         user.Password, loggedUser.Salt
    //     );
    //     //  System.Console.WriteLine(password);
    //     var realPassword = loggedUser.Password;
    //     if (password != realPassword)
    //         return Unauthorized("Incorrect Password.");
        
    //     var jwt = crypto.GetToken(new {
    //         id = loggedUser.Iduser,
    //         isAdm = loggedUser.IsAdm
    //     });
        
    //     return Ok(new { jwt });
    // }
}