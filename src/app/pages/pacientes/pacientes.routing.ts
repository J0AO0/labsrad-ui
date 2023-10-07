import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { PacientesListaComponent } from './pacientes-lista/pacientes-lista.component';
import { PacienteCadastroComponent } from './paciente-cadastro/paciente-cadastro.component';




const routes: Routes = [
    {
        path: '', component: PacientesListaComponent
    },
    {
        path: 'novo', component: PacienteCadastroComponent
    },
    {
        path: 'id', component: PacienteCadastroComponent
    }
]


@NgModule ({
    imports: [
            RouterModule.forChild(routes)
        ],
        exports: [RouterModule]

})


export class PacientesRoutingModule {}