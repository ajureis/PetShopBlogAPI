import express from "express";
import servicoController from "../controllers/servico.controller.js";

const router = express.Router();

router.post("/", servicoController.createServico);
router.get("/", servicoController.getServicos);
router.get("/:id", servicoController.getServico);

export default router;
