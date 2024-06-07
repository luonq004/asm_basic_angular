import { Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { privateRouteGuard } from './private-route.guard';
import { SignupComponent } from './page/signup/signup.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { SigninComponent } from './page/signin/signin.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [privateRouteGuard],
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: ProductListComponent,
      },
      { path: 'add', component: ProductAddComponent },
      { path: 'edit/:id', component: ProductEditComponent },
    ],
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
];
