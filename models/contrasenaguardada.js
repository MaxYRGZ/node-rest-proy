const { connectMysql } = require('../dbconnection');

class ContraseñaGuardadaModel {
    static async consultarContraseñas() {
        let db = await connectMysql();
        let query = db('ContrasenaGuardada'); // Reemplaza 'contraseñaGuardada' por el nombre de tu tabla de contraseñas guardadas
        return await query;
    }

    static async consultarContraseñaPorId(id) {
        let db = await connectMysql();
        return await db('ContrasenaGuardada').where('id_contraseña', id); // Reemplaza 'id_contraseña' por el nombre de la columna que representa el ID de contraseña en tu tabla
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('ContrasenaGuardada').insert(datos).returning('id_contraseña');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('ContrasenaGuardada').where('id_contraseña', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_contraseña'] = id;
        await db('ContrasenaGuardada').where('id_contraseña', id).del();
        await db.insert(newData).into('ContrasenaGuardada');
        return id;
    }

    static async actualizarParcial(id, updatedFields) {
        let db = await connectMysql();
        return await db('ContrasenaGuardada').where('id_contraseña', id).update(updatedFields);
    }
}

module.exports = ContraseñaGuardadaModel;
