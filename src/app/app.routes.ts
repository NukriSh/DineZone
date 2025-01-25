import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: AppComponent } //this must be always last to not mess up the path matching
];
