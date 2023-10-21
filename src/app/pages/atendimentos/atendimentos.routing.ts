import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AtendimentosListaComponent } from "./atendimentos-lista/atendimentos-lista.component";
import { AtendimentosCadastroComponent } from "./atendimentos-cadastro/atendimentos-cadastro.component";


const routes: Routes = [
    {
        path: '', component: AtendimentosListaComponent
    },
    {
        path: 'novo', component: AtendimentosCadastroComponent
    },
    {
        path: ':id', component: AtendimentosCadastroComponent
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class AtendimentosRoutingModule { }