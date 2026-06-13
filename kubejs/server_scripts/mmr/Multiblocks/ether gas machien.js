MMREvents.machines(event => {
  event.create("mmr:ether_gas_machine") 
    .name("Ether Gas Machine")
    .color("#000000ff")
.structure(
MMRStructureBuilder.create()
.pattern([["aaaaa","abbba","abbba","abbba","aaaaa"],["agcfa","cdddc","cdedc","cdddc","accca"],["acmca","chhhc","chhhc","chhhc","accca"],["acica","chhhc","chhhc","chhhc","accca"],["aaaaa","aaaaa","aaaaa","aaaaa","aaaaa"]])
.keys({
    "a": "mysticalagriculture:witherproof_bricks",
    "b": "minecraft:soul_sand",
    "c": "mysticalagriculture:witherproof_glass",
    "d": "minecraft:wither_rose",
    "e": "minecraft:wither_skeleton_skull",            
    "f": "modular_machinery_reborn:energyinputhatch_ultimate",
    "g": "modular_machinery_reborn:fluidoutputhatch_vacuum",   
    "h": "minecraft:air",
    "i": "#modular_machinery_reborn:parallelhatch"}))})