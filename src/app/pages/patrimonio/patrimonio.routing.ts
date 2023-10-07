import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

//components
import { PatrimoniosListaComponent } from './patrimonios-lista/patrimonios-lista.component';
import { PatrimonioCadastroComponent } from './patrimonio-cadastro/patrimonio-cadastro.component';


const routes: Routes = [
    {
        path: '', component: PatrimoniosListaComponent
    },
    {
        path: 'novo', component: PatrimonioCadastroComponent
    },
    {
        path: 'id', component: PatrimonioCadastroComponent
    }
]


@NgModule ({
    imports: [
            RouterModule.forChild(routes)
        ],
        exports: [RouterModule]

})


export class PatrimonioRoutingModule {}