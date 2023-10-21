import { NgModule } from "@angular/core";
import { PrimeNGModule } from "src/app/primeng.module";
import { SharedModule } from "src/app/shared/shared.module";
import { AtendimentosListaComponent } from "./atendimentos-lista/atendimentos-lista.component";
import { AtendimentosCadastroComponent } from "./atendimentos-cadastro/atendimentos-cadastro.component";
import { AtendimentosRoutingModule } from "./atendimentos.routing";


@NgModule({
    declarations: [
        AtendimentosListaComponent,
        AtendimentosCadastroComponent
    ],
    imports: [
        PrimeNGModule,
        AtendimentosRoutingModule,
        SharedModule
    ]
})

export class ConveniosModule {}