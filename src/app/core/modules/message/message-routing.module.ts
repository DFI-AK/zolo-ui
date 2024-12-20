import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from '../../UI/chats/chats.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';

const routes: Routes = [
  {
    path: "",
    component: ChatsComponent,
    title: "Messages",
    data: { animation: "chatPage" },
  },
  { path: "message", component: ChatBoxComponent, data: { animation: "messagePage" } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule { }
