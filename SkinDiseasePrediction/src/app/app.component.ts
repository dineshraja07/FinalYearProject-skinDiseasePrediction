import { Component, EventEmitter, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNaveBarComponent } from './side-nave-bar/side-nave-bar.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { WebcamComponent } from "./webcam/webcam.component";
import { HttpService } from './service/http-service';

@Component({
  selector: 'app-root',
  imports: [SideNaveBarComponent, DropdownComponent, WebcamComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
