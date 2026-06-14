ServerEvents.recipes((event) => {
  const MAX_TIER = 4
  const CHAIN = [
    ['cobblestone', 'gravel'],
    ['diorite', 'gravel'],
    ['granite', 'gravel'],
    ['andesite', 'gravel'],
    ['gravel', 'sand'],
    ['sand', 'dust'],
    ['red_sand', 'dust'],
    ['blackstone', 'crushed_blackstone'],
    ['netherrack', 'crushed_netherrack'],
    ['crushed_netherrack', 'red_sand'],
    ['deepslate', 'crushed_deepslate'],
    ['cobbled_deepslate', 'crushed_deepslate'],
    ['end_stone', 'crushed_end_stone']
  ]

  event.remove({ type: 'exdeorum:compressed_hammer' })

  function compressedHammer(input, output) {
    event
      .custom({
        type: 'exdeorum:compressed_hammer',
        ingredient: { item: input },
        result: { count: 1, id: output },
        result_amount: 1
      })
      .id(`kubejs:exdeorum/compressed_hammer/${input.split(':')[1]}`)
  }

  function atc(name, tier) {
    return `allthecompressed:${name}_${tier}x`
  }

  for (let i = 1; i <= MAX_TIER; i++) {
    CHAIN.forEach((pair) => {
      compressedHammer(atc(pair[0], i), atc(pair[1], i))
    })
  }
})
