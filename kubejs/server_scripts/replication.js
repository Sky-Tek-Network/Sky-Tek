ServerEvents.recipes(event => {
    event.custom({
        type: 'replication:matter_value',
        input: { item: 'ars_nouveau:source_gem' },
        matter: [
            { type: 'replication:earth', amount: 2 },
            { type: 'replication:precious', amount: 8 }
        ]
    })
    event.custom({
        type: 'replication:matter_value',
        input: { item: 'extendedcrafting:the_ultimate_ingot' },
        matter: [
            { type: 'replication:metallic', amount: 250000 },
            { type: 'replication:ender', amount: 250000 },
            { type: 'replication:living', amount: 250000 },
            { type: 'replication:nether', amount: 250000 },
            { type: 'replication:organic', amount: 250000 },
            { type: 'replication:precious', amount: 250000 },
            { type: 'replication:quantum', amount: 250000 }
        ]
    })

    event.custom({
        type: 'replication:matter_value',
        input: { item: 'ars_nouveau:source_gem' },
        matter: [
            { type: 'replication:earth', amount: 2 },
            { type: 'replication:precious', amount: 8 }
        ]
    })
    event.custom({
        type: 'replication:matter_value',
        input: { item: 'mekanism:steel_casing' },
        matter: [
            { type: 'replication:metallic', amount: 250 },
            { type: 'replication:precious', amount: 250}
        ]
    })

})