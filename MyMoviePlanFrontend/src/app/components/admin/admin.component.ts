import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardServiceService } from 'src/app/services/card-service.service';
import { ShareInfoService } from 'src/app/services/share-info.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public cardForm:FormGroup;
  cardserviceservice: any;
 search = "";
 public cards:any;
  constructor(private formBuilder: FormBuilder, private CardServiceService: CardServiceService, private data:ShareInfoService) {
    this.cardForm = this.formBuilder.group({

      imageUrl:['', [Validators.required]],
      title:['', [Validators.required]],
      genre:['', [Validators.required]],
      language:['', [Validators.required]],
      price:['', [Validators.required]],
      date:['', [Validators.required]],
      place:['', [Validators.required]],
      description:['', [Validators.required]]

    })

   }

  ngOnInit(): void {
    this.CardServiceService.showCards().subscribe((cards) => {
      this.cards = cards;
    })
    this.data.shareSearch.subscribe(rtvdv => this.search =rtvdv)
  }
cardSubmit(card:any){
this.CardServiceService.postCards(card.value).subscribe((res) => {
  location.reload();
})

this.cardForm.reset();

}
sendDataToMovie(card:object){
  this.data.exchangeDta(card)
}
deleteCard(cardId:number){
  this.CardServiceService.deleteCard(cardId).subscribe(res => {})
  location.reload();
}

}
