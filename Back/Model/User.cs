using System;
using System.Collections.Generic;

namespace Back.Model;

public partial class User
{
    public int Iduser { get; set; }

    public string Name { get; set; }

    public string Email { get; set; }

    public string Cpf { get; set; }

    public bool IsAdm { get; set; }

    public string Salt { get; set; }

    public string Password { get; set; }

    public virtual ICollection<Order> Orders { get; } = new List<Order>();
}
