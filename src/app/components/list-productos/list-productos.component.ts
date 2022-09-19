import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css']
})
export class ListProductosComponent implements OnInit {
  listProducts: Producto[] = [];
  loading: boolean = false;

  constructor(private _productoService: ProductoService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.loading = true;
    setTimeout(() => {
      this._productoService.getProducts().subscribe((data: Producto[]) => {
        this.listProducts = data;
        this.loading = false;
      })
    }, 1000);  
  }

  deleteProduct(id: number) {
    this.loading = true;
    this._productoService.deleteProduct(id).subscribe(() => {
      this.loading = false;
      this.getProducts();
      this.toastr.warning('El producto fue eliminado!', 'Operacion exitosa!');
    })
  }
}
