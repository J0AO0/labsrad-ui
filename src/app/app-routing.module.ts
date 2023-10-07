import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'convenios' , loadChildren: () => 
    import('./pages/convenios/convenios.module').then(m => m.ConveniosModule)
  },
  {
    path:'pacientes', loadChildren: () => 
    import('./pages/pacientes/pacientes.module').then(m => m.PacientesModule)
},
  {
    path:'patrimonio', loadChildren: () => 
    import('./pages/patrimonio/patrimonio.module').then(m => m.PatrimonioModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
