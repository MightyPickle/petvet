const {
  Pet, Allergy, Chronic_disease, Vaccination,
} = require('../../db/models');

const addNewPet = async (req, res) => {
  const petForm = req.body;
  const petOwner = req.session?.user?.id;
  try {
    const newPetInfo = await Pet.create({
      name: petForm.name,
      specie: petForm.specie,
      breed: petForm.breed,
      sex: Number.parseInt(petForm.sex, 10),
      birthday: Date.parse(petForm.birthday),
      weight: Number.parseFloat(petForm.weight),
      color: petForm.color,
      sterilized: petForm.sterilized,
      sterilized_date: petForm.sterilized_date !== '' ? Date.parse(petForm.sterilized_date) : null,
      owner_id: petOwner,
    });
    const promiseArray = [];
    if (petForm.allergies.length > 0) {
      for (let i = 0; i < petForm.allergies.length; i += 1) {
        promiseArray.push(Allergy.create({
          pet_id: newPetInfo.id,
          allergy_name: petForm.allergies[i],
        }));
      }
    }
    if (petForm.chronic_diseases.length > 0) {
      for (let i = 0; i < petForm.chronic_diseases.length; i += 1) {
        promiseArray.push(Chronic_disease.create({
          pet_id: newPetInfo.id,
          disease: petForm.chronic_diseases[i],
        }));
      }
    }
    if (petForm.vaccinations.length > 0) {
      for (let i = 0; i < petForm.vaccinations.length; i += 1) {
        promiseArray.push(Vaccination.create({
          pet_id: newPetInfo.id,
          description: petForm.vaccinations[i].description,
          drug_name: petForm.vaccinations[i].drug_name,
          drug_date: Date.parse(petForm.vaccinations[i].drug_date),
        }));
      }
    }
    await Promise.all(promiseArray);

    const pet = await Pet.findOne({
      where: newPetInfo.id,
      include: [
        Allergy, Vaccination, Chronic_disease,
      ],
    });
    return res.json(pet);
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

const getAllPets = async (req, res) => {
  const AllPets = await Pet.findAll({

  });
};

module.exports = { addNewPet, getAllPets };
