ServerEvents.recipes(event => {
    event.recipes.modular_machinery_reborn.machine_recipe("mmr:green_house_v2", 1)
        .width(248)
        .height(278)
        .requireEnergyPerTick(50000000)
        .requireItem('geore:allthemodium_spyglass', 0.0, 30, 0)

        .produceItem(Item.of('allthemodium:allthemodium_ingot',              1024), 90, 0)
        .produceItem(Item.of('allthemodium:vibranium_ingot',              1024), 110, 0)
        .produceItem(Item.of('allthemodium:unobtainium_ingot',               1024), 130, 0)
        .produceItem(Item.of('justdirethings:time_crystal',           1024), 150, 0)
        .produceItem(Item.of('modern_industrialization:stainless_steel_ingot',              1024), 170, 0)
        .produceItem(Item.of('industrialforegoing:pink_slime_ingot',               1024), 190, 0)
        .produceItem(Item.of('oritech:prometheum_ingot',               1024), 210, 0)
        .produceItem(Item.of('occultism:iesnium_ingot',                1024), 230,  0)
                .produceItem(Item.of('replication:replica_ingot',                1024), 90,  20)

        .requireFluid(Fluid.of("industrialforegoing:ether_gas", 1024), 30, 20)
        .requireFluid(Fluid.of("minecraft:water", 200000), 30, 40)
});