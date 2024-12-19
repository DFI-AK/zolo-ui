import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from '../../UI/chats/chats.component';

const routes: Routes = [
  { path: "", component: ChatsComponent, title: "Messages", data: { animation: "chatPage" } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule { }
