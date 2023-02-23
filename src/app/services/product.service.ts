import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  // Get List of Products Service
  public getAllProduct(): Observable<Array<Product>>{
    return this.http.get<Array<Product>>('https://localhost:7009/ShopAPI/Product/GetAllProduct');
  }

  // Get List of Category Service
  public getCategoryList(): Observable<Array<Category>>{
    return this.http.get<Array<Category>>('https://localhost:7009/ShopAPI/Product/GetCategoryList');
  }

  // Get List of Category Service
  public getCategory(id: number): Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`https://localhost:7009/ShopAPI/Product/GetCategory/${id}`);
  }
}
