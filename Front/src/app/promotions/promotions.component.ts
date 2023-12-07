import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../services/product-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promotions',
  standalone: true,
  imports: [CommonModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,],
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.css'
})
export class PromotionsComponent{
  constructor(private router: Router, private product: ProductService, public dialog: MatDialog) {};

  listproduct: any[] = [];

  ngOnInit(): void {
    this.product.GetProduct().subscribe((data: any) => {
      this.listproduct = [];
      data.forEach((x: any) => this.listproduct.push(x));
    });
  }

  Ticket(){
      this.dialog.open(Ticket);
  }

}
@Component({
  selector: 'ticket',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './ticket.html',
  styleUrl: './promotions.component.css',
})
export class Ticket {
  constructor(
    public dialogRef: MatDialogRef<Ticket>,
    private product: ProductService
  ) {}

  name: string = '';
  description: string = '';
  value: number = 0;
  type: string = '';
  quantity: number = 1
  id: number = 0;

  CreateProduct() {
    this.product.CreateProduct({
      id: this.id,
      name: this.name,
      description: this.description,
      value: this.value,
      type: this.type,
      quantity: this.quantity,
    });

    this.dialogRef.close();
    window.location.reload();
  }
}