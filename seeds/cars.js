exports.seed = async function (knex) {
  await knex("car-dealer").insert([
    {
      make: "Cadillac",
      model: "Deville",
      VIN: "LL820TPOS021NM",
      mileage: 109887,
    },
    {
      make: "Oldsmobile",
      model: "Cutlass",
      VIN: "HD820JIOS021IS",
      mileage: 248330,
    },
    {
      make: "Buick",
      model: "Regal",
      VIN: "PP907TYOS043ER",
      mileage: 87634,
    },
  ]);
};
