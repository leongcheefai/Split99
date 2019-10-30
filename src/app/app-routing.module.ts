import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplitAmountComponent } from './components/split-amount/split-amount.component';


const routes: Routes = [
  {
    path: '',
    component: SplitAmountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
