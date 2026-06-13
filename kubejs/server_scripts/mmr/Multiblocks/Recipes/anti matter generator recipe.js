ServerEvents.recipes(event => {
  event.recipes.modular_machinery_reborn.machine_recipe("mmr:anti_matter_generator", 1)
    .width(120)
    .height(80)
    .requireChemical("1x mekanism:antimatter", 0, 0)
    .produceEnergy(100000000, 80, 0)
     .progressData(
    ProgressData.create()
      .x(20)
      .y(1)
     )
})