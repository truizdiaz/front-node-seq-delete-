import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-agregar-editar-producto',
  templateUrl: './agregar-editar-producto.component.html',
  styleUrls: ['./agregar-editar-producto.component.css']
})
export class AgregarEditarProductoComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor(private fb: FormBuilder, private _productoService: ProductoService,
    private router: Router, private toastr: ToastrService, private aRoute: ActivatedRoute) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, Validators.required],
      stock: [null, Validators.required],
    })
    this.id = Number(aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {

    if (this.id != 0) {
      // Es editar
      this.operacion = 'Editar ';
      this.getProduct(this.id);
    }
  }

  getProduct(id: number) {
    this._productoService.getProduct(id).subscribe((data: Producto) => {
      console.log(data);
      this.form.setValue({
        name: data.nombre,
        description: data.descripcion,
        price: data.precio,
        stock: data.stock
      })
    })
  }

  addEditProduct() {
    const product: Producto = {
      nombre: this.form.value.name,
      descripcion: this.form.value.description,
      precio: 0.2,
      stock: 3
    }

    this.loading = true;

    if (this.id !== 0) {
      // Editar
      product.id = this.id;
      this._productoService.updateProduct(this.id, product).subscribe(() => {
        this.toastr.info(`El producto ${product.nombre} fue actualizado con exito`, 'Producto actualizado')
      })

    } else {
      // Agregar
      this._productoService.saveProduct(product).subscribe(() => {
        this.toastr.success(`El producto ${product.nombre} fue registrado con exito`, 'Producto registrado')
      })
    }

    this.router.navigate(['/']);
  }
}
