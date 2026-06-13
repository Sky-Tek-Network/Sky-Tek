ServerEvents.recipes(event => {
    event.recipes.modular_machinery_reborn.machine_recipe("mmr:ether_gas_machine", 10)
    .width(120)
    .height(80)
    .produceFluid('1000x industrialforegoing:ether_gas', 80, 0)
    .requireEnergyPerTick(1000000, 0, 0)
         .progressData(
    ProgressData.create()
      .x(20)
      .y(1)
     )
});