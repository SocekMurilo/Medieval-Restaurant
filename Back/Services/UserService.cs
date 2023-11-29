using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Back.Services;

using DTO;
using Model;

public class UserService : IUserService
{
    RestaurantMedievalDbContext ctx;
    ISecurityService security;
    public UserService(RestaurantMedievalDbContext ctx, ISecurityService security)
    {
        this.ctx = ctx;
        this.security = security;
    }

    public async Task Create(UserDataRegister data)
    {
        User user = new User();
        var salt = await security.GenerateSalt();

        user.Name = data.Name;
        user.Password = await security.HashPassword(
            data.Password, salt
        );  

        user.Salt = salt;
        user.Email = data.Email;
        user.Cpf = data.Cpf;
        user.IsAdm = data.IsAdm;

        this.ctx.Add(user);
        await this.ctx.SaveChangesAsync();
    }
    public async Task Login(UserData data)
    {
        User user = new User();
        var salt = await security.GenerateSalt();

        user.Name = data.Login;
        user.Password = await security.HashPassword(
            data.Password, salt
        );  
        user.IsAdm = data.IsAdm;
        user.Salt = salt;

        this.ctx.Add(user);
        await this.ctx.SaveChangesAsync();
    }

    public async Task<User> GetByLogin(string login)
    {
        var query =
            from user in this.ctx.Users
            where user.Name == login
            select user;
        
        return await query.FirstOrDefaultAsync();
    }
}