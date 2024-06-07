import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: any = [];

  constructor(private productService: ProductService, private router: Router) {
    this.productService
      .getAllProducts()
      .subscribe((products) => (this.products = products));
  }

  deleteItem(id: string) {
    const confirmDelete = confirm('Are you sure you want to delete this item?');
    if (confirmDelete) {
      this.productService
        .deleteProduct(id)
        .subscribe(
          () =>
            (this.products = this.products.filter((pro: any) => pro.id !== id))
        );
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/signin');
  }
}
