import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { HeadComponent } from './components/body-parts/head/head.component';
import { ChestComponent } from './components/body-parts/chest/chest.component';
import { StomachComponent } from './components/body-parts/stomach/stomach.component';

const routes: Routes = [
  { path: '', component: BodyComponent }, 
  { path: 'head', component: HeadComponent },
  { path: 'chest', component: ChestComponent },
  { path: 'stomach', component: StomachComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
