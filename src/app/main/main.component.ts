import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
  constructor() {}

  ngOnInit(): void {
  }
  

}
