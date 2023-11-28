using System;
using System.Collections.Generic;

namespace Back.Model;

public partial class Image
{
    public int Idimage { get; set; }

    public byte[] Photo { get; set; }

    public virtual ICollection<Product> Products { get; } = new List<Product>();
}
