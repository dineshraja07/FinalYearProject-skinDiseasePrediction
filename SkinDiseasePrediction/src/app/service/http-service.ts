import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
  })

  export class HttpService{
    private httpClient = inject(HttpClient);
    private api='http://127.0.0.1:8000/';
    getResult()
    {
        return this.httpClient.get(this.api+'predict/image',{responseType:'blob'});
    }

    uploadImage(file: File): Observable<any> {
      const formData = new FormData();
      formData.append('file', file);
      console.log("Image sent to the backend");
      return this.httpClient.post(this.api+'fetch-image', formData);
    }

  }