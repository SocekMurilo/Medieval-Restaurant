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
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDialogModule, MatButtonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private product: ProductService,
    private router: Router
  ) {}

  listproduct: any[] = [];

  ngOnInit(): void {
    this.product.GetProduct().subscribe((data: any) => {
      this.listproduct = [];
      data.forEach((x: any) => this.listproduct.push(x));
    });
  }

  AddProduct() {
    this.dialog.open(NewProductDialog);
  }

  HomeAdm() {
    this.router.navigate(['admin']);
  }
}

@Component({
  selector: 'new-product-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './new-product-dialog.html',
  styleUrl: './add-product.component.css',
})
export class NewProductDialog {
  constructor(
    public dialogRef: MatDialogRef<NewProductDialog>,
    private product: ProductService
  ) {}

  name: string = '';
  description: string = '';
  value: number = 0;
  type: string = '';

  CreateProduct() {
    this.product.CreateProduct({
      name: this.name,
      description: this.description,
      value: this.value,
      type: this.type,
    });

    this.dialogRef.close();
    window.location.reload();
  }
}
