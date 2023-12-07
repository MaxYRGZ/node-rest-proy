const { connectMysql } = require('../dbconnection');

class AnuncioModel {
    static async consultarAnuncios() {
        let db = await connectMysql();
        let query = db('UsuarioAnuncioConsejo'); // Reemplaza 'UsuarioAnuncioConsejo' por el nombre de tu tabla de anuncios
        return await query;
    }

    static async consultarAnuncioPorId(id) {
        let db = await connectMysql();
        return await db('UsuarioAnuncioConsejo').where('id_anuncio', id); // Reemplaza 'id_anuncio' por el nombre de la columna que representa el ID de anuncio en tu tabla
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('UsuarioAnuncioConsejo').insert(datos).returning('id_anuncio');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('UsuarioAnuncioConsejo').where('id_anuncio', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_anuncio'] = id;
        await db('UsuarioAnuncioConsejo').where('id_anuncio', id).del();
        await db.insert(newData).into('UsuarioAnuncioConsejo');
        return id;
    }

    static async actualizarParcial(id, updatedFields) {
        let db = await connectMysql();
        return await db('UsuarioAnuncioConsejo').where('id_anuncio', id).update(updatedFields);
    }
}

module.exports = AnuncioModel;
