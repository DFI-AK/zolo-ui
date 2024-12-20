import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from '../../UI/user-profile/user-profile.component';
import { PostTileComponent } from './components/post-tile/post-tile.component';
import { ReelsTileComponent } from './components/reels-tile/reels-tile.component';
import { TagTileComponent } from './components/tag-tile/tag-tile.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  {
    path: "",
    component: UserProfileComponent,
    title: "Profile",
    children: [
      { path: "images", component: PostTileComponent },
      { path: "reels", component: ReelsTileComponent },
      { path: "tag", component: TagTileComponent },
    ]
  },
  { path: "settings", component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
