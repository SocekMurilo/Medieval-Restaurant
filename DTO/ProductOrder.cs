using System;

namespace DTO;

public class ProductOrderData
{
    public int Idorder { get; set; }
    public string Name { get; set; }
    public double Value { get; set; }
    public string Description  { get; set; }
    public double Quantity { get; set; }
}