import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, from} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

export class datatable{
  name : string
  quantity : string
  description : string
}

export class newdata{
  name : any
  quantity : any
  description : any
}

export class editdata{
  id : any
  Name : any
  Quantity : any
  Description : any
}

export class updatedata{
  id : any
  name : any
  quantity : any
  description : any
}

export class newhistory{
  itemid: any
  itemname: any
  quantity : any
  description : any
  type : any
}

export class newedithistory{
  id: any
  Name: any
  Quantity : any
  Description : any
  Type : any
}
@Injectable()


export class InventoryService {

  constructor(private http: HttpClient) {

   }

   getTableData(data: datatable): Observable<any>{
     return this.http.post('https://api.invform.me/view',data);
   }

   insertData(data){
     return this.http.post('https://api.invform.me/create',data)
   }

   deleteData(id){
     return this.http.delete(`https://api.invform.me/delete/${id}`)
   }

   updateData(id,data){
    return this.http.post(`https://api.invform.me/update/${id}`,data)
   }

   editData(id){
     return this.http.get(`https://api.invform.me/edit/${id}`)
   }

   createHistoryData(data){
    return this.http.post('https://api.invform.me/history/create',data)
   }






}
