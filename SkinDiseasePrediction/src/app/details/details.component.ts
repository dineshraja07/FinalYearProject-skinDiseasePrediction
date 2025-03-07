import { Component, inject ,OnInit} from '@angular/core';
import { HttpService } from '../service/http-service';
import { NgFor } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-details',
  imports: [NgFor],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  animations: [
      trigger('fadeInOut', [
        state('void', style({ opacity: 0 })),
        transition(':enter', [animate('500ms ease-in')]), // Animation for entering
        transition(':leave', [animate('500ms ease-out')]) // Animation for leaving
      ]),
      trigger('slideIn', [
        state('void', style({ transform: 'translateX(-100%)', opacity: 0 })),
        transition(':enter', [animate('500ms ease-in')]), // Slide in from left
      ])
      ,
      trigger('slideInFromRight', [
        state('void', style({ transform: 'translateX(100%)', opacity: 0 })), // Start off-screen to the right
        transition(':enter', [
          animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })) // Slide in to the screen
        ]),
        transition(':leave', [
          animate('300ms ease-in', style({ transform: 'translateX(100%)', opacity: 0 })) // Slide out back to the right
        ])
      ])
    ]
})
export class DetailsComponent implements OnInit {
private httpService=inject(HttpService);
public diseaseName:string="";
index=0;
public array:{ name: string; description: string; effects: string;stages:string[] }[]=[
]
constructor()
 {
    this.array.push( {
      name:'Melasma',
      description:" A common skin condition characterized by brown or gray-brown patches, often on the face.",
      effects:"While harmless, it can cause cosmetic concerns and emotional distress due to its appearance..",
    stages:["active","inactive"]
    }) ;
    this.array.push(
      {
        name:'Melanoma',
        description:" A chronic skin condition causing dry, itchy, and inflamed skin."
       ,
       effects:"Symptoms include redness, swelling, and sometimes oozing or crusting.",
       stages:["Acral Lentiginous","	Lentigo Maligna","	Nodular Melanoma"]
     }
    )
    this.array.push(
      {
        name:'Chickenpox',
        description:"  A highly contagious viral infection caused by the varicella-zoster virus, presenting as an itchy rash with fluid-filled blisters.",
        effects:"While usually mild in children, it can lead to complications like bacterial infections or pneumonia in adults or immunocompromised individuals"
        ,
        stages:["stage 1 ","stage 2","stage 3"]
      }
    )
 
   this.array.push({
       name:'Eczema',
       description:"A chronic skin condition causing dry, itchy, and inflamed skin.",
       effects:"Symptoms include redness, swelling, and sometimes oozing or crusting",
        stages:["Acute Stage","Subacute Stage","Chronic Stage"]
       }
  );
  this.array.push({
    name:"Psoriasis",
    description:"An autoimmune condition that speeds up skin cell production, leading to scaly, itchy patches.",
    effects:" Besides skin symptoms, it can cause joint pain (psoriatic arthritis) and increase the risk of other health issues like heart disease.",
     stages:["Regressive Stage","Progressive Stage","Stationary Stage"]
  })
 }
 ngOnInit(): void {
  this.diseaseName=this.httpService.getDiseaseName();
   console.log("disease name from precaution component : ",this.diseaseName);
  switch (this.diseaseName) {
    case 'Melasma':
         this.index=0;
    break;
     case 'Melanoma': 
      this.index=1;
      break;
      case 'Chickenpox':
      this.index=2;
      break;
      case 'Eczema':
        this.index=3
        break;
        case 'Psoriasis':
          this.index=4;
          break;
    default:
      break;
  }
  console.log("index is ",this.index);
 }
}
