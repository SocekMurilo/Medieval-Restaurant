import { Component } from '@angular/core';
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

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDialogModule, MatButtonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  constructor(public dialog: MatDialog, private product: ProductService) {}

  list1: any = []

  ngOnInit(): void {
    this.product.GetProduct().subscribe((data: any) => {
      this.list1 = [];
      data.forEach((x: any) => this.list1.push(x));
    });
  }

  AddProduct() {
    this.dialog.open(NewProductDialog);
  }


}

@Component({
  selector: 'new-product-dialog',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDialogModule, MatButtonModule, FormsModule],
  templateUrl: './new-product-dialog.html',
  styleUrl: './add-product.component.css',
})
export class NewProductDialog {
  constructor(public dialogRef: MatDialogRef<NewProductDialog>, private product: ProductService) {}

  name: string = '';
  description: string = '';
  value: number = 0
  type: string = ""

  CreateProduct() {

    this.product.CreateProduct({
      name: this.name,
      description: this.description,
      value: this.value,
      type: this.type
    });

    this.dialogRef.close();
  }
}
