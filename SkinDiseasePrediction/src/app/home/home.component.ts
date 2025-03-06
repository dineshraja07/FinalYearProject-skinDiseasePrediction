import { Component, inject } from '@angular/core';
import { HttpService } from '../service/http-service';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { WebcamComponent } from '../webcam/webcam.component';


@Component({
  selector: 'app-home',
   imports: [ DropdownComponent, WebcamComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 title = 'SkinDiseasePrediction';
  private httpService = inject(HttpService);
  imageUrl: string | undefined;
  isEnableCamera:boolean=false;
  isCaptured:boolean=false;
  enableCamera()
  {
    this.isEnableCamera=true;
  }
  captureFunction(str:string)
  {
     this.isEnableCamera=false;
     this.isCaptured=true;
     console.log("capture function value : ",str);
     this.imageUrl=str;
  }
}
