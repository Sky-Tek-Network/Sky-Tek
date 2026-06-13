MMREvents.machines(event => {
  event.create("mmr:singularity_machine")
    .name("Singularity Machine")
    .color("#b41919ff")
.structure(
MMRStructureBuilder.create()
.pattern([["aca","aba","aba","aba","aba"],["chc","gdf","edc","cdc","cdc"],["ama","aba","aba","aba","aba"]])
.keys({"a":"minecraft:air","b":"modular_machinery_reborn:casing_vent[connect_textures=true]","c":"modular_machinery_reborn:casing_reinforced[connect_textures=true]","d":"modular_machinery_reborn:casing_gearbox[connect_textures=true]","e":"#modular_machinery_reborn:outputbus","f":"#modular_machinery_reborn:fluidinputhatch","g":"#modular_machinery_reborn:inputbus","h":"#modular_machinery_reborn:parallelhatch"}))
})