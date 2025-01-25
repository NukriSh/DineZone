import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OwnerViewComponent } from './owner-view/owner-view.component';
import { CutomerViewComponent } from './cutomer-view/cutomer-view.component';

export const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'customer', component: CutomerViewComponent },
    { path: 'owner', component: OwnerViewComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: AppComponent } //this must be always last to not mess up the path matching
];
