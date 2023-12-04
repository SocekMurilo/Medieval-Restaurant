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

[ApiController]
[Route("user")]
public class UserController : ControllerBase
{
    [HttpPost("login")]
    [EnableCors("DefaultPolicy")]
    public async Task<IActionResult> Login(
        [FromBody]UserData user,
        [FromServices]IUserService service,
        [FromServices]ISecurityService security,
        [FromServices]CryptoService crypto)
    {
        var loggedUser = await service
            .GetByLogin(user.Username);

        if (loggedUser == null)
            return Unauthorized("Usuário não existe.");
       
        var password = await security.HashPassword(
            user.Password, loggedUser.Salt
        );
        //  System.Console.WriteLine(password);
        var realPassword = loggedUser.Password;
        if (password != realPassword)
            return Unauthorized("Incorrect Password.");
        
        var jwt = crypto.GetToken(new {
            id = loggedUser.Iduser,
            isAdm = loggedUser.IsAdm
        });
        
        return Ok(new { jwt });
    }

    [HttpPost("register")]
    [EnableCors("DefaultPolicy")]
    public async Task<IActionResult> Create(
        [FromBody]UserDataRegister user,
        [FromServices]IUserService service)
    {
        var errors = new List<string>();
        if (user is null || user.Name is null)
            errors.Add("You must provide a login.");
        if (user.Name.Length < 5)
            errors.Add("Login must contain at least 5 characters.");

        if (errors.Count > 0)
            return BadRequest(errors);

        await service.Create(user);
        return Ok();
    }

    // [HttpDelete]
    // [EnableCors("DefaultPolicy")]
    // public IActionResult DeleteUser()
    // {
    //     throw new NotImplementedException();
    // }

    // [HttpGet("image")]
    // [EnableCors("DefaultPolicy")]
    // public async Task<IActionResult> GetImage(
    //     int photoId,
    //     [FromServices]ISecurityService security,
    //     [FromServices]RestaurantMedievalDbContext ctx)
    // {
    //     var query =
    //         from image in ctx.Images
    //         where image.Idimage == photoId
    //         select image;
        
    //     var photo = await query.FirstOrDefaultAsync();
    //     if (photo is null)
    //         return NotFound();

    //     return File(photo.Photo, "image/jpeg");
    // }

    // [DisableRequestSizeLimit]
    // [HttpPut("image")]
    // [EnableCors("DefaultPolicy")]
    // public async Task<IActionResult> AddImage(
    //     [FromServices]ISecurityService security
    // )
    // {
    //     var jwtData = Request.Form["jwt"];
    //     var jwtObj = JsonSerializer
    //         .Deserialize<JwtToken>(jwtData);
    //     var jwt = jwtObj.jwt;

    //     var userOjb = await security
    //         .ValidateJwt<JwtPayload>(jwt);
    //     if (userOjb is null)
    //         return Unauthorized();
    //     var userId = userOjb.id;

    //     var files = Request.Form.Files;
    //     if (files is null || files.Count == 0)
    //         return BadRequest();
        
    //     var file = Request.Form.Files[0];
    //     if (file.Length < 1)
    //         return BadRequest();
 
    //     using MemoryStream ms = new MemoryStream();
    //     await file.CopyToAsync(ms);
    //     var data = ms.GetBuffer();

    //     Image img = new Image();
    //     img.Photo = data;

    //     RestaurantMedievalDbContext ctx = new RestaurantMedievalDbContext();
    //     ctx.Add(img);
    //     await ctx.SaveChangesAsync();
        
    //     var query =
    //         from user in ctx.Users
    //         where user.Iduser == userId
    //         select user;
    //     var loggedUser = query.FirstOrDefault();
    //     // loggedUser.Idimage = img.Id;

    //     await ctx.SaveChangesAsync();

    //     return Ok();
    // }

    // [HttpDelete("image")]
    // [EnableCors("DefaultPolicy")]
    // public IActionResult RemoveImage()
    // {
    //     throw new NotImplementedException();
    // }

    // [HttpPost("Prduct")]
    // [EnableCors("DefaultPolicy")]
    // public IActionResult AddProduct()
    // {

    // }
}