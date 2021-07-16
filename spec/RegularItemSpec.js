describe("RegularItem", function() {
  let regularItem

  beforeEach(function() {
    regularItem = new RegularItem({
      name: 'Regular Item', 
      sellIn: 20, 
      quality: 40
    })
  });

  it("should create an regularItem", function() {
    expect(regularItem).not.toBe(null)
  });

  it("should come with set attributes", function() {
    expect(regularItem.quality).toBe(40)
    expect(regularItem.sellIn).toBe(20)
  });

  it('can update its attributes', function() {
    regularItem.updateQuality()
    expect(regularItem.quality).toBe(39)
    expect(regularItem.sellIn).toBe(19)
  })

    it('reduces quality by 2 when sellIn below 0', function() {
    for(i = 0; i < 20; i++) {
      regularItem.updateQuality()
    }
    expect(regularItem.quality).toBe(20)
    expect(regularItem.sellIn).toBe(0)

    regularItem.updateQuality()
    expect(regularItem.quality).toBe(18)
  })

  it('cannot go below minimum quality', function() {
    for(i = 0; i < 30; i++) {
      regularItem.updateQuality()
    }
    expect(regularItem.quality).toBe(0)

    expect(function() { regularItem.updateQuality() }).toThrowError(Error, "Cannot go below minimum quality")
  })



});
