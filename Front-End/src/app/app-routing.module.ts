import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { ReadComponent } from './read/read.component';
import { StatComponent } from './stat/stat.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path:'', component: AuthComponent},
  {path:'edit', component: EditComponent},
  {path: 'add', component: AddComponent},
  {path: 'add/:id', component: AddComponent},
  {path:'stat', component: StatComponent},
  {path:'read', component: ReadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
