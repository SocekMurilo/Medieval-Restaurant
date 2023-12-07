﻿using System;
using System.Collections.Generic;

namespace Back.Model;

public partial class ProductOrder
{
    public int IdproductOrder { get; set; }

    public int Quantity { get; set; }

    public int? OrderId { get; set; }

    public int? ProductId { get; set; }

    public virtual Order Order { get; set; }

    public virtual Product Product { get; set; }
}
