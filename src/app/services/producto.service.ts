import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.environment;
    this.myApiUrl = 'api/productos/'
  }

  getProducts(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  saveProduct(product: Producto): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, product);
  }

  getProduct(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  updateProduct(id: number, product: Producto): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, product);
  }
}
