import { itensAtendimentos } from "./itensAtendimentos.model";
import { Pacientes } from "./pacientes.model";
import { Usuarios } from "./usuarios.model";

export class Atendimentos {
    id?: number;
    idficha?: number;
    datalancamento?: Date;
    total?: number;
    formapagamento?: string;
    usuario = new Usuarios();
    paciente = new Pacientes();
    status: boolean;
    itensAtendimentos = new Array<itensAtendimentos>();
}