import { Router } from "express";
import { getTarjetas, crearTarjeta, getTarjeta, borrarTarjeta, modificarTarjeta } from "../controllers/tarjetas.controller.js";

const router = Router();

router.get('/',getTarjetas);

router.get('/:id',getTarjeta);

router.post('/', crearTarjeta);

router.patch('/:id', modificarTarjeta);
// Put es para cambiar todos los datos estrictamente.
// Patch es para cambiar algunos.

router.delete('/:id', borrarTarjeta);

export default router // el export default le va a permitir ponerle el nombre que quiera