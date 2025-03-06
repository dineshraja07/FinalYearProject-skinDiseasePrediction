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
  navigate(str:string)
  {
        this.router.navigate([str])
        .then(nav => {
          console.log(nav); // true if navigation is successful
        }, err => {
          console.log(err) // when there's an error
        });
   }
  }

