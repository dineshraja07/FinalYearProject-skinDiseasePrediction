import { Component, inject } from '@angular/core';
import { HttpService } from '../service/http-service';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { WebcamComponent } from '../webcam/webcam.component';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
   imports: [ DropdownComponent,FileUploadComponent,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 title = 'SkinDiseasePrediction';
  private httpService = inject(HttpService);
  imageUrl: string | undefined;
  isEnableCamera:boolean=false;
  private router = inject(Router);
  isCaptured:boolean=false;
  enableCamera()
  {
    this.isEnableCamera=true;
    this.router.navigate(['/home/camera-page']);
  }
  captureFunction(str:string)
  {
     this.isCaptured=true;
     console.log("capture function value : ",str);
     this.imageUrl=str;
  }


  
}
