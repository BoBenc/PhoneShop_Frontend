import { Component } from '@angular/core';
import { BaseServiceService } from '../base-service.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-admin-products-list',
  templateUrl: './admin-products-list.component.html',
  styleUrl: './admin-products-list.component.css'
})
export class AdminProductsListComponent {
  products:any = []
  newProduct:any = {}
  columns = [
    {key:"name",text:"Név",type:"text"},
    {key:"price",text:"Ár",type:"number"},
    {key:"description",text:"Leírás",type:"textarea"}
  ]
  constructor(private base:BaseServiceService){
    this.base.getPhone().snapshotChanges().pipe(
      map(
        (changes)=> changes.map(
          (c) => ({key:c.payload.key,...c.payload.val()})
        )
      )
    ).subscribe(
      (res)=> this.products = res
    )
  }

  addProduct() {
    this.base.addPhone(this.newProduct)
    this.newProduct = {}
  }

  updateProduct(product:any) {
    this.base.updatePhone(product)
  }

  deleteProduct(product:any) {
    this.base.deletePhone(product)
  }
}