import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  anio: number = new Date().getFullYear();

  producto: ProductoDescripcion;
  id: string;

  constructor( private Route: ActivatedRoute,
               public productosService: ProductosService) {

   }

  ngOnInit() {

    this.Route.params
        .subscribe( parametros => {

          // console.log(parametros ['id']);

          this.productosService.getProducto(parametros['id'])
              .subscribe( (producto: ProductoDescripcion)  => {

                this.id = parametros['id'];
                this.producto = producto;

              });


        });
  }

}
