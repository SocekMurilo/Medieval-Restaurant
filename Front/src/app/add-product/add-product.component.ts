import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { strict } from 'assert';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDialogModule, MatButtonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  constructor(public dialog: MatDialog) {}

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
  constructor(public dialogRef: MatDialogRef<NewProductDialog>) {}

  name: string = '';
  description: string = '';

  CreateProduct() {
    this.dialogRef.close();
  }
}
