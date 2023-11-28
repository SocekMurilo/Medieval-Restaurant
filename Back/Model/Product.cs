using System;
using System.Collections.Generic;

namespace Back.Model;

public partial class Product
{
    public int Idproduct { get; set; }

    public string Name { get; set; }

    public string Description { get; set; }

    public double Value { get; set; }

    public int ImageId { get; set; }

    public virtual Image Image { get; set; }

    public virtual ICollection<ProductOrder> ProductOrders { get; } = new List<ProductOrder>();

    public virtual ICollection<Promotion> Promotions { get; } = new List<Promotion>();
}
