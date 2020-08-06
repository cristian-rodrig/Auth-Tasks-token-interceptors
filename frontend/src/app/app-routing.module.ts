import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Componentes
import { TaskComponent } from './components/task/task.component';
import { PrivateTaskComponent } from './components/private-task/private-task.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:" ", redirectTo:'/tasks' , pathMatch:'full'},
  {path:"tasks", component: TaskComponent },
  {path:"login", component: LoginComponent },
  {path:"register", component: RegisterComponent },
  {path:"private", component: PrivateTaskComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
