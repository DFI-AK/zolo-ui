import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: "", component: HomeComponent, title: "Zolo", data: { animation: "homePage" } },
    { path: "chats", loadChildren: () => import('./core/modules/message/message.module').then(m => m.MessageModule) }
];
