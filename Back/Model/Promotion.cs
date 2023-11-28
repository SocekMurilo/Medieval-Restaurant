using System;
using System.Collections.Generic;

namespace Back.Model;

public partial class Promotion
{
    public int Idpromotion { get; set; }

    public string PromotionalKey { get; set; }

    public double NewValue { get; set; }

    public int ProductId { get; set; }

    public virtual Product Product { get; set; }
}
