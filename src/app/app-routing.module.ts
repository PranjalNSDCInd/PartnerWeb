import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnerLoginComponent } from './modules/pages/partner-login/partner-login.component';

const routes: Routes = [
  {path: 'partner-login', component: PartnerLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
