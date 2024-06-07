import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-edit.component.html',
})
export class ProductEditComponent {
  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: ['0', [Validators.required, Validators.min(0)]],
    imageUrl: [''],
    description: [''],
  });

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.productService
        .getProduct(id)
        .subscribe((product) => this.form.patchValue(product));
    });
  }

  onSubmit() {
    if (this.form.invalid) return;

    const id = this.route.snapshot.params['id'];

    this.productService
      .editProduct({ id, ...this.form.value })
      .subscribe(() => {
        alert('Cap nhat san pham thanh cong');
        this.router.navigateByUrl('/list');
      });
  }
}
