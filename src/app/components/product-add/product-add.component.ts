import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css',
})
export class ProductAddComponent {
  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: ['0', [Validators.required, Validators.min(0)]],
    imageUrl: [''],
    description: [''],
  });

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  onSubmit() {
    if (this.form.invalid) return;

    this.productService.addProduct(this.form.value).subscribe(() => {
      alert('Them san pham thanh cong');
      this.router.navigateByUrl('/list');
    });
  }
}
