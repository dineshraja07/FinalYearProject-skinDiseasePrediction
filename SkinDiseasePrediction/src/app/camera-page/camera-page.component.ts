import { Component, inject } from '@angular/core';
import { HttpService } from '../service/http-service';
import { WebcamComponent } from '../webcam/webcam.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-camera-page',
  imports: [WebcamComponent],
  templateUrl: './camera-page.component.html',
  styleUrl: './camera-page.component.css'
})
export class CameraPageComponent {
    private httpService = inject(HttpService);
    imageUrl: string | undefined;
    isCaptured:boolean=false;
    private router = inject(Router);
    isCameraOn=true;
  captureFunction(str:string)
  {
     console.log("capture function value : ",str);
     this.imageUrl=str;
     this.httpService.setImagePath(this.imageUrl);
     this.isCaptured=true;
     this.isCameraOn=false;
    this.router.navigate(['/home/result']);
  }
}
