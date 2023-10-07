export class Permissoes {
    id?: number;
    nome?: string;
    permissoes = new Permission();

}

export class Permission {
    read?: boolean;
    create?: boolean;
    update?: boolean;
    delete?: boolean;
    status?: boolean;
    todos?: boolean;
}