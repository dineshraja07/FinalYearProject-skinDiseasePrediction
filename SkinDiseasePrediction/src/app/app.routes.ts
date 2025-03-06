import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { PrecautionComponent } from './precaution/precaution.component';

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent
    }
    // ,{
    //     path:'**',
    //     redirectTo:'home'
    // }
    ,
    {
        path:'details',
        component:DetailsComponent
    },
    {
        path:'precaution',
        component:PrecautionComponent
    }
];
