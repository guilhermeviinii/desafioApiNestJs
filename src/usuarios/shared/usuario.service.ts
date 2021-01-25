import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { assert } from 'console';
import { Model } from 'mongoose';
import { Usuarios } from './usuarios';
@Injectable()
export class UsuarioService {
    constructor(@InjectModel('Usuario') private readonly usuarioModel: Model<Usuarios>) { }


    async getAll() {
        return await this.usuarioModel.find().exec();
    }
    async getById(id: string) {
        return await this.usuarioModel.findById(id).exec();
    }
    async getByUsuario(usuario: string) {
        return await this.usuarioModel.findOne({ usuario }).exec()
    }
    async create(usuario: Usuarios) {
        const createUsuario = new this.usuarioModel(usuario)
        return createUsuario.save();

    }
    async update(id: string, usuario: Usuarios) {
        await this.usuarioModel.updateOne({ _id: id }, usuario).exec()
        return this.getById(id)
    }

    async delete(id: string) {
        return await this.usuarioModel.deleteOne({ _id: id }).exec();
    }

}
