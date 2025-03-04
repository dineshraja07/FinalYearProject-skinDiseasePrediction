import { Component, inject, Output ,EventEmitter} from '@angular/core';
import { WebcamModule } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { saveAs } from 'file-saver';
import { HttpService } from '../service/http-service';


@Component({
  selector: 'app-webcam',
  imports: [WebcamModule],
  templateUrl: './webcam.component.html',
  styleUrl: './webcam.component.css'
})
export class WebcamComponent{
  private httpService=inject(HttpService);
  trigger: Subject<void> = new Subject<void>();
  triggerObservable: Observable<void> = this.trigger.asObservable();
  @Output() isCaptured = new EventEmitter<string>();
  imageUrl=""
  handleImage(webcamImage: any): void {
    
    console.log('Raw webcam image data:', webcamImage);
    
    // Extract the base64 string from _imageAsDataUrl if _imageAsBase64 is null
    const base64String = webcamImage._imageAsBase64 ?? webcamImage._imageAsDataUrl.split(',')[1];
  
    // Ensure the base64 string is valid
    if (!this.isBase64(base64String)) {
      console.error('Invalid base64 string:', base64String);
      return;
    }
  
    try {
      const byteString = atob(base64String);
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
  
      const blob = new Blob([ab], { type: 'image/jpeg' });
      const file = new File([blob], 'captured-image.png', { type: 'image/png' });
      this.httpService.uploadImage(file).subscribe(
         {
           next: (blob: Blob) => {
            const objectURL = URL.createObjectURL(blob);
            this.imageUrl = objectURL;
            console.log("URL is : ",this.imageUrl);
            this.isCaptured.emit(this.imageUrl);
           },
           error: (err) => {
            console.error('Error uploading image', err);
          }
         }



      );
    } catch (error) {
      console.error('Error processing base64 string:', error);
    }
  }

  
  
  isBase64(str: string): boolean {
    try {
      return btoa(atob(str)) === str;
    } catch (err) {
      return false;
    }
  }
  storeImageLocally(blob: Blob): void {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'captured-image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  clicked() {
    console.log("Capture clicked ....");
    this.triggerSnapshot();
  }
}
