import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public imagesUrl;
  value=[];

  constructor(private gameService:DataService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.gameService.getHeroes().subscribe(data =>
      this.value=data
      )};

}
