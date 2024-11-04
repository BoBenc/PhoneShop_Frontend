import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {
  refPhoneShop: AngularFireList<any>
  
  constructor(private db:AngularFireDatabase) {
    this.refPhoneShop = db.list("/products")
  }

  addPhone(phone:any) {
    this.refPhoneShop.push(phone)
  }

  getPhone() {
    return this.refPhoneShop
  }

  deletePhone(phone:any) {
    this.refPhoneShop.remove(phone.key)
  }
  updatePhone(phone:any) {
    let key = phone.key
    delete phone.key
    this.refPhoneShop.update(key, phone)
  }
}