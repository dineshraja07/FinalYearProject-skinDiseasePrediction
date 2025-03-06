import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  isSelected:boolean=false;
  @Output() selectedDisease: EventEmitter<string> = new EventEmitter<string>();
  selected()
  {
     this.isSelected=!this.isSelected;
  }
  OptionClicked(str:string)
  {
     console.log(str);
     this.isSelected=false;
     this.selectedDisease.emit(str);
  }
}
