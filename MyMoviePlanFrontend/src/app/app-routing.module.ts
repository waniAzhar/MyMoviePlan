import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './components/movies/movies.component';
import { UpdateCardComponent } from './components/update-card/update-card.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'admin', component:AdminComponent, canActivate:[AdminGuard]},
  {path: 'movies', component:MoviesComponent, canActivate:[UserGuard]},
  {path: 'movieDetails', component:MovieDetailsComponent, canActivate:[UserGuard]},
  {path: 'updateCard', component:UpdateCardComponent, canActivate:[AdminGuard]},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
