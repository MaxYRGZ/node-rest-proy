const { connectMysql } = require('../dbconnection');

class ConsejoSeguridadModel {
    static async consultarConsejos() {
        let db = await connectMysql();
        let query = db('AnuncioConsejoSeguridad'); // Reemplaza 'AnuncioConsejoSeguridad' por el nombre de tu tabla de consejos de seguridad
        return await query;
    }

    static async consultarConsejoPorId(id) {
        let db = await connectMysql();
        return await db('AnuncioConsejoSeguridad').where('id_anuncio', id); // Reemplaza 'id_anuncio' por el nombre de la columna que representa el ID de consejo en tu tabla
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('AnuncioConsejoSeguridad').insert(datos).returning('id_anuncio');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('AnuncioConsejoSeguridad').where('id_anuncio', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_anuncio'] = id;
        await db('AnuncioConsejoSeguridad').where('id_anuncio', id).del();
        await db.insert(newData).into('AnuncioConsejoSeguridad');
        return id;
    }

    static async actualizarParcial(id, updatedFields) {
        let db = await connectMysql();
        return await db('AnuncioConsejoSeguridad').where('id_anuncio', id).update(updatedFields);
    }
}

module.exports = ConsejoSeguridadModel;
