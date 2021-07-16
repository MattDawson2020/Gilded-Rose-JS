describe("Item", function() {

  beforeEach(function() {
    item._quality = 50
    item._sellIn = 20
  });

  it("should create an item", function() {
    expect(item).not.toBe(null)
  });

  it("should come with maximum attributes", function() {
    expect(item.quality).toBe(50)
    expect(item.sellIn).toBe(20)
  });

  it('can update its attributes', function() {
    item.updateQuality()
    expect(item.quality).toBe(49)
    expect(item.sellIn).toBe(19)
  })

    it('reduces quality by 2 when sellIn below 0', function() {
    for(i = 0; i < 20; i++) {
      item.updateQuality()
    }
    expect(item.quality).toBe(30)
    expect(item.sellIn).toBe(0)

    item.updateQuality()
    expect(item.quality).toBe(28)
  })

  it('cannot go below minimum quality', function() {
    for(i = 0; i < 35; i++) {
      item.updateQuality()
    }
    expect(item.quality).toBe(0)

    expect(function() { item.updateQuality() }).toThrowError(Error, "Cannot go below minimum quality")
  })

});