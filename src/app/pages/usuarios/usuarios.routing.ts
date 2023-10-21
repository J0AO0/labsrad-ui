import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsuariosListaComponent } from "./usuarios-lista/usuarios-lista.component";
import { UsuariosCadastroComponent } from "./usuarios-cadastro/usuarios-cadastro.component";

const routes: Routes = [
    {
        path: '', component: UsuariosListaComponent
    },
    {
        path: 'novo', component: UsuariosCadastroComponent
    },
    {
        path: ':id', component: UsuariosCadastroComponent
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class UsuariosRoutingModule { }