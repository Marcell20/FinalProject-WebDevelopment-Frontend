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
}


@Injectable()
export class HistoryService {

  constructor(private http: HttpClient) { 

  }

  getHistoryData(data: historydata): Observable<any>{
    return this.http.post('https://api.invform.me/history/view',data)
  }

}
