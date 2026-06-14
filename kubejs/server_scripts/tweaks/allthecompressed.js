ServerEvents.recipes((event) => {
  const MAX_TIER = 4

  function haunting(input, output) {
    event
      .custom({
        type: 'create:haunting',
        ingredients: [{ item: input }],
        results: [{ id: output, count: 1 }]
      })
      .id(`kubejs:create/haunting/${output.split(':')[1]}`)
  }

  function washing(input, output) {
    event
      .custom({
        type: 'create:splashing',
        ingredients: [{ item: input }],
        results: [{ id: output, count: 1 }]
      })
      .id(`kubejs:create/splashing/${output.split(':')[1]}`)
  }

  function blasting(input, output) {
    event.blasting(output, input).id(`kubejs:create/blasting/${output.split(':')[1]}`)
  }

  function atc(name, tier) {
    return `allthecompressed:${name}_${tier}x`
  }

  for (let i = 1; i <= MAX_TIER; i++) {
    haunting(atc('cobblestone', i), atc('blackstone', i))
    haunting(atc('sand', i), atc('soul_sand', i))
    haunting(atc('dirt', i), atc('soul_soil', i))

    washing(atc('magma_block', i), atc('obsidian', i))
    washing(atc('sand', i), atc('clay', i))
    washing(atc('gravel', i), atc('flint_block', i))

    blasting(atc('cobblestone', i), atc('stone', i))
    blasting(atc('sand', i), atc('glass', i))
    blasting(atc('clay', i), atc('terracotta', i))
    blasting(atc('cobbled_deepslate', i), atc('deepslate', i))
  }
})
