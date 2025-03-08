import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { PrecautionComponent } from './precaution/precaution.component';
import { CameraPageComponent } from './camera-page/camera-page.component';
import { ResultComponent } from './result/result.component';

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent,
        children:[

            {
                 path:'camera-page',
                 component:CameraPageComponent
            },
            {
                path:'result',
                component:ResultComponent
            }
        ]
    }
    // ,{
    //     path:'**',
    //     redirectTo:'home'
    // }
    ,
    {
        path:'details',
        component:DetailsComponent,
    },
    {
        path:'precaution',
        component:PrecautionComponent
    }
];
