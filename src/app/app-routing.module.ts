import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./pages/index/index.component";
import {PostsComponent} from "./pages/posts/posts.component";

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'posts',component:PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
