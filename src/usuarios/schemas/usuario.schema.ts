import * as mongoose from 'mongoose';
import { Role } from 'src/auth/shared/role.enum';

export const UsuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    cidade: {
        type: String,
        required: false
    },
    estado:  {
        type: String,
        required: false
    },
    usuario:  {
        type: String,
        required: true
    },
    senha:  {
        type: String,
        required: true
    },
    role:  {
        type: Array,
        required: true
    },
})