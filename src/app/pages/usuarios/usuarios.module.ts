import { NgModule } from "@angular/core";
import { PrimeNGModule } from "src/app/primeng.module";
import { SharedModule } from "src/app/shared/shared.module";
import { UsuariosListaComponent } from "./usuarios-lista/usuarios-lista.component";
import { UsuariosCadastroComponent } from "./usuarios-cadastro/usuarios-cadastro.component";
import { UsuariosRoutingModule } from "./usuarios.routing";

@NgModule({
    declarations: [
        UsuariosListaComponent,
        UsuariosCadastroComponent
    ],
    imports: [
        PrimeNGModule,
        UsuariosRoutingModule,
        SharedModule
    ]
})

export class UsuariosModule {}