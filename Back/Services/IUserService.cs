using System.Threading.Tasks;

namespace Back.Services;

using DTO;
using Model;

public interface IUserService
{
    Task Create(UserDataRegister data);
    Task Login(UserData data);
    Task<User> GetByLogin(string login);
}