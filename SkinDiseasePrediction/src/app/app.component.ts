import { Component, EventEmitter, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpService } from './service/http-service';
import { SideNaveBarComponent } from "./side-nave-bar/side-nave-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideNaveBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SkinDiseasePrediction';
  private httpService = inject(HttpService);
  imageUrl: string | undefined;
  isEnableCamera:boolean=false;
  isCaptured:boolean=false;
  diseaseName:string="";
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
