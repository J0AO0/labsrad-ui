import { NgModule } from "@angular/core";
import { PrimeNGModule } from "src/app/primeng.module";
import { PatrimoniosListaComponent } from "./patrimonios-lista/patrimonios-lista.component";
import { PatrimonioCadastroComponent } from "./patrimonio-cadastro/patrimonio-cadastro.component";
import { PatrimonioRoutingModule } from "./patrimonio.routing";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [
        PatrimoniosListaComponent,
        PatrimonioCadastroComponent
    ],
    imports: [
        PrimeNGModule,
        PatrimonioRoutingModule,
        SharedModule
    ],
})

export class PatrimonioModule {}