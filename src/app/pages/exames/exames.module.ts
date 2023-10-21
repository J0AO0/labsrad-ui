import { NgModule } from "@angular/core";
import { PrimeNGModule } from "src/app/primeng.module";
import { SharedModule } from "src/app/shared/shared.module";
import { ExamesRoutingModule } from "./exames.routing";
import { ExamesListaComponent } from "./exames-lista/exames-lista.component";
import { ExamesCadastroComponent } from "./exames-cadastro/exames-cadastro.component";

@NgModule({
    declarations: [
        ExamesListaComponent,
        ExamesCadastroComponent
    ],
    imports: [
        PrimeNGModule,
        ExamesRoutingModule,
        SharedModule
    ]
})

export class ExamesModule {}