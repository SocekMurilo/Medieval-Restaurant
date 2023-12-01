using System.Threading.Tasks;

namespace Back.Services;

using DTO;
using Model;

public interface IUserService
{
    Task Create(UserDataRegister data);
    Task<User> GetByLogin(string username);
}