import { Component,inject ,OnInit} from '@angular/core';
import { HttpService } from '../service/http-service';

@Component({
  selector: 'app-dropdown',
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent implements OnInit{
  isSelected:boolean=false;
  private httpservice=inject(HttpService);
  selectedDisease="Select";
  constructor()
  {
    this.selectedDisease="Select";
  }
  selected()
  {
     this.isSelected=!this.isSelected;
  }
  OptionClicked(str:string)
  {
     console.log(str);
     this.isSelected=false;
     this.httpservice.setDiseaseName(str);
     this.selectedDisease=this.httpservice.getDiseaseName();
  }
  ngOnInit(): void {
    this.selectedDisease="Select";
}
}
