import { Component,inject } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { HttpService } from '../service/http-service';

@Component({
  selector: 'app-dropdown',
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  isSelected:boolean=false;
  private httpservice=inject(HttpService);
  
  selected()
  {
     this.isSelected=!this.isSelected;
  }
  OptionClicked(str:string)
  {
     console.log(str);
     this.isSelected=false;
     this.httpservice.setDiseaseName(str);
  }
}
