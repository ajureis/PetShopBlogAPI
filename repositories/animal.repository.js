import Animal from "../models/animal.model.js";
import Proprietario from "../models/proprietario.model.js";

async function insertAnimal(animal) {
  try {
    return await Animal.create(animal);
  } catch (err) {
    throw err;
  }
}

async function getAnimais() {
  try {
    return await Animal.findAll({
      include: [
        {
          model: Proprietario,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function getAnimal(id) {
  try {
    return await Animal.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function deleteAnimal(id) {
  try {
    await Animal.destroy({
      where: {
        animalId: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function updateAnimal(animal) {
  try {
    await Animal.update(animal, {
      where: {
        animalId: animal.animalId,
      },
    });
    return await getAnimal(animal.animalId);
  } catch (err) {
    throw err;
  }
}

export default {
  insertAnimal,
  getAnimais,
  getAnimal,
  updateAnimal,
  deleteAnimal,
};
