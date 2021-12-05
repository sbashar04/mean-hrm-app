import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeCreateComponent } from './components/screens/employee/employee-create/employee-create.component';
import { DashboardHomeComponent } from './components/screens/dashboard-home/dashboard-home.component';
import { EmployeeEditComponent } from './components/screens/employee/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/screens/employee/employee-list/employee-list.component';

const routes: Routes = [
  { path: '', component: DashboardHomeComponent },
  {
    path: 'employee', children: [
      {path: 'list', component: EmployeeListComponent},
      {path: 'create', component: EmployeeCreateComponent},
      {path: 'edit/:id', component: EmployeeEditComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
