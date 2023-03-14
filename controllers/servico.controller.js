import servicoService from "../services/servico.service.js";

async function createServico(req, res, next) {
  try {
    let servico = req.body;
    if (!servico.descricao || !servico.valor || !servico.animalId) {
      throw new Error("Descrição, valor, e Animal ID são obrigatórios.");
    }
    servico = await servicoService.createServico(servico);
    res.send(servico);
    logger.info(`POST /servico - ${JSON.stringify(servico)}`);
  } catch (err) {
    next(err);
  }
}

async function getServicos(req, res, next) {
  try {
    res.send(await servicoService.getServicos(req.query.proprietarioId));
    logger.info("GET /servico");
  } catch (err) {
    next(err);
  }
}

async function getServico(req, res, next) {
  try {
    res.send(await servicoService.getServico(req.params.id));
    logger.info("GET /servico");
  } catch (err) {
    next(err);
  }
}

export default {
  createServico,
  getServicos,
  getServico,
};
