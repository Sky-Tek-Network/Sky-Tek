StartupEvents.registry('item', event => {
  const MATERIALS = [
    'allthemodium', 'aluminum', 'analog_circuit', 'awakened_draconium', 
    'black_iron', 'bronze', 'certus_quartz', 'charged_ember_crystal', 
    'coal', 'copper', 'crystal_matrix', 'diamond', 'draconium', 
    'electrum', 'emerald', 'enderium', 'entro', 'fish_big', 
    'fluix', 'glowstone', 'gold', 'iesnium', 'imperium', 
    'inferium', 'invar', 'iron', 'lapis_lazuli', 'lead', 
    'mana_gem', 'netherite', 'nether_star', 'neutronium', 
    'nickel', 'osmium', 'pink_slime_ingot', 'platinum', 
    'prometheum', 'prudentium', 'quartz', 'redstone', 
    'redstone_crystal', 'refined_glowstone', 'stainless_steel', 
    'refined_obsidian', 'replica_ingot', 'signalum', 'silver', 
    'sky_bronze', 'sky_osmium', 'sky_stone', 'steel', 
    'supremium', 'tertium', 'time_crystal', 'tin', 
    'unobtainium', 'uranium', 'vibranium'
  ];

  MATERIALS.forEach(key => {
    event.create(`dummy_${key}_singularity`)
      .displayName(`${key.replace(/_/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Singularity`)
      .texture('kubejs:item/singularidade_padrao') 
      .glow(true);
  });
});