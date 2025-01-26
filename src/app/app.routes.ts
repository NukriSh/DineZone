import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OwnerViewComponent } from './owner-view/owner-view.component';
import { CustomerViewComponent } from './cutsomer-view/customer-view.component';
import { AuthGuardService } from './services/auth-guard.service';

export const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { 
        path: 'contact', 
        component: ContactComponent,
        //canActivate: [AuthGuardService]
    },
    {  
        path: 'customer', 
        component: CustomerViewComponent,
        canActivate: [AuthGuardService]
    },
    { 
        path: 'owner', 
        component: OwnerViewComponent,
        canActivate: [AuthGuardService] 
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: AppComponent } //this must be always last to not mess up the path matching
];
