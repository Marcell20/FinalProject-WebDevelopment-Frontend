import { Component, OnInit } from '@angular/core';
import { historydata, HistoryService } from './history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
historylist: historydata = {
  id: '',
  itemid: '',
  itemname : '',
  type : '',
  quantity : '',
  description : '',
  created_at : '',
  updated_at : '',
}
listhistorydata;
  constructor(private historyservice: HistoryService) { }

  ngOnInit(){
    this.historyservice.getHistoryData(this.historylist).subscribe(
      (data)=>{
        console.log(data)
        this.listhistorydata = data['data']
      },
      err=>{
        console.error(err)
      }
    )
  }

  listhistory(){
    console.log('HIYA')
    this.historyservice.getHistoryData(this.historylist).subscribe(
      (data)=>{
        console.log(data)
        this.listhistorydata = data['data']
      },
      err=>{
        console.error(err)
      }
    )
  }

}
