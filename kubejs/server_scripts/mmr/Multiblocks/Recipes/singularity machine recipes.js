ServerEvents.recipes(event => {
  const MATERIAL_MAP = {
    'allthemodium': 'allthemodium:allthemodium_ingot',
    'aluminum': 'alltheores:aluminum_ingot',
    'analog_circuit': 'modern_industrialization:analog_circuit',
    'awakened_draconium': 'draconicevolution:awakened_draconium_ingot',
    'black_iron': 'extendedcrafting:black_iron_ingot',
    'bronze': 'alltheores:bronze_ingot',
    'certus_quartz': 'ae2:certus_quartz_crystal',
    'charged_ember_crystal': 'appgen:ember_crystal_charged',
    'coal': 'minecraft:coal',
    'copper': 'minecraft:copper_ingot',
    'crystal_matrix': 'avaritia:crystal_matrix_ingot',
    'diamond': 'minecraft:diamond',
    'draconium': 'draconicevolution:draconium_ingot',
    'electrum': 'alltheores:electrum_ingot',
    'emerald': 'minecraft:emerald',
    'enderium': 'alltheores:enderium_ingot',
    'entro': 'extendedae:entro_crystal',
    'fish_big': 'extendedae:fishbig',
    'fluix': 'ae2:fluix_crystal',
    'glowstone': 'minecraft:glowstone_dust',
    'gold': 'minecraft:gold_ingot',
    'iesnium': 'occultism:iesnium_ingot',
    'imperium': 'mysticalagriculture:imperium_ingot',
    'inferium': 'mysticalagriculture:inferium_ingot',
    'invar': 'alltheores:invar_ingot',
    'iron': 'minecraft:iron_ingot',
    'lapis_lazuli': 'minecraft:lapis_lazuli',
    'lead': 'alltheores:lead_ingot',
    'mana_gem': 'ars_nouveau:source_gem',
    'netherite': 'minecraft:netherite_ingot',
    'nether_star': 'minecraft:nether_star',
    'neutronium': 'avaritia:neutron_ingot',
    'nickel': 'alltheores:nickel_ingot',
    'osmium': 'alltheores:osmium_ingot',
    'pink_slime_ingot': 'industrialforegoing:pink_slime_ingot',
    'platinum': 'alltheores:platinum_ingot',
    'prometheum': 'oritech:prometheum_ingot',
    'prudentium': 'mysticalagriculture:prudentium_ingot',
    'quartz': 'minecraft:quartz',
    'redstone': 'minecraft:redstone',
    'redstone_crystal': 'appflux:charged_redstone',
    'refined_glowstone': 'mekanism:ingot_refined_glowstone',
    'stainless_steel': 'alltheores:steel_ingot',
    'refined_obsidian': 'mekanism:ingot_refined_obsidian',
    'replica_ingot': 'replication:replica_ingot',
    'signalum': 'alltheores:signalum_ingot',
    'silver': 'alltheores:silver_ingot',
    'sky_bronze': 'ae2:sky_stone_block',
    'sky_osmium': 'megacells:sky_osmium_ingot',
    'sky_stone': 'ae2:sky_stone_block',
    'steel': 'alltheores:steel_ingot',
    'supremium': 'mysticalagriculture:supremium_ingot',
    'tertium': 'mysticalagriculture:tertium_ingot',
    'time_crystal': 'justdirethings:time_crystal',
    'tin': 'alltheores:tin_ingot',
    'unobtainium': 'allthemodium:unobtainium_ingot',
    'uranium': 'alltheores:uranium_ingot',
    'vibranium': 'allthemodium:vibranium_ingot'
  };

Object.keys(MATERIAL_MAP).forEach(key => {
    let itemId = MATERIAL_MAP[key];

    event.recipes.modular_machinery_reborn.machine_recipe("mmr:singularity_machine", 1)
      .width(248)
      .height(278)
      .requireEnergyPerTick(500000)
      .requireItem(Item.of(itemId, 10000), 30, 0)                    
      .requireFluid(Fluid.of('minecraft:lava', 10000), 30, 20)
      .produceItem(Item.of(`kubejs:dummy_${key}_singularity`), 90, 0) 
      .produceItem(`kubejs:dummy_${key}_singularity`, 1.0, 90, 0)
      
});
  });