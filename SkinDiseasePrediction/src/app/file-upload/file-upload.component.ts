import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  imports: [],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  selectedFile: File | null = null;

  onFileSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
          this.selectedFile = input.files[0];
      
        }

}
onSubmit(): void {
    if (!this.selectedFile) {
        return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);
    // this.http.post('YOUR_BACKEND_API_URL', formData).subscribe(response => {
        console.log('File uploaded successfully:');
    // });
}
}
