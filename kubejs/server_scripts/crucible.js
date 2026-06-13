ServerEvents.recipes(event => {

  event.custom({
    type: 'exdeorum:crucible_heat_source',
    block_predicate: {
      block: 'alltheores:uranium_block'
    },
    heat_value: 20
  })

  event.custom({
    type: 'exdeorum:crucible_heat_source',
    block_predicate: {
      block: 'mekanism:superheating_element'
    },
    heat_value: 60
  })

  event.custom({
    type: 'exdeorum:crucible_heat_source',
    block_predicate: {
      block: 'allthemodium:soul_lava'
    },
    heat_value: 120
  })

})