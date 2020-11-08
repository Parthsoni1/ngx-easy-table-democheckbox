import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './components/login/login.component';
import { TableComponent } from './components/table/table.component';


const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Table', component: TableComponent }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
