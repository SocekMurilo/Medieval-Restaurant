using System;
using System.Collections.Generic;

namespace Back.Model;

public partial class Order
{
    public int Idorder { get; set; }

    public DateTime StartTime { get; set; }

    public bool Finish { get; set; }

    public double ValueOrder { get; set; }

    public int? UserId { get; set; }

    public virtual ICollection<ProductOrder> ProductOrders { get; } = new List<ProductOrder>();

    public virtual User User { get; set; }
}
