import { Component, EventEmitter, inject } from '@angular/core';
import { HttpService } from '../service/http-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  imports: [],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  private httpService=inject(HttpService);
  private router = inject(Router);
  buttonStr="upload";
  imageUrl: string | undefined;
  selectedFile: File | null = null;
  onFileSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
          this.selectedFile = input.files[0];
        
        }

}
onSubmit(event: Event): void {
  this.buttonStr="uploaded";
  event.preventDefault();
  console.log("FRom the file-upload");
    if (!this.selectedFile) {
        return; 
    }
    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);
   this.httpService.uploadImage(this.selectedFile).subscribe(
    {
      next: (blob: Blob) => {
        const objectURL = URL.createObjectURL(blob);
        this.imageUrl = objectURL;
        this.httpService.setImagePath(this.imageUrl);
        console.log("from the file upload URL is : ",this.httpService.getImagePath());
        this.router.navigate(['/home/result']);
        
       },
       error: (err) => {
        console.error('Error uploading image', err);
      }
    }
   )

}
}
