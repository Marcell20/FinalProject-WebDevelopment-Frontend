import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, from} from 'rxjs';

export class historydata{
  id: any
  itemid: any
  itemname : any
  type : any
  quantity : any
  description : any
  created_at : any
  updated_at : any
  startdate : any
  enddate : any
}

export class edithistorydata{
  id : any
  quantity : any
  description : any
}

export class updatehistorydata{
  id : any
  quantity : any
  description : any
}


@Injectable()
export class HistoryService {

  constructor(private http: HttpClient) { 

  }

  getHistoryData(data: historydata): Observable<any>{
    return this.http.post('https://api.invform.me/history/view',data)
  }
  
  deleteDataHistory(id){
    return this.http.delete(`https://api.invform.me/history/delete/${id}`)
  }

  editHistoryData(id){
    return this.http.get(`https://api.invform.me/history/edit/${id}`)
   }

  updateHistoryData(id,data){
    return this.http.post(`https://api.invform.me/history/update/${id}`,data)
  }
}
