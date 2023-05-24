import express from "express";
import { login } from "../controllers/auth.js";
import { crearComentario } from "../controllers/auth.js";
import { updateUsuario } from "../controllers/auth.js";
import { deleteUsuario } from "../controllers/auth.js";
import { deletecomentario } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/comentar", crearComentario);
router.put("/updateUsuario/:usuarioId", updateUsuario);
router.delete("/deleteUsuario/:usuarioId", deleteUsuario);
router.delete("/deleteComentario/:comentarioId", deletecomentario);


export default router;
