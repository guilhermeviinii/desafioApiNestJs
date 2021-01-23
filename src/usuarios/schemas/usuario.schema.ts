import * as mongoose from 'mongoose';
import { Role } from 'src/auth/shared/role.enum';

export const UsuarioSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    cidade: String,
    estado: String,
    usuario: String,
    senha: String,
    role: [],
})