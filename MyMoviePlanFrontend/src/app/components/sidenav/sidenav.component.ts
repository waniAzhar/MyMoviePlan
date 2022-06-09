import { Component, OnInit } from '@angular/core';
import { LangFilterService } from 'src/app/services/lang-filter.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private dataFilter:LangFilterService) { }
languages:Array<string> = [];
  ngOnInit(): void {
  }
  langFun(language:any) {
    if ( this.languages.includes(language.value )) {

      this.languages = this.languages.filter((e) => {
       return e != language.value
     })
   }
   else {
   this.languages.push(language.value);
   }

console.log(this.languages);
   this.dataFilter.filterLanguage(this.languages);


  }

}
