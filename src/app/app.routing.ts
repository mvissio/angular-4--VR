import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FrutaComponent} from './fruta/fruta.component';
import {EmpleadoComponent} from './empleado/empleado.component';

const appRoutes: Routes = [
  {path: '', component: EmpleadoComponent},
  {path: 'empleado', component: EmpleadoComponent},
  {path: 'fruta', component: FrutaComponent},
  {path: '**', component: EmpleadoComponent}
];

export const  appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
