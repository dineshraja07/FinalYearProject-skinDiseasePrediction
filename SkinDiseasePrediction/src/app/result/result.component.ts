import { Component ,inject,OnInit} from '@angular/core';
import { HttpService } from '../service/http-service';
@Component({
  selector: 'app-result',
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent implements OnInit{
public imagePath:string="";
public httpService=inject(HttpService);
  ngOnInit(): void {
     this.imagePath=this.httpService.getImagePath();
      console.log("Image path from the reult component : ",this.imagePath);
  }
}
