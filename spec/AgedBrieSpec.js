describe("AgedBrie", function() {

  beforeEach(function() {
    agedBrie.sellIn = 20
    agedBrie.quality = 20
  });

  it("should create an agedBrie", function() {
    console.log(agedBrie)
    expect(agedBrie).not.toBe(null)
  });

  it("should come with set attributes", function() {
    expect(agedBrie.quality).toBe(20)
    expect(agedBrie.sellIn).toBe(20)
  });

  it('can update its attributes', function() {
    agedBrie.updateQuality()
    expect(agedBrie.quality).toBe(21)
    expect(agedBrie.sellIn).toBe(19)
  })

    it('aged brie quality increases with time', function() {
    expect(agedBrie.quality).toBe(20)
    expect(agedBrie.sellIn).toBe(20)

      for(i = 0; i < 10; i++) {
      agedBrie.updateQuality()
    }

    expect(agedBrie.quality).toBe(30)
    expect(agedBrie.sellIn).toBe(10)
  })

  // it('cannot exceed maximum quality', function() {
  //   for(i = 0; i < 30; i++) {
  //     agedBrie.updateQuality()
  //   }
  //   expect(agedBrie.quality).toBe(50)

  //   expect(function() { agedBrie.updateQuality() }).toThrowError(Error, "Cannot exceed maximum quality")
  // })

 

});
