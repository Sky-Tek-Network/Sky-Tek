MMREvents.machines(event => {
  event.create("mmr:anti_matter_generator") 
    .name("Anti Matter Generator")
    .color("#5316cc")
.structure(
MMRStructureBuilder.create()
.pattern([["bccbdbccb","bbbaaabbb","baaaaaaab","abaaaaaba","aabaaabaa","aaababaaa","aaaabaaaa"],["ccfgggfcc","fbaaaaabf","baaaaaaab","ebaaaaabe","eebaaabee","eeebabeee","aeeebeeea"],["ccbfmfbcc","fbaaaaabf","baaaaaaab","ebaaaaabe","eebaaabee","eeebabeee","aeeebeeea"],["ccfbhbfcc","fbaaaaabf","baaaaaaab","abaaaaaba","aebaaabea","aeebabeea","aaaabaaaa"],["bccbbbccb","bbbbbbbbb","cbbbbbbbc","ccbbbbbcc","cccbbbccc","ccccbcccc","ccccccccc"]])
.keys({
    "a": "draconicevolution:draconium_block",
    "b": "draconicevolution:awakened_draconium_block",
    "c": "minecraft:air",
    "d": "modular_machinery_reborn_mekanism:chemicalinputhatch_tiny",
    "e": "allthecompressed:antimatter_block",
    "f": "allthecompressed:gold_block_4x",
    "g": "modular_machinery_reborn:energyoutputhatch_ultimate",     
    "h": "#modular_machinery_reborn:parallelhatch",}))
})