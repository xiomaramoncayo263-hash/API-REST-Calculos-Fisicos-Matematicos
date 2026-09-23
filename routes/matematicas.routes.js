import express from "express";
import { calcularAreaRectangulo, calcularAreaTriangulo, calcularAreaCirculo, calcularHipotenusa, calcularCatetoOpuesto, calcularAngulo } from "../controllers/matematicas.controllers.js";
import { validarAreaRectangulo, validarAreaTriangulo, validarAreaCirculo, validarHipotenusa, validarCatetoOpuesto, validarAngulo } from "../middlewares/matematicas.middlewares.js";

const router = express.Router();

router.post("/areaRectangulo", validarAreaRectangulo, calcularAreaRectangulo);
router.post("/areaTriangulo", validarAreaTriangulo, calcularAreaTriangulo);
router.post("/areaCirculo", validarAreaCirculo, calcularAreaCirculo);
router.post("/hipotenusa", validarHipotenusa, calcularHipotenusa);
router.post("/catetoOpuesto", validarCatetoOpuesto, calcularCatetoOpuesto);
router.post("/angulo", validarAngulo, calcularAngulo);

export default router;