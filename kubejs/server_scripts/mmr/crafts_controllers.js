ServerEvents.recipes(event => { 
    let speedAddon = 'mifa:speed_addon_8[titanium:augments={Speed:9.0f}]'

    event.shaped('modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:anti_matter_generator"]', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'mekanismgenerators:reactor_glass',
        B: 'mekanism:sps_casing',
        C: 'mekanism_extras:absolute_induction_cell'
    })

    event.shaped('modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:ether_gas_machine"]', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: speedAddon,
        B: 'industrialforegoing:pink_slime_ingot',
        C: 'industrialforegoing:machine_frame_supreme'
    })

    event.shaped('modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:green_house"]', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'mysticalagradditions:insanium_essence',
        B: speedAddon,
        C: 'industrialforegoing:hydroponic_bed'
    })

    event.shaped('modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:green_house_v2"]', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'mysticalextendedtier:lightium_essence',
        B: speedAddon,
        C: 'industrialforegoing:simulated_hydroponic_bed'
    })
event.shaped('modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:fission_reactor"]',
        [
            'ABC',
            'BDB',
            'EBF'
        ],
        {
            A: 'mekanism:steel_casing',
            B: 'mekanismgenerators:reactor_glass',
            C: 'mekanism:boiler_casing',
            D: 'mekanism:pellet_antimatter',
            E: 'mekanismgenerators:fission_reactor_casing',
            F: 'mekanism:sps_casing'
        }
    )
})