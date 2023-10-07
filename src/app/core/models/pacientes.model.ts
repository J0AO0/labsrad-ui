import { Tenant } from "./tenant.model";

export class Pacientes {
    id?: number;
    nome?: string;
    cpf?: string;
    telefone?: string;
    datanasc?: Date;
    sexo?: string;
    status?: boolean;
    tenant = new Tenant();
}