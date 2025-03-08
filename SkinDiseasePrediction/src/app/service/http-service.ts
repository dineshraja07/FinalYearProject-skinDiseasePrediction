import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
  })

  export class HttpService{
    private httpClient = inject(HttpClient);
    public diseaseName1="";
    public imageUrl="";
    public diseaseName=new  BehaviorSubject<string>("");
    private api='http://127.0.0.1:8000/';
    setImagePath(str:string)
    {
      console.log("from setImagePath() :  "+str)
         this.imageUrl=str;
    }
    getImagePath()
    {
      console.log("from getImagePath() :  "+this.imageUrl)
      return this.imageUrl;
    }
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
      if(this.diseaseName1=="Melanoma")
      {
        return this.httpClient.post(this.api+'predict/Melonoma', formData,{
          responseType: 'blob'
        });
      }
      else{
        return this.httpClient.post(this.api+'predict/Psoriasis', formData,{
          responseType: 'blob'
        });
      }
    
    }

  }