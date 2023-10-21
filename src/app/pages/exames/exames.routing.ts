import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExamesCadastroComponent } from "./exames-cadastro/exames-cadastro.component";
import { ExamesListaComponent } from "./exames-lista/exames-lista.component";


const routes: Routes = [
    {
        path: '', component: ExamesListaComponent
    },
    {
        path: 'novo', component: ExamesCadastroComponent
    },
    {
        path: ':id', component: ExamesCadastroComponent
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class ExamesRoutingModule { }