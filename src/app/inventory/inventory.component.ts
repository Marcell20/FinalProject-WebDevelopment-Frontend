import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { InventoryService,datatable, newdata, editdata, newhistory, updatedata, newedithistory } from './inventory.service';
import { NgForm } from '@angular/forms';
import { HistoryService } from '../history/history.service';
import { HistoryComponent } from '../history/history.component';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html', 
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  datalist: datatable = {
    name : '',
    quantity : '',
    description : '',
  }
  listdatas;

  item = new newdata();
  edititem = new editdata();
  historydata = new newhistory();
  updateitem = new updatedata();
  edithistorydata = new editdata();
  
  
  constructor(private inven : InventoryService, private auth: AuthenticationService, ) {}

  ngOnInit(){
    this.inven.getTableData(this.datalist).subscribe(
      (data)=>{
        console.log(data)
        this.listdatas = data['data']
        console.log(this.listdatas[0])
      },
      err=>{
        console.error(err)
      }
    )
  }
  
  itemlist(){
    console.log('LOL')
    this.inven.getTableData(this.datalist).subscribe(
      (data)=>{
        console.log(data)
        this.listdatas = data['data']
      },
      err=>{
        console.error(err)
      }
    )
  }

  createData(form: NgForm){
    console.log(this.item)
    this.inven.insertData(this.item).subscribe(
      res=>{
        console.log(res);
        this.itemlist();
        form.resetForm();
      },
      err=>{
        console.error(err);
      } 
      
    )
  }

  datadelete(id){
    this.inven.deleteData(id).subscribe(
      res=>{
        console.log(res);
        this.itemlist();
      },
      err=>{
        console.error(err);
      }
    )
  }
  
  dataupdate(id,name,quantity,description){
    if(this.updateitem.name==null){
      this.updateitem.name = name
    }
    if(this.updateitem.quantity==null){
      this.updateitem.quantity = quantity
    }
    if(this.updateitem.description==null){
      this.updateitem.description = description
    }
    console.log(this.updateitem)
    this.inven.updateData(id,this.updateitem).subscribe(
      (res)=>{
        console.log(res);
        this.itemlist();
      },
      err=>{
        console.error(err);
      }
    )
  }

  dataedit(id){
    this.inven.editData(id).subscribe(
      (data)=>{
        // console.log(res);
        this.edititem = data['data'][0]
        console.log(this.edititem)
      },
      err=>{
        console.error(err);
      }
    )
  }

  historycreate(id,name){
    if(this.historydata.itemname==null){
      this.historydata.itemname = name;
    }
    if(this.historydata.itemid==null){
      this.historydata.itemid = id;
    }
    this.inven.createHistoryData(this.historydata).subscribe(
      res=>{
        console.log(res);
        
      },
      err=>{
        console.error(err);
      }
    )
  }

  historydataedit(id){
    this.inven.editData(id).subscribe(
      (data)=>{
        this.edithistorydata = data['data'][0]
        console.log(this.edithistorydata)
      },
      err=>{
        console.log(err);
      }
    )
  }
}
