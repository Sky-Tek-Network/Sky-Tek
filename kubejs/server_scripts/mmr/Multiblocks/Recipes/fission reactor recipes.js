ServerEvents.recipes(event => {
    event.recipes.modular_machinery_reborn.machine_recipe("mmr:fission_reactor", 1)
    
    .width(160)
    .height(40)
    .requireChemical('1000000x mekanism:fissile_fuel', 0, 0)
    .requireFluid('10000000x mekanism:hydrogen', 0, 20)
    .produceChemical('1000x mekanism:antimatter', 80, 0)
             .progressData(
    ProgressData.create()
      .x(20)
      .y(1)
     )
});