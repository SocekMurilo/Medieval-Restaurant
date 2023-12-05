using System.Threading.Tasks;

namespace Back.Services;

using System.Collections.Generic;
using DTO;
using Model;

public interface IProductService
{
    Task Create(ProductDataRegister data);
    // Task Remove(ProductDataRegister data);
    Task<List<Product>> GetProducts();
}