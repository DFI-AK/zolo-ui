import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotificationsComponent } from './core/UI/notifications/notifications.component';

export const routes: Routes = [
    { path: "", component: HomeComponent, title: "Zolo", data: { animation: "homePage" } },
    { path: "notifications", component: NotificationsComponent, title: "Notifications" },
    { path: "chats", loadChildren: () => import('./core/modules/message/message.module').then(m => m.MessageModule) }
];
