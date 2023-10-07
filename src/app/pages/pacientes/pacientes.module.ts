import { NgModule } from "@angular/core";
import { PrimeNGModule } from "src/app/primeng.module";
import { PacientesListaComponent } from "./pacientes-lista/pacientes-lista.component";
import { PacienteCadastroComponent } from "./paciente-cadastro/paciente-cadastro.component";
import { PacientesRoutingModule } from "./pacientes.routing";
import { SharedModule } from "src/app/shared/shared.module";



@NgModule({
    declarations: [
        PacientesListaComponent,
        PacienteCadastroComponent
    ],
    imports: [
        PrimeNGModule,
        PacientesRoutingModule,
        SharedModule
    ],
})

export class PacientesModule {}