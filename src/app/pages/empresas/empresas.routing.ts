import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmpresasListaComponent } from "./empresas-lista/empresas-lista.component";
import { EmpresasCadastroComponent } from "./empresas-cadastro/empresas-cadastro.component";


const routes: Routes = [
    {
        path: '', component: EmpresasListaComponent
    },
    {
        path: 'novo', component: EmpresasCadastroComponent
    },
    {
        path: ':id', component: EmpresasCadastroComponent
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class EmpresasRoutingModule { }