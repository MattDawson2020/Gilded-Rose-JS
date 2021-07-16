describe('Feature test', function() {
  let gildedRose
  let regularItem
  let sulfuras
  let agedBrie
  let backstagePass
  let conjuredItem

  beforeEach(function() {
    regularItem = new RegularItem({
      name: 'Regular Item', 
      sellIn: 20, 
      quality: 40
    })
    sulfuras = new Sulfuras({
      name: 'Sulfuras Hand of Ragnaros', 
      sellIn: 0, 
      quality: 50
    })
    agedBrie = new AgedBrie({
      name: 'AgedBrie',
      sellIn: 20, 
      quality: 20
    })
    backstagePass = new BackstagePass({
      name: 'Backstage Pass', 
      sellIn: 20, 
      quality: 20
    })
    conjuredItem = new ConjuredItem({
      name: 'ConjuredItem',
      sellIn: 10, 
      quality: 40
    })
    gildedRose = new GildedRose([
      regularItem,
      sulfuras,
      agedBrie,
      backstagePass,
      conjuredItem
    ])
  })

  it('can update all items', function() {
    expect(gildedRose.items[0].quality).toEqual(40)
    expect(gildedRose.items[1].quality).toEqual(50)
    expect(gildedRose.items[2].quality).toEqual(20)
    expect(gildedRose.items[3].quality).toEqual(20)
    expect(gildedRose.items[4].quality).toEqual(40)

    gildedRose.updateQuality()
    expect(gildedRose.items[0].quality).toEqual(39)
    expect(gildedRose.items[1].quality).toEqual(50)
    expect(gildedRose.items[2].quality).toEqual(21)
    expect(gildedRose.items[3].quality).toEqual(21)
    expect(gildedRose.items[4].quality).toEqual(38)
  })

  it('can update all items indefinitely', function() {
    expect(gildedRose.items[0].quality).toEqual(40)
    expect(gildedRose.items[1].quality).toEqual(50)
    expect(gildedRose.items[2].quality).toEqual(20)
    expect(gildedRose.items[3].quality).toEqual(20)
    expect(gildedRose.items[4].quality).toEqual(40)

    gildedRose.updateQuality()
    gildedRose.updateQuality()
    gildedRose.updateQuality()
    gildedRose.updateQuality()
    gildedRose.updateQuality()

    expect(gildedRose.items[0].quality).toEqual(35)
    expect(gildedRose.items[1].quality).toEqual(50)
    expect(gildedRose.items[2].quality).toEqual(25)
    expect(gildedRose.items[3].quality).toEqual(25)
    expect(gildedRose.items[4].quality).toEqual(30)
  })

})