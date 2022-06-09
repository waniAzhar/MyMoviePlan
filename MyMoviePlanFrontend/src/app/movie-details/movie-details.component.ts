import { Component, Input, OnInit, } from '@angular/core';
import { Card } from '../model/card';
import { ShareInfoService } from '../services/share-info.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
    card: Card ={
    id: 1,
    title: "",
    imageUrl: "",
    price:1
  };

  constructor(private shareInfo: ShareInfoService) { }

  ngOnInit(): void {
    this.shareInfo.shareCardDetails.subscribe(rep => this.card = rep)
  }

}
