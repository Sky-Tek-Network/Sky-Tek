ServerEvents.recipes(event => {
    const itensToRemove = [
        'refinedstorage:creative_fluid_storage_disk',
        'refinedstorage:creative_storage_disk',
        'mekanism:creative_chemical_tank',
        'mekanism:creative_fluid_tank',
        'mekanism:creative_bin',
        'refinedstorage:creative_controller',
        'ae2:creative_energy_cell'
    ];

    itensToRemove.forEach(item => {
        event.remove({ output: item });
        event.remove({ input: item });
    });
});