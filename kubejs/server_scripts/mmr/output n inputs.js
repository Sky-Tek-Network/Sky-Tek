// kubejs/server_scripts/crafts.js

ServerEvents.recipes(event => {

  // ── outputbus_ludicrous ──────────────────────────────────────────────────
  // Padrão: modularium ao redor + chest no centro
  // Polymorph: outputbus_ludicrous  OU  chest
  event.shaped('modular_machinery_reborn:outputbus_ludicrous', [
    'M M',
    'MCM',
    'M M'
  ], {
    M: 'modular_machinery_reborn:modularium',
    C: 'minecraft:chest'
  })
  event.shaped('modular_machinery_reborn:inputbus_ludicrous', [
    'M M',
    'MCM',
    'M M'
  ], {
    M: 'modular_machinery_reborn:modularium',
    C: 'minecraft:chest'
  })


  // ── energyoutputhatch_ultimate ───────────────────────────────────────────
  // Padrão: modularium ao redor + redstone_block no centro
  // Polymorph: energyoutputhatch_ultimate  OU  redstone_block
  event.shaped('modular_machinery_reborn:energyoutputhatch_ultimate', [
    'M M',
    'MRM',
    'M M'
  ], {
    M: 'modular_machinery_reborn:modularium',
    R: 'minecraft:redstone_block'
  })
  event.shaped('modular_machinery_reborn:energyinputhatch_ultimate', [
    'M M',
    'MRM',
    'M M'
  ], {
    M: 'modular_machinery_reborn:modularium',
    R: 'minecraft:redstone_block'
  })


  // ── fluidoutputhatch_vacuum ──────────────────────────────────────────────
  // Padrão: modularium ao redor + bucket no centro
  // Polymorph: fluidoutputhatch_vacuum  OU  bucket
  event.shaped('modular_machinery_reborn:fluidoutputhatch_vacuum', [
    'M M',
    'MBM',
    'M M'
  ], {
    M: 'modular_machinery_reborn:modularium',
    B: 'minecraft:bucket'
  })
  event.shaped('modular_machinery_reborn:fluidinputhatch_vacuum', [
    'M M',
    'MBM',
    'M M'
  ], {
    M: 'modular_machinery_reborn:modularium',
    B: 'minecraft:bucket'
  })


  // ── experienceoutputhatch_vacuum ─────────────────────────────────────────
  // Padrão: modularium ao redor + experience_droplet no centro
  // Polymorph: experienceoutputhatch_vacuum  OU  experience_droplet
  event.shaped('modular_machinery_reborn:experienceoutputhatch_vacuum', [
    'M M',
    'MEM',
    'M M'
  ], {
    M: 'modular_machinery_reborn:modularium',
    E: 'mysticalagriculture:experience_droplet'
  })
  event.shaped('modular_machinery_reborn:experienceinputhatch_vacuum', [
    'M M',
    'MEM',
    'M M'
  ], {
    M: 'modular_machinery_reborn:modularium',
    E: 'mysticalagriculture:experience_droplet'
  })


  // ── sourceoutputhatch_vacuum (Ars Nouveau) ───────────────────────────────
  // Padrão: modularium ao redor + magebloom_fiber no centro
  // Polymorph: sourceoutputhatch_vacuum  OU  magebloom_fiber
  event.shaped('modular_machinery_reborn_ars:sourceoutputhatch_vacuum', [
    'M M',
    'MFM',
    'M M'
  ], {
    M: 'modular_machinery_reborn:modularium',
    F: 'ars_nouveau:magebloom_fiber'
  })
  event.shaped('modular_machinery_reborn_ars:sourceinputhatch_vacuum', [
    'M M',
    'MFM',
    'M M'
  ], {
    M: 'modular_machinery_reborn:modularium',
    F: 'ars_nouveau:magebloom_fiber'
  })


  // ── chemicaloutputhatch_vacuum (Mekanism) ────────────────────────────────
  // Padrão: modularium ao redor + dust_lithium no centro
  // Polymorph: chemicaloutputhatch_vacuum  OU  dust_lithium
  event.shaped('modular_machinery_reborn_mekanism:chemicaloutputhatch_vacuum', [
    'M M',
    'MLM',
    'M M'
  ], {
    M: 'modular_machinery_reborn:modularium',
    L: 'mekanism:dust_lithium'
  })
  event.shaped('modular_machinery_reborn_mekanism:chemicalinputhatch_vacuum', [
    'M M',
    'MLM',
    'M M'
  ], {
    M: 'modular_machinery_reborn:modularium',
    L: 'mekanism:dust_lithium'
  })


  // ── craft assimétrico (lithium + source_gem + brass_hand) ────────────────
  // Padrão: modularium + lithium topo, source_gem meio, brass_hand baixo
  // Polymorph: <output principal>  OU  source_gem  OU  brass_hand  OU  dust_lithium
  event.shaped('modular_machinery_reborn:parallel_hatch_max', [
    'MLM',
    'MSM',
    'MHM'
  ], {
    M: 'modular_machinery_reborn:modularium',
    L: 'mekanism:dust_lithium',
    S: 'ars_nouveau:source_gem',
    H: 'create:brass_hand'
  })
})