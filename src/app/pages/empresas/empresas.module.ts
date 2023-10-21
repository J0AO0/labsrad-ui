import { NgModule } from "@angular/core";
import { PrimeNGModule } from "src/app/primeng.module";
import { SharedModule } from "src/app/shared/shared.module";
import { EmpresasListaComponent } from "./empresas-lista/empresas-lista.component";
import { EmpresasCadastroComponent } from "./empresas-cadastro/empresas-cadastro.component";
import { EmpresasRoutingModule } from "./empresas.routing";


@NgModule({
    declarations: [
        EmpresasListaComponent,
        EmpresasCadastroComponent
    ],
    imports: [
        PrimeNGModule,
        EmpresasRoutingModule,
        SharedModule
    ]
})

export class EmpresasModule {}