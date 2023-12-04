using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Back.Services;

using DTO;
using Model;

public class ProductService : IProductService
{
    RestaurantMedievalDbContext ctx;
    public ProductService(RestaurantMedievalDbContext ctx)
    {
        this.ctx = ctx;
    }
    public async Task Create(ProductDataRegister data)
    {
        Product product = new Product();

        product.Name = data.Name;
        product.Description = data.Description;
        product.Value = data.Value;
        product.Type = data.Type;

        this.ctx.Add(product);
        await this.ctx.SaveChangesAsync();
    }

    // public async Task Remove(ProductDataRegister data)
    // {
    //     Product product = product.Idproduct

    //     product.Name = data.Name;
    //     product.Description = data.Description;

    //     this.ctx.Remove(product);
    //     await this.ctx.SaveChangesAsync();
    // }
    
}