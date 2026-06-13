MMREvents.machines(event => {
  event.create("mmr:green_house")
    .name("Green House")
    .color("#6c8212")
    .structure(
      MMRStructureBuilder.create()
        .pattern([
          ["akmja", "efffe", "ifhfg", "efffe", "adcba"],
          ["ellle", "lnnnl", "lnonl", "lnnnl", "ellle"],
          ["eplpe", "pnnnp", "lnonl", "pnnnp", "eplpe"],
          ["epppe", "pnqnp", "pqoqp", "pnqnp", "epppe"],
          ["accca", "cnnnc", "cnqnc", "cnnnc", "accca"],
          ["naaan", "neeen", "necen", "neeen", "naaan"]
        ])
        .keys({
          "a": "modular_machinery_reborn:casing_plain",
          "b": "#modular_machinery_reborn:fluidinputhatch",
          "c": "modular_machinery_reborn:casing_gearbox",
          "d": "#modular_machinery_reborn:fluidinputhatch",
          "e": "modular_machinery_reborn:casing_vent",
          "f": "minecraft:grass_block",
          "g": "#modular_machinery_reborn:outputbus",
          "h": "minecraft:dirt",
          "i": "#modular_machinery_reborn:inputbus",
          "j": "#modular_machinery_reborn:parallelhatch",
          "k": "#modular_machinery_reborn:energyinputhatch",
          "l": "geore:allthemodium_tinted_glass",
          "n": "minecraft:air",
          "o": "minecraft:oak_log[axis=y]",
          "p": "geore:unobtainium_tinted_glass",
          "q": "minecraft:oak_leaves[distance=1,persistent=true,waterlogged=false]"
        })
    )
})