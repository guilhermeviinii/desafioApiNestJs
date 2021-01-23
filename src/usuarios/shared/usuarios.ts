import { Document } from 'mongoose';
import { Role } from 'src/auth/shared/role.enum';

export class Usuarios extends Document {
    
    nome: string;
    idade: number;
    cidade: string;
    estado: string;
    usuario: string;
    senha: string;
    role: Role[];
}
