ServerEvents.recipes(event => {
  event.shaped('createcobblestone:mechanical_generator', [
    'BEB',
    'WDL',
    'BCB'
  ], {
    B: '#c:ingots/brass',
    E: 'create:electron_tube',
    W: 'minecraft:water_bucket',
    D: 'create:mechanical_drill',
    L: 'minecraft:lava_bucket',
    C: 'create:brass_casing'
  })
  event.shaped('modular_machinery_reborn:casing_vent', [
    ' M ',
    'MEM',
    ' M '
  ], {
    M: 'modular_machinery_reborn:modularium',
    E: 'minecraft:ender_pearl'
  })
  event.shaped('modular_machinery_reborn:casing_firebox', [
    ' M ',
    'MLM',
    ' M '
  ], {
    M: 'modular_machinery_reborn:modularium',
    L: 'minecraft:lava_bucket'
  })
  event.shaped('modular_machinery_reborn:casing_gearbox', [
    ' M ',
    'MGM',
    ' M '
  ], {
    M: 'modular_machinery_reborn:modularium',
    G: 'create:gearbox'
  })
	event.shaped('avaritia:diamond_lattice', [
		'DDD',
		'DND',
		'DDD'
	], {
		D: 'minecraft:diamond',
		N: 'minecraft:netherite_ingot'
	})
    event.shaped('ae2:condenser', [
        'AFA',
        'FBF',
        'AFA'
    ], {
        A: 'ae2:cell_component_4k',
        F: 'ae2:fluix_pearl',
        B: 'ae2:fluix_crystal'
    })
  event.shaped(Item.of('integrateddynamics:menril_sapling'), [
  'AAA',
  'ABA',
  'AAA'
], {
  A:'xycraft_world:xychorium_gem_blue',
  B:'minecraft:oak_sapling'
})
  event.shaped(Item.of('minecraft:turtle_egg'), [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'minecraft:sea_pickle',
    B: 'minecraft:egg'
  })
  event.shaped(Item.of('modern_industrialization:raw_antimony_block'), [
    'ABA',
    'BAB',
    'ABA'
  ], {
    A: 'alltheores:lead_ingot',
    B: 'alltheores:silver_ingot'
  })
  event.shaped(Item.of('avaritia:eternal_singularity'), [
  '   ',
  ' A ',
  '   '
], {
  A:'extendedcrafting:ultimate_singularity'
})
    event.shaped('occultism:iesnium_ingot', [ 
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'alltheores:silver_ingot',
        B: 'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:silver"]'
    })
    event.shaped('draconicevolution:medium_chaos_frag', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'draconicevolution:awakened_draconium_ingot',
        B: 'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:coal"]'
    })
    event.shaped(Item.of('xycraft_world:kivi'), [
  'AAA',
  'ABA',
  'AAA'
], {
  A:'minecraft:coal',
  B:'minecraft:andesite'
})
    event.shaped(Item.of('create:blaze_burner'), [
  'AAA',
  'ABA',
  'AAA'
], {
  A:'solarflux:blazing_coating',
  B:'create:empty_blaze_burner'
})
    event.shaped(Item.of('minecraft:netherite_upgrade_smithing_template'), [
  'ABA',
  'ACA',
  'AAA'
], {
  A:'minecraft:diamond',
  C:'minecraft:netherite_ingot',
  B:'allthecompressed:crushed_netherrack_1x'
})

event.shaped(Item.of('minecraft:coal'), [
  '   ',
  ' A ',
  '   '
], {
  A:'geore:coal_shard'
})
event.shaped(Item.of('create:water_wheel'), [
  'AAA',
  'ABA',
  'AAA'
], {
  A: 'immersiveengineering:treated_wood_horizontal',
  B: 'create:shaft'
})
event.shaped(Item.of('create:large_water_wheel'), [
  'AAA',
  'ABA',
  'AAA'
], {
  A: 'immersiveengineering:treated_wood_horizontal',
  B: 'create:water_wheel'
})
event.shaped(Item.of('create:mechanical_mixer'), [
  ' A ',
  'BCB',
  ' E '
], {
  A: 'create:cogwheel',
  B: 'createaddition:iron_wire',
  C: 'create:andesite_casing',
  E: 'create:whisk'
})
event.shaped(Item.of('create:mechanical_press'), [
  ' A ',
  ' B ',
  ' C '
], {
  A: 'create:shaft',
  B: 'create:andesite_casing',
  C: 'allthecompressed:iron_block_1x'
})
event.shaped(Item.of('minecraft:cobweb'), [
  'AAA',
  'AAA',
  'AAA'
], {
  A: 'minecraft:string'
})
event.shaped(Item.of('exdeorum:string_mesh'), [
  'AAA',
  'ABA',
  'AAA'
], {
  A: 'minecraft:string',
  B: 'minecraft:cobweb'
})
event.shaped(Item.of('exdeorum:flint_mesh'), [
  'ABA',
  'BCB',
  'ABA'
], {
  A: 'farmersdelight:flint_knife',
  B: 'allthecompressed:flint_block',
  C: 'exdeorum:string_mesh'
})
event.shaped(Item.of('exdeorum:iron_mesh'), [
  'ABA',
  'BCB',
  'ABA'
], {
  A: 'create:minecart_coupling',
  B: 'refinedstorage:quartz_enriched_iron',
  C: 'exdeorum:flint_mesh'
})
event.shaped(Item.of('exdeorum:golden_mesh'), [
  'ABA',
  'BCB',
  'ABA'
], {
  A: 'modern_industrialization:gold_double_ingot',
  B: 'alltheores:gold_gear',
  C: 'exdeorum:iron_mesh'
})
event.shaped(Item.of('exdeorum:diamond_mesh'), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'xycraft_world:xychorium_gem_blue',
  B: 'allthecompressed:diamond_block_1x',
  C: 'apotheosis:gem_dust',
  D: 'exdeorum:golden_mesh'
})
event.shaped(Item.of('xycraft_world:xychorium_gem_blue'), [
  ' A ',
  'ABA',
  ' A '
], {
  A: 'minecraft:blue_dye',
  B: 'minecraft:diamond'
})
event.shaped(Item.of('exmachinis:gold_upgrade'), [
  'ABA',
  'CDC',
  'CCC'
], {
  A: '#c:plates/gold',
  B: 'advancednetherite:netherite_gold_ingot',
  C: 'minecraft:tinted_glass',
  D: 'create_dragons_plus:yellow_dye_bucket'
})
event.shaped(Item.of('exmachinis:diamond_upgrade'), [
  'ABA',
  'CBC',
  'ABA'
], {
  A: 'advancednetherite:netherite_diamond_ingot',
  B: 'exmachinis:gold_upgrade',
  C: 'minecraft:diamond'
})
event.shaped(Item.of('exmachinis:netherite_upgrade'), [
  'ABA',
  'CBC',
  'ABA'
], {
  A: 'minecraft:netherite_ingot',
  B: 'exmachinis:diamond_upgrade',
  C: 'advancednetherite:netherite_iron_ingot'
})
event.shaped(Item.of('industrialforegoing:machine_frame_pity'), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'ars_nouveau:source_gem',
  B: 'immersiveengineering:treated_wood_horizontal',
  C: 'create:andesite_casing',
  D: 'immersiveengineering:plate_hop_graphite'
})
event.shaped(Item.of('industrialforegoing:fluid_extractor'), [
  'ABA',
  'BCB',
  'DBD'
], {
  A: 'moderndynamics:extractor',
  B: 'extendedcrafting:redstone_ingot',
  C: 'industrialforegoing:machine_frame_pity',
  D: 'alltheores:osmium_gear'
})
event.shaped(Item.of('industrialforegoing:latex_processing_unit'), [
  'ABA',
  'CDC',
  'EFE'
], {
  A: 'immersiveengineering:electron_tube',
  B: 'create:electron_tube',
  C: 'minecraft:powder_snow_bucket',
  D: 'industrialforegoing:machine_frame_pity',
  E: 'advancednetherite:netherite_iron_ingot',
  F: 'create:andesite_alloy'
})
event.shaped(Item.of('industrialforegoing:dissolution_chamber'), [
  'ABA',
  'CDC',
  'EFE'
], {
  A: 'industrialforegoing:plastic',
  B: 'create:andesite_alloy',
  C: 'advancednetherite:netherite_iron_ingot',
  D: 'industrialforegoing:machine_frame_pity',
  E: 'alltheores:diamond_gear',
  F: 'xycraft_world:xychorium_gem_blue'
})
event.shaped(Item.of('mekanism:metallurgic_infuser'), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'xycraft_world:xychorium_gem_blue',
  B: 'ironfurnaces:iron_furnace',
  C: 'alltheores:osmium_gear',
  D: 'mekanism:steel_casing'
})
event.shaped(Item.of('mekanism:enrichment_chamber'), [
  'ABA',
  'CDC',
  'EFE'
], {
  A: 'mekanism:advanced_control_circuit',
  B: 'create:electron_tube',
  C: 'exmachinis:gold_upgrade',
  D: 'mekanism:steel_casing',
  E: 'create:andesite_alloy',
  F: 'alltheores:osmium_gear'
})
event.shaped(Item.of('mekanism:crusher'), [
  'ABA',
  'CDC',
  'AEA'
], {
  A: 'advancednetherite:netherite_iron_ingot',
  B: 'create:crushing_wheel',
  C: 'mekanism:advanced_control_circuit',
  D: 'mekanism:steel_casing',
  E: 'enderio:redstone_alloy_grinding_ball'
})
event.shaped(Item.of('mekanism:basic_tier_installer'), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'morered:red_alloy_ingot',
  B: 'immersiveengineering:circuit_board',
  C: 'mekanism:basic_control_circuit',
  D: 'immersiveengineering:treated_scaffold'
})
event.shaped(Item.of('mekanism:advanced_tier_installer'), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'exmachinis:gold_upgrade',
  B: 'mekanism:advanced_control_circuit',
  C: 'morered:red_alloy_ingot',
  D: 'mekanism:basic_tier_installer'
})
event.shaped(Item.of('mekanism:elite_tier_installer'), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'advancednetherite:netherite_iron_ingot',
  B: 'mekanism:elite_control_circuit',
  C: 'exmachinis:diamond_upgrade',
  D: 'mekanism:advanced_tier_installer'
})
event.shaped(Item.of('mekanism:ultimate_tier_installer'), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'mekanism:ingot_refined_obsidian',
  B: 'mekanism:ultimate_control_circuit',
  C: 'exmachinis:netherite_upgrade',
  D: 'mekanism:elite_tier_installer'
})
event.shaped(Item.of('mekanism:upgrade_speed'), [
  ' A ',
  'CBC',
  ' A '
], {
  A: 'mekanism:structural_glass',
  B: 'mekanism:alloy_infused',
  C: 'exmachinis:gold_upgrade'
})
event.shaped(Item.of('mekanism:upgrade_energy'), [
  ' A ',
  'BCB',
  ' A '
], {
  A: 'mekanism:structural_glass',
  B: 'mekanism:alloy_infused',
  C: 'modularrouters:energy_upgrade'
})
event.shaped(Item.of('powah:dielectric_paste',8), [
  'AA ',
  'BC ',
  '   '
], {
  A: 'mekanism:hdpe_pellet',
  B: 'minecraft:blaze_powder',
  C: 'minecraft:coal'
})
event.shaped(Item.of('powah:dielectric_rod_horizontal'), [
  'AAA',
  'BBB',
  'AAA'
], {
  A: 'powah:dielectric_paste',
  B: 'enderio:dark_steel_bars'
})
event.shaped(Item.of('powah:dielectric_rod'), [
  'ABA',
  'ABA',
  'ABA'
], {
  A: 'powah:dielectric_paste',
  B: 'enderio:dark_steel_bars'
})
event.shaped(Item.of('powah:dielectric_casing'), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'advancednetherite:netherite_iron_ingot',
  B: 'powah:dielectric_rod_horizontal',
  C: 'powah:dielectric_rod',
  D: 'mekanism:steel_casing'
})
event.shaped(Item.of('powah:energizing_orb'), [
  ' A ',
  'BCB',
  'DDD'
], {
  A: 'enderio:redstone_alloy_grinding_ball',
  B: 'mekanism:ultimate_control_circuit',
  C: 'powah:dielectric_casing',
  D: 'powah:dielectric_rod_horizontal'
})
event.shaped(Item.of('ae2:inscriber'), [
  'ABA',
  '  C',
  'ABA'
], {
  A: 'refinedstorage:quartz_enriched_iron',
  B: 'powah:capacitor_niotic',
  C: 'powah:energizing_rod_niotic'
})
event.shaped(Item.of('draconicevolution:basic_crafting_injector'), [
  'ABA',
  'CDC',
  'ECE'
], {
  A: 'justdirethings:coalblock_t4',
  B: 'mysticalagriculture:infusion_altar',
  C: 'allthecompressed:iron_block_2x',
  D: 'appflux:core_256m',
  E: 'pneumaticcraft:printed_circuit_board'
})
event.shaped(Item.of('mysticalagriculture:infusion_altar'), [
  'ABA',
  ' C ',
  'DDD'
], {
  A: 'mekanism:hdpe_sheet',
  B: 'mekanism:dust_lithium',
  C: 'allthecompressed:charged_redstone_block_2x',
  D: 'pneumaticcraft:reinforced_stone'
})
event.shaped(Item.of('mysticalagriculture:infusion_pedestal'), [
  'ABA',
  ' C ',
  ' C '
], {
  A: 'mekanism:hdpe_sheet',
  B: 'allthecompressed:charged_redstone_block_1x',
  C: 'pneumaticcraft:reinforced_stone'
})
event.shaped(Item.of('immersiveengineering:cokebrick',3), [
  'ABA',
  'BCB',
  'ABA'
], {
  A: 'minecraft:bricks',
  B: 'minecraft:brick',
  C: 'allthecompressed:clay_1x'
})
event.shaped(Item.of('immersiveengineering:blastbrick'), [
  'ABA',
  'BCB',
  'ABA'
], {
  A: 'minecraft:red_nether_bricks',
  B: 'minecraft:nether_brick',
  C: 'immersiveengineering:cokebrick'
})
event.shaped(Item.of('immersiveengineering:rs_engineering'), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'immersiveengineering:plate_steel',
  B: 'create:iron_sheet',
  C: 'extendedcrafting:redstone_ingot',
  D: 'alltheores:electrum_block'
})
event.shaped(Item.of('immersiveengineering:light_engineering'), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'create:iron_sheet',
  B: 'immersiveengineering:component_iron',
  C: 'create:andesite_alloy',
  D: 'immersiveengineering:rs_engineering'
})
event.shaped(Item.of('immersiveengineering:heavy_engineering'), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'alltheores:steel_plate',
  B: 'immersiveengineering:component_steel',
  C: 'create:electron_tube',
  D: 'immersiveengineering:light_engineering'
})
event.shaped(Item.of('ars_nouveau:imbuement_chamber'), [
  'ABA',
  'BCB',
  'ABA'
], {
  A: 'minecraft:diamond',
  B: 'modern_industrialization:gold_bolt',
  C: 'immersiveengineering:light_engineering'
})
event.shaped(Item.of('ars_nouveau:enchanting_apparatus'), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'create:electron_tube',
  B: 'ars_nouveau:source_gem_block',
  C: 'advancednetherite:netherite_iron_ingot',
  D: 'xycraft_world:xychorium_gem_blue'
})
event.shaped(Item.of('mekanism:steel_casing'), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'alltheores:steel_ingot',
  B: 'alltheores:osmium_gear',
  C: 'advancednetherite:netherite_iron_ingot',
  D: 'industrialforegoing:machine_frame_advanced'
})
event.shaped(Item.of('justdirethings:gooblock_tier1'), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'mekanism:advanced_control_circuit',
  B: 'mekanism:hdpe_pellet',
  C: 'exmachinis:diamond_upgrade',
  D: 'mekanism:steel_casing'
})
event.shaped(Item.of('minformax:ore_coalescer'), [
  'ABA',
  'CDC',
  'AEA'
], {
  A: 'advancednetherite:netherite_iron_ingot',
  B: 'mekanism:ultimate_crushing_factory',
  C: 'mekanism:ultimate_control_circuit',
  D: 'industrialforegoing:ore_laser_base',
  E: 'mekanism:ultimate_enriching_factory'
})
event.shaped(Item.of('minformax:pandora_box'), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'draconicevolution:awakened_draconium_ingot',
  B: 'mekanism_extras:cosmic_induction_provider',
  C: 'solarflux:sp_de.draconic',
  D: 'mekmm:large_gas_burning_generator'
})
event.shaped(Item.of('minformax:block_replicator'), [
  'ABA',
  'BCB',
  'ABA'
], {
  A: 'advancednetherite:netherite_iron_ingot',
  B: 'minecraft:quartz_block',
  C: 'mekmm:replicator'
})
event.shaped(Item.of('minformax:eternal_generator'), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'mekanism:pellet_plutonium',
  B: 'hostilenetworks:loot_fabricator',
  C: 'hostilenetworks:end_prediction',
  D: 'hostilenetworks:sim_chamber'
})
event.shaped(Item.of('minformax:farmer'), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'growthacceleratortiers:boosted_growth_accelerator',
  B: 'pneumaticcraft:speed_upgrade',
  C: 'mysticalagriculture:awakened_supremium_growth_accelerator',
  D: 'pneumaticcraft:speed_upgrade'
})
event.shaped(Item.of('minformax:fluid_replicator'), [
  'ABA',
  'BCB',
  'ABA'
], {
  A: 'advancednetherite:netherite_iron_ingot',
  B: 'mekanism:ultimate_fluid_tank',
  C: 'mekmm:fluid_replicator'
})
event.shaped(Item.of('cobblegengalore:block_gen_stone'), [
  'AAA',
  'BCB',
  'AAA'
], {
  A: 'minecraft:smooth_stone',
  B: 'mob_grinding_utils:tinted_glass',
  C: 'createcobblestone:mechanical_generator'
})
event.shaped(Item.of('cobblegengalore:block_gen_copper'), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'minecraft:copper_block',
  B: 'mob_grinding_utils:tinted_glass',
  C: 'cobblegengalore:block_gen_stone',
  D: 'minecraft:copper_block'
})
event.shaped(Item.of('cobblegengalore:block_gen_iron'), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'minecraft:iron_block',
  B: 'mob_grinding_utils:tinted_glass',
  C: 'cobblegengalore:block_gen_copper',
  D: 'minecraft:iron_block'
})
event.shaped(Item.of('cobblegengalore:block_gen_gold'), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'minecraft:gold_block',
  B: 'mob_grinding_utils:tinted_glass',
  C: 'cobblegengalore:block_gen_iron',
  D: 'minecraft:gold_block'
})
event.shaped(Item.of('cobblegengalore:block_gen_emerald'), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'minecraft:emerald_block',
  B: 'mob_grinding_utils:tinted_glass',
  C: 'cobblegengalore:block_gen_gold',
  D: 'minecraft:emerald_block'
})
event.shaped(Item.of('cobblegengalore:block_gen_diamond'), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'minecraft:diamond_block',
  B: 'mob_grinding_utils:tinted_glass',
  C: 'cobblegengalore:block_gen_emerald',
  D: 'minecraft:diamond_block'
})
event.shaped(Item.of('cobblegengalore:block_gen_netherite'), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'minecraft:netherite_block',
  B: 'mob_grinding_utils:tinted_glass',
  C: 'cobblegengalore:block_gen_diamond',
  D: 'minecraft:netherite_block'
})
event.recipes.powah.energizing(
  [
    "mekanism:pellet_antimatter",
    "pneumaticcraft:printed_circuit_board",
    "justdirethings:eclipsealloy_ingot",
    "draconicevolution:medium_chaos_frag"
  ],
  "replication:replica_ingot",
  2000000000
)
event.shaped(Item.of('replication:memory_chip'), [
  'ABA',
  'CDC',
  'AEA'
], {
  A: 'replication:replica_ingot',
  B: 'appgen:generating_component_256m',
  C: 'morered:red_alloy_ingot',
  D: 'oritech:prometheum_ingot',
  E: 'megacells:cell_component_256m'
})
event.shaped(Item.of('replication:matter_network_pipe',4), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'replication:replica_ingot',
  B: 'mekanism_extras:absolute_universal_cable',
  C: 'mekanism_extras:absolute_logistical_transporter',
  D: 'mekanism_extras:absolute_logistical_transporter'
})
event.shaped(Item.of('replication:replication_terminal'), [
  'ABA',
  'CDC',
  'AEA'
], {
  A: 'replication:replica_ingot',
  B: 'ae2:terminal',
  C: 'ae2:crafting_terminal',
  D: 'advanced_ae:quantum_crafter_terminal',
  E: 'ae2:pattern_access_terminal'
})
event.shaped(Item.of('replication:matter_tank'), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'create_sa:large_fueling_tank',
  B: 'replication:replica_ingot',
  C: 'mekanism:ultimate_fluid_tank',
  D: 'mekanism:ultimate_fluid_tank'
})
event.shaped(Item.of('replication:disintegrator'), [
  'ABA',
  'CDC',
  'AEA'
], {
  A: 'occultism:marid_essence',
  B: 'replication:replica_ingot',
  C: 'mekanism:ultimate_crushing_factory',
  D: 'create:crushing_wheel',
  E: 'create:crushing_wheel'
})
event.shaped(Item.of('replication:identification_chamber'), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'replication:replica_ingot',
  B: 'sauce:anima_essence',
  C: 'mekanism:elite_purifying_factory',
  D: 'industrialforegoing:dissolution_chamber'
})
event.shaped(Item.of('replication:replicator'), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'mekanism_extras:supreme_tier_installer',
  B: 'replication:replica_ingot',
  C: 'mekmm:replicator',
  D: 'mekanism_extras:supreme_tier_installer'
})
// AVISO: receita com item de output vazio removida - defina o item correto
// event.shaped(Item.of(''), [ 'ABA', 'A A', 'CDC' ], { ... })
event.shaped(Item.of('actuallyadditions:atomic_reconstructor'), [
  'ABA',
  'CDC',
  'AEA'
], {
  A: 'alltheores:osmium_gear',
  B: 'exmachinis:gold_upgrade',
  C: 'create:electron_tube',
  D: 'mysticalagriculture:machine_frame',
  E: 'createaddition:electric_motor'
})
event.shaped(Item.of('refinedstorage:machine_casing'), [
  'AAA',
  'ABA',
  'AAA'
], {
  A: 'refinedstorage:quartz_enriched_iron',
  B: 'oritech:machine_core_3'
})
event.shaped(Item.of('ae2:speed_card',4), [
  ' B ',
  'ACA',
  ' D '
], {
  A: 'modularrouters:speed_upgrade',
  B: 'mekanism:upgrade_speed',
  C: 'ae2:advanced_card',
  D: 'minformax:speed_upgrade_tier1'
})
event.shaped(Item.of('ae2:cell_component_1k'), [
  'ABA',
  'BCB',
  'ABA'
], {
  A: 'appflux:charged_redstone',
  B: 'ae2:fluix_crystal',
  C: 'ae2:logic_processor'
})
event.shaped(Item.of('ae2:storage_bus'), [
  'ABA',
  'CDC',
  'EFE'
], {
  A: 'sophisticatedstorage:storage_link',
  B: 'create:mechanical_piston',
  C: 'sophisticatedstorage:controller',
  D: 'ae2:interface',
  E: 'functionalstorage:storage_controller',
  F: 'create:sticky_mechanical_piston'
})
event.shaped(Item.of('ae2:drive'), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'refinedstorage:quartz_enriched_iron',
  B: 'ae2:fluix_glass_cable',
  C: 'extrastorage:neural_processor',
  D: 'ae2:cell_component_1k'
})
// CORRIGIDO: adicionado ingrediente F em falta + removida quebra de linha no Item.of
event.shaped(Item.of('advanced_ae:reaction_chamber'), [
  'ABA',
  'CDC',
  'EFE'
], {
  A: 'allthecompressed:fluix_block_1x',
  B: 'ae2:fluix_pearl',
  C: 'mekanism:pressurized_reaction_chamber',
  D: 'ae2:energy_cell',
  E: 'advancednetherite:netherite_iron_ingot',
  F: 'ae2:fluix_crystal'
})
event.shaped(Item.of('ae2:fluix_glass_cable',16), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'ae2:fluix_crystal',
  B: 'createaddition:electrum_wire',
  C: 'createaddition:gold_wire',
  D: 'ae2:quartz_fiber'
})
event.shaped(Item.of('justdirethings:time_wand'), [
  ' AB',
  ' CA',
  'D  '
], {
  A: 'justdirethings:eclipsealloy_ingot',
  B: 'mekanism:pellet_antimatter',
  C: 'justdirethings:time_crystal_block',
  D: 'ars_nouveau:dominion_wand'
})
event.shaped(Item.of('industrialforegoingsouls:soul_surge'), [
  'ABA',
  'CDC',
  'EEE'
], {
  A: 'justdirethings:time_crystal',
  B: 'mekanism:hdpe_stick',
  C: 'growthacceleratortiers:boosted_growth_accelerator',
  D: 'industrialforegoingsouls:soul_network_pipe',
  E: 'minecraft:echo_shard'
})
event.shaped(Item.of('industrialforegoingsouls:soul_network_pipe',4), [
  'AAA',
  'ABA',
  'AAA'
], {
  A: 'industrialforegoing:plastic',
  B: 'justdirethings:time_crystal'
})
event.shaped(Item.of('extendedae:entro_seed'), [
  'ABA',
  'BCB',
  'ABA'
], {
  A: 'alltheores:enderium_dust',
  B: 'actuallyadditions:ender_star',
  C: 'mysticalagriculture:prosperity_seed_base'
})
event.shaped(Item.of('mysticalagriculture:prosperity_seed_base'), [
  'ABA',
  'BCB',
  'ABA'
], {
  A: 'mysticalagriculture:prosperity_block',
  B: 'mysticalagriculture:prosperity_ingot_block',
  C: 'ars_nouveau:magebloom_crop'
})
event.shaped(Item.of('extendedae:assembler_matrix_wall'), [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'enderio:dark_steel_ladder',
  B: 'ae2:fluix_block',
  C: 'extendedae:entro_ingot',
  D: 'pneumaticcraft:pressure_chamber_wall'
})
event.shaped(Item.of('chunkloaders:single_chunk_loader'), [
  'ABA',
  'BCB',
  'ABA'
], {
  A: 'allthecompressed:nitro_crystal_block_2x',
  B: 'extendedcrafting:nether_star_block',
  C: 'aeinfinitybooster:dimension_card'
})
event.shaped(Item.of('chunkloaders:basic_chunk_loader'), [
  'ABA',
  'BCB',
  'ABA'
], {
  A: 'chunkloaders:single_chunk_loader',
  B: 'draconicevolution:awakened_draconium_block',
  C: 'modern_industrialization:analog_circuit_board'
})
event.shaped(Item.of('chunkloaders:advanced_chunk_loader'), [
  'ABA',
  'DED',
  'GIG'
], {
  A: 'chunkloaders:basic_chunk_loader',
  B: 'allthecompressed:gold_block_4x',
  D: 'allthecompressed:gold_block_4x',
  E: 'modern_industrialization:analog_circuit',
  G: 'chunkloaders:basic_chunk_loader',
  I: 'chunkloaders:basic_chunk_loader'
})
event.shaped(Item.of('chunkloaders:ultimate_chunk_loader'), [
  'ABC',
  'DEF',
  'GHI'
], {
  A: 'chunkloaders:advanced_chunk_loader',
  B: 'oritech:prometheum_ingot',
  C: 'chunkloaders:advanced_chunk_loader',
  D: 'allthecompressed:antimatter_block_1x',
  E: 'modern_industrialization:electronic_circuit',
  F: 'allthecompressed:antimatter_block_1x',
  G: 'chunkloaders:advanced_chunk_loader',
  H: 'oritech:prometheum_ingot',
  I: 'chunkloaders:advanced_chunk_loader'
})
event.shaped(Item.of('entangled:block'), [
  'ABA',
  'BCB',
  'ABA'
], {
  A: 'mekanism:ingot_refined_obsidian',
  B: 'mekanism:quantum_entangloporter',
  C: 'appliedsoul:ender_star'
})
event.recipes.powah.energizing(
  [
    "powah:capacitor_niotic",
    "powah:crystal_niotic",
    "ae2:calculation_processor",
    "ars_nouveau:storage_lectern"
  ],
  "ae2:controller",
  20000000
)
event.recipes.powah.energizing(
  [
    "powah:capacitor_niotic",
    "powah:crystal_niotic",
    "refinedstorage:machine_casing",
    "ars_nouveau:storage_lectern"
  ],
  "refinedstorage:controller",
  20000000
)

event.recipes.powah.energizing(
  [
    "ae2:formation_core",
    "ae2:annihilation_core",
    "mekanism:elite_control_circuit",
    "enderio:vacuum_chest"
  ],
  "ae2:pattern_provider",
  2000000
)

event.recipes.powah.energizing(
  [
    "rftoolsutility:crafter3",
    "refinedstorage:improved_processor",
    "mekanism:elite_control_circuit",
    "oritech:machine_core_3"
  ],
  "refinedstorage:autocrafter",
  2000000
)
event.recipes.powah.energizing(
  [
    "rftoolsutility:crafter3",
    "ae2:annihilation_core",
    "mekanism:elite_control_circuit",
    "ae2:formation_core"
  ],
  "ae2:molecular_assembler",
  2000000
  )
event.recipes.powah.energizing(
  [
    "allthecompressed:gold_block_2x",
    "allthecompressed:blazing_crystal_block_2x",
    "allthecompressed:blazing_crystal_block_2x"
  ],
  "allthemodium:allthemodium_ingot",
  20000000
)
  event.recipes.powah.energizing(
  [
    "allthemodium:allthemodium_ingot",
    "allthecompressed:spirited_crystal_block_1x",
    "allthecompressed:spirited_crystal_block_1x"
  ],
  "allthemodium:vibranium_ingot",
  40000000
)
   
event.recipes.powah.energizing(
  [
    "mekanism:alloy_atomic",
    "mekanism:alloy_atomic",
    "allthemodium:vibranium_ingot"
  ],
  "allthemodium:unobtainium_ingot",
  60000000
)
event.recipes.powah.energizing(
  [
    "minecraft:deepslate",
    "minecraft:netherite_upgrade_smithing_template",
    "allthemodium:allthemodium_block"
  ],
  "allthemodium:allthemodium_upgrade_smithing_template",
  100000000
)

event.recipes.powah.energizing(
  [
    "allthecompressed:ancient_stone_1x",
    "allthemodium:vibranium_block",
    "allthemodium:allthemodium_upgrade_smithing_template"
  ],
  "allthemodium:vibranium_upgrade_smithing_template",
  1200000000
)

event.recipes.powah.energizing(
  [
    "allthecompressed:crushed_end_stone_1x",
    "allthemodium:unobtainium_block",
    "allthemodium:vibranium_upgrade_smithing_template"
  ],
  "allthemodium:unobtainium_upgrade_smithing_template",
  1600000000
)
event.recipes.powah.energizing(
  [
    "powah:dielectric_paste",
    "powah:dielectric_paste",
    "powah:dielectric_paste",
    "minecraft:quartz"
  ],
  "actuallyadditions:black_quartz",
  200000
)
event.recipes.powah.energizing(
  [
    "minecraft:white_dye",
    "cognition:fluorescent_jelly"
  ],
  "alltheores:fluorite",
  300000
)
event.recipes.powah.energizing(
  [
    "alltheores:fluorite",
    "mysticalagriculture:inferium_essence",
    "mekanism:dust_lithium"
  ],
  "mysticalagriculture:prosperity_shard",
  300000
)
event.recipes.powah.energizing(
  [
    "extendedcrafting:singularity[extendedcrafting:singularity_id='extendedcrafting:glowstone']",
    "extendedcrafting:singularity[extendedcrafting:singularity_id='extendedcrafting:redstone']",
    "draconicevolution:awakened_draconium_ingot"
  ],
  "modular_machinery_reborn:modularium",
  100000000
)
event.recipes.powah.energizing(
  [
    "extendedcrafting:singularity[extendedcrafting:singularity_id='extendedcrafting:glowstone']",
    "extendedcrafting:singularity[extendedcrafting:singularity_id='extendedcrafting:redstone']",
    "draconicevolution:awakened_draconium_ingot"
  ],
  "modular_machinery_reborn:modularium",
  100000000
)
event.recipes.powah.energizing(
  [
    "minecraft:soul_sand",
    "minecraft:soul_sand"
  ],
  "mysticalagriculture:soulstone",
  100000
)
event.recipes.powah.energizing(
  [
    "mysticalagriculture:soulstone",
    "mysticalagriculture:prosperity_shard"
  ],
  "mysticalagriculture:soulium_ore",
  1000000
)
event.recipes.powah.energizing(
  [
    "immersiveengineering:dust_hop_graphite"
  ],
  "immersiveengineering:ingot_hop_graphite",
  1000000
)
})