import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
  })

  export class HttpService{
    private httpClient = inject(HttpClient);
    public diseaseName1="";
    public diseaseName=new  BehaviorSubject<string>("");
    private api='http://127.0.0.1:8000/';
    getDiseaseName()
    {
      return this.diseaseName1;
    }
    setDiseaseName(str:string)
    {
      this.diseaseName.next(str);
      this.diseaseName1=str;
    }
    getResult()
    {
        return this.httpClient.get(this.api+'predict/image',{responseType:'blob'});
    }

    uploadImage(file: File): Observable<any> {
      const formData = new FormData();
      formData.append('file', file);
      console.log("Image sent to the backend");
      return this.httpClient.post(this.api+'fetch-image', formData,{
        responseType: 'blob'
      });
    }

  }