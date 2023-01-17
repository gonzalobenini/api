//import {pool} from '../db.js' // usar el '.js' cuando uso mis propios modulos
import {pool} from '../db.js' // usar el '.js' cuando uso mis propios modulos

export const getTarjetas = async (req,res) => {
    try {    
        const result = await pool.query('SELECT * FROM tarjeta');
        res.json(result[0]); // para retornar el valor
        
        console.log(req.get('host'),req.get('origin'));
    } catch(error) {
        return res.status(500).json({message:"Error al leer en la base de datos"})
    }
};

export const getTarjeta = async (req,res) => {
    try {
        const [filas] = await pool.query('SELECT * FROM tarjeta WHERE dni = ' + req.params.id);
        console.log(filas);
    
        if (filas.length <= 0) {return res.status(404).json({message:"Tarjeta no encontrada"})}
        res.json(filas[0])
    } catch (error) {
        return res.status(500).json({message:"Error al leer en la base de datos"})
    }
}

export const crearTarjeta = async (req,res) => {
    try {
        const { dni, nombreCompleto, anioNacimiento } = req.body;
        const [fila] = await pool.query('INSERT INTO tarjeta (dni,nombreCompleto,anioNacimiento) VALUES(?, ?, ?)',[dni, nombreCompleto, anioNacimiento])
        res.send(fila)
    } catch (error) {
        return res.status(500).json({message:"Error al leer en la base de datos"})
    }
};

export const borrarTarjeta = async (req,res) => {
    try {
        const {result} = await pool.query('DELETE FROM tarjeta WHERE dni = ?',[req.params.id]);
        console.log(result);
    
        if (result.affectedRows <= 0) { res.status(404).json({"message":"Tarjeta no existente"})}
        res.status(204); // este codigo significa todo fue bien pero que no se le responde nada al cliente.
    } catch (error) {
        return res.status(500).json({message:"Error al leer en la base de datos"})        
    }
}

export const modificarTarjeta = async (req,res) => {
    try {
        const dni = req.params.id;
        const {nombreCompleto,anioNacimiento} = req.body;
        
        const [result] = await pool.query('UPDATE tarjeta SET nombreCompleto = IFNULL(?,nombreCompleto), anioNacimiento = IFNULL(?,anioNacimiento) WHERE dni = ?',[nombreCompleto, anioNacimiento, dni]);
        console.log(result);
        // El IFNULL nos permite preguntarnos si el dato existe, en caso que lo haga se devuelve ese mismo dato, sino se devuelve el valor secundario.
    
        if (result.affectedRows <= 0) return res.status(404).json({"message":"Tarjeta no encontrada"});
        res.status(204);
    } catch (error) {
        return res.status(500).json({message:"Error al leer en la base de datos"})        
    }
}