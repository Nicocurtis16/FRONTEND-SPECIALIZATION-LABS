import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YourInfoComponent} from "./Component/Steps/your-info/your-info.component"; import{ SelectPlanComponent} from "./Component/Steps/select-plan/select-plan.component"; import{AddOnsComponent} from "./Component/Steps/add-ons/add-ons.component"; import {SummaryComponent} from "./Component/Steps/summary/summary.component";
export const routes: Routes = [
  { path: 'step1', component: YourInfoComponent },
  { path: 'step2', component: SelectPlanComponent },
  { path: 'step3', component: AddOnsComponent },
  { path: 'step4', component: SummaryComponent },
  { path: '', redirectTo: '/step1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
