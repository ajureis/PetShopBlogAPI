import servicoRepository from "../repositories/servico.repository.js";
import animalRepository from "../repositories/animal.repository.js";

async function createServico(servico) {
  if (await animalRepository.getAnimal(servico.animalId)) {
    return await servicoRepository.insertServico(servico);
  }
  throw new Error("O Animal Id informado não existe.");
}

async function getServicos(proprietarioId) {
  if (proprietarioId) {
    return await servicoRepository.getServicoByProprietarioId(proprietarioId);
  }
  return await servicoRepository.getServicos();
}

async function getServico(id) {
  return await servicoRepository.getServico(id);
}

export default {
  createServico,
  getServicos,
  getServico,
};
