import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nave-bar',
  imports: [],
  templateUrl: './side-nave-bar.component.html',
  styleUrl: './side-nave-bar.component.css'
})
export class SideNaveBarComponent {
  constructor(private router: Router) {}
  isHomeSelected=false;
  isDetailsPageSelected=false;
  isAboutPageSelected=false;
  isPrecautionPageSelected=false;
  ActiveLinkMapper(str:string)
  {
      this.isHomeSelected=false;
      this.isDetailsPageSelected=false;
      this.isAboutPageSelected=false;
      this.isPrecautionPageSelected=false;
      if(str=='/details')
      {
         this.isDetailsPageSelected=true;
      }
      else if(str=='/home')
      {
         this.isHomeSelected=true;
      }
      else if(str=='/precaution')
      {
          this.isPrecautionPageSelected=true;
      }
      else if(str=='/about')
      {
          this.isAboutPageSelected=true;
      }
  }
  navigate(str:string)
  {
        this.ActiveLinkMapper(str);
        this.router.navigate([str])
        .then(nav => {
          console.log(nav); // true if navigation is successful
        }, err => {
          console.log(err) // when there's an error
        });
   }
  }

