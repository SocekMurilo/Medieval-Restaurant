﻿using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Back.Model;

public partial class RestaurantMedievalDbContext : DbContext
{
    public RestaurantMedievalDbContext()
    {
    }

    public RestaurantMedievalDbContext(DbContextOptions<RestaurantMedievalDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Image> Images { get; set; }

    public virtual DbSet<Order> Orders { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<ProductOrder> ProductOrders { get; set; }

    public virtual DbSet<Promotion> Promotions { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Data Source=CT-C-001YU\\SQLEXPRESS;Initial Catalog=Restaurant_Medieval_DB;Integrated Security=True;TrustServerCertificate=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Image>(entity =>
        {
            entity.HasKey(e => e.Idimage).HasName("PK__Image__365310E84E60429C");

            entity.ToTable("Image");

            entity.Property(e => e.Idimage).HasColumnName("IDImage");
            entity.Property(e => e.Photo).IsRequired();
        });

        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(e => e.Idorder).HasName("PK__Orders__5CBBCADB8AD4D148");

            entity.Property(e => e.Idorder).HasColumnName("IDOrder");
            entity.Property(e => e.StartTime).HasColumnType("datetime");
            entity.Property(e => e.UserId).HasColumnName("UserID");

            entity.HasOne(d => d.User).WithMany(p => p.Orders)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Orders__UserID__3E52440B");
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.Idproduct).HasName("PK__Product__4290D179AC96A657");

            entity.ToTable("Product");

            entity.Property(e => e.Idproduct).HasColumnName("IDProduct");
            entity.Property(e => e.Description)
                .IsRequired()
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.ImageId).HasColumnName("ImageID");
            entity.Property(e => e.Name)
                .IsRequired()
                .HasMaxLength(80)
                .IsUnicode(false);

            entity.HasOne(d => d.Image).WithMany(p => p.Products)
                .HasForeignKey(d => d.ImageId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Product__ImageID__3B75D760");
        });

        modelBuilder.Entity<ProductOrder>(entity =>
        {
            entity.HasKey(e => e.IdproductOrder).HasName("PK__ProductO__9FA59CC0ABA10040");

            entity.ToTable("ProductOrder");

            entity.Property(e => e.IdproductOrder).HasColumnName("IDProductOrder");
            entity.Property(e => e.OrderId).HasColumnName("OrderID");
            entity.Property(e => e.ProductId).HasColumnName("ProductID");

            entity.HasOne(d => d.Order).WithMany(p => p.ProductOrders)
                .HasForeignKey(d => d.OrderId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__ProductOr__Order__412EB0B6");

            entity.HasOne(d => d.Product).WithMany(p => p.ProductOrders)
                .HasForeignKey(d => d.ProductId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__ProductOr__Produ__4222D4EF");
        });

        modelBuilder.Entity<Promotion>(entity =>
        {
            entity.HasKey(e => e.Idpromotion).HasName("PK__Promotio__C76CC0D8D615D467");

            entity.ToTable("Promotion");

            entity.Property(e => e.Idpromotion).HasColumnName("IDPromotion");
            entity.Property(e => e.ProductId).HasColumnName("ProductID");
            entity.Property(e => e.PromotionalKey)
                .IsRequired()
                .HasMaxLength(50)
                .IsUnicode(false);

            entity.HasOne(d => d.Product).WithMany(p => p.Promotions)
                .HasForeignKey(d => d.ProductId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Promotion__Produ__44FF419A");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Iduser).HasName("PK__Users__EAE6D9DF51901DE4");

            entity.Property(e => e.Iduser).HasColumnName("IDUser");
            entity.Property(e => e.Cpf)
                .IsRequired()
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("CPF");
            entity.Property(e => e.Email)
                .IsRequired()
                .HasMaxLength(80)
                .IsUnicode(false);
            entity.Property(e => e.Name)
                .IsRequired()
                .HasMaxLength(80)
                .IsUnicode(false);
            entity.Property(e => e.Password)
                .IsRequired()
                .IsUnicode(false);
            entity.Property(e => e.Salt)
                .IsRequired()
                .HasMaxLength(200)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
