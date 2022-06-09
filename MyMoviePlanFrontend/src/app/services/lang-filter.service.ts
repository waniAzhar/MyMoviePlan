import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangFilterService {

  private content = new BehaviorSubject<Array<string>>([]);
  public langSearch = this.content.asObservable();
  
    constructor() { }
  
    filterLanguage(language: Array<string>){
      this.content.next(language);
}
}