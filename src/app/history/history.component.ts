import { Component, OnInit } from '@angular/core';
import { historydata, HistoryService, edithistorydata, updatehistorydata } from './history.service';

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
  startdate : '',
  enddate : '',
}
listhistorydata;
edit = new edithistorydata();
updatehistory = new updatehistorydata();

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

  deletehistory(id){
    this.historyservice.deleteDataHistory(id).subscribe(
      res=>{
        console.log(res)
        this.listhistory();
      },
      err=>{
        console.log(err)
      }
    )
  }

  
  historyeditdata(id){
    this.historyservice.editHistoryData(id).subscribe(
      (data)=>{
        this.edit = data['data'][0]
        console.log(this.edit)
      },
      err=>{
        console.log(err);
      }
    )
  }

  historydataupdate(id,quantity,description){
    if(this.updatehistory.quantity==null){
      this.updatehistory.quantity = quantity;
    }
    if(this.updatehistory.description==null){
      this.updatehistory.description = description;
    }
    if(this.updatehistory.id==null){
      this.updatehistory.id = id;
    }
    
    this.historyservice.updateHistoryData(id,this.updatehistory).subscribe(
      res=>{
        console.log(res)
        this.listhistory();
      },
      err=>{
        console.error(err);
        
      }
    )
  }

}
