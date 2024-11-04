import { Component } from '@angular/core';
import { BaseServiceService } from '../base-service.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

  products:any = []
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
}
