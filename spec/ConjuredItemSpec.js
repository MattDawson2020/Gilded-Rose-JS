describe("ConjuredItem", function() {
  let conjuredItem

  beforeEach(function() {
    conjuredItem = new ConjuredItem({
      name: 'ConjuredItem',
      sellIn: 10, 
      quality: 40
    })
  });

  it("should create a conjuredItem", function() {
    expect(conjuredItem).not.toBe(null)
  });

  it("should come with set attributes", function() {
    expect(conjuredItem.quality).toBe(40)
    expect(conjuredItem.sellIn).toBe(10)
  });

  it('can update its attributes', function() {
    conjuredItem.updateQuality()
    expect(conjuredItem.quality).toBe(38)
    expect(conjuredItem.sellIn).toBe(9)
  })

  it('reduces quality by 4 when sellIn below 0', function() {
    for(i = 0; i < 10; i++) {
      conjuredItem.updateQuality()
    }
    expect(conjuredItem.quality).toBe(20)
    expect(conjuredItem.sellIn).toBe(0)

    conjuredItem.updateQuality()
    expect(conjuredItem.quality).toBe(16)
  })

  it('cannot go below minimum quality', function() {
    for(i = 0; i < 15; i++) {
      conjuredItem.updateQuality()
    }
    expect(conjuredItem.quality).toBe(0)

    expect(function() { conjuredItem.updateQuality() }).toThrowError(Error, "Cannot go below minimum quality")
  })

 

});
