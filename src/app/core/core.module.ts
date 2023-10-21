import { NgModule } from "@angular/core";
import { AtendimentosService } from "../pages/atendimentos/atendimentos.service";
import { ConveniosService } from "../pages/convenios/convenios.service";
import { EmpresasService } from "../pages/empresas/empresas.service";
import { ExamesService } from "../pages/exames/exames.service";
import { PacientesService } from "../pages/pacientes/pacientes.service";
import { PatrimonioService } from "../pages/patrimonio/patrimonio.service";
import { UsuariosService } from "../pages/usuarios/usuarios.service";

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    AtendimentosService,
    ConveniosService,
    EmpresasService,
    ExamesService,
    PacientesService,
    PatrimonioService,
    UsuariosService
  ]
})
export class CoreModule {}