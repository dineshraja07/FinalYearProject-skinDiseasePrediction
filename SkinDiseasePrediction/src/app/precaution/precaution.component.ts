import { Component, inject,OnInit } from '@angular/core';
import { HttpService } from '../service/http-service';

@Component({
  selector: 'app-precaution',
  imports: [],
  templateUrl: './precaution.component.html',
  styleUrl: './precaution.component.css'
})
export class PrecautionComponent implements OnInit {
  private httpService=inject(HttpService);
    public diseaseName:string="";
    index=0;
    public array:{ name: string; precaution1: string; precaution2: string; precaution3: string; }[]=[
    ]
 constructor()
 {
    this.array.push( {
      name:'Melasma',
      precaution1:"Sun Protection: Use broad-spectrum sunscreen with SPF 30 or higher daily, even on cloudy days.",
      precaution2:"Skin Care: Use gentle skin care products and avoid harsh chemicals.",
      precaution3:"Avoid Triggers: Hormonal changes can trigger melasma, so consult your doctor about managing these."

   }) ;
    this.array.push(
      {
        name:'Melanoma',
        precaution1:"Regular Skin Checks: Perform self-examinations and visit a dermatologist for regular skin checks."
       ,
       precaution2:"Avoid Tanning: Stay away from tanning beds and excessive sun exposure."
       ,
       precaution3:"Sun Protection: Wear protective clothing, hats, and sunglasses, and use sunscreen.s"
     }
    )
    this.array.push(
      {
        name:'Chickenpox',
        precaution1:"Vaccination: Ensure you and your children are vaccinated against chickenpox.",
        precaution2:"Hygiene: Maintain good hygiene and avoid close contact with infected individuals.",
        precaution3:"Isolation: If infected, stay isolated to prevent spreading the virus."
      }
    )
 
   this.array.push({
       name:'Eczema',
       precaution1:"Moisturize: Keep your skin well-moisturized with hypoallergenic lotions.",
       precaution2:"Avoid Triggers: Identify and avoid allergens or irritants that can trigger eczema.",
       precaution3:"Gentle Cleansing: Use mild soaps and lukewarm water for bathing."
       }
  );
  this.array.push({
    name:"Psoriasis",
    precaution1:"Moisturize: Use thick creams and ointments to keep your skin hydrated.",
    precaution2:"Avoid Triggers: Stress, smoking, and certain medications can trigger psoriasis, so manage these factors.",
    precaution3:"Healthy Lifestyle: Maintain a healthy diet and exercise regularly."
     
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
