MMREvents.machines(event => {
  event.create("mmr:fission_reactor") 
    .name("Compact Fission Reactor")
    .color("#5316cc")
.structure(
MMRStructureBuilder.create()
.pattern([["aaa","aaa","aaa"],["ama","edc","aba"],["aga","bdf","aba"],["aba","bdb","aba"],["aba","bhb","aba"],["aaa","aaa","aaa"]])
.keys({"a":"mekanismgenerators:fission_reactor_casing","b":"mekanismgenerators:reactor_glass","c":"#modular_machinery_reborn_mekanism:chemicalinputhatch","d":"mekanismgenerators:fission_fuel_assembly","e":"#modular_machinery_reborn_mekanism:chemicaloutputhatch","f":"#modular_machinery_reborn:fluidinputhatch","g":"#modular_machinery_reborn:parallelhatch","h":"mekanismgenerators:control_rod_assembly"}))
})