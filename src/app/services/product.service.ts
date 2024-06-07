import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  URL_API = 'http://localhost:4000/products';

  getAllProducts(): Observable<any> {
    return this.http.get<any>(this.URL_API);
  }
  getProduct(id: string): Observable<any> {
    return this.http.get(`${this.URL_API}/${id}`);
  }
  deleteProduct(id: string): Observable<any> {
    return this.http.delete<any>(`${this.URL_API}/${id}`);
  }

  editProduct(product: any): Observable<any> {
    return this.http.put<any>(`${this.URL_API}/${product.id}`, product);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post<any>(`${this.URL_API}`, product);
  }
}
