import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OwnerViewComponent } from './owner-view/owner-view.component';
import { CustomerViewComponent } from './cutsomer-view/customer-view.component';
import { AuthGuardService, CanViewAsCustomer, CanViewAsOwner } from './services/auth-guard.service';
import { GeorgiaComponent } from './contact/georgia/georgia.component';
import { BulgariaComponent } from './contact/bulgaria/bulgaria.component';

export const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { 
        path: 'contact', 
        component: ContactComponent,
        //canActivate: [AuthGuardService]
        children: [
            { path: 'georgia', component: GeorgiaComponent },
            { path: 'bulgaria', component: BulgariaComponent }
        ]
    },
    {  
        path: 'customer', 
        component: CustomerViewComponent,
        canActivate: [ AuthGuardService, CanViewAsCustomer ]
    },
    { 
        path: 'owner', 
        component: OwnerViewComponent,
        canActivate: [AuthGuardService, CanViewAsOwner],
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: AppComponent } //this must be always last to not mess up the path matching
];
